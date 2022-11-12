import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
} from "@mui/material";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { getLocalItem } from "../../utils/localStorage";
import Favoritar from "../favoritar";
import Loading from "../loading";
import { PaginationControlled } from "../pagination";
import "./style.css";
export function CustomerCharges() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [page, setContentPage] = useState(1);
  const [headers, setHeaders] = useState(0);
  const id_usuario = getLocalItem("usuario_id");
  const token = getLocalItem("token");
  
  function favoritados() {
    api
      .get(`/postagem/favoritos`, {
        headers: {
          Authorization: `Bearer ${token}`,
          id: id_usuario,
        },
      })
      .then((response) => {
        setLoading(false);
        setResult(response.data.favoritos);
        setHeaders(response.headers["x-total-count"])
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  useEffect(() => {
    favoritados();
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <TableContainer
        className="container-table-fav"
        component={Paper}
        sx={{
          borderRadius: "20px",
          maxWidth: "900px",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow id="tableRow">
              <TableCell align="center" colSpan={5}>
                <h3>Lista de favoritos</h3>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h4>Titulo</h4>
              </TableCell>
              <TableCell>
                <h4>Criador</h4>
              </TableCell>
              <TableCell>
                <h4>Tipo</h4>
              </TableCell>
              <TableCell>
                <h4>Trilha</h4>
              </TableCell>
              <TableCell>
                <h4>Remover</h4>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              maxWidth: "360px",
            }}
          >
            {result &&
              result.map((row) => (
                <TableRow id="tableMain" key={row.id}>
                  <TableCell
                    sx={{
                      maxWidth: "180px",
                    }}
                  >
                    {row.titulo}
                  </TableCell>
                  <TableCell>{row.criador_nome}</TableCell>
                  <TableCell>{row.tipo}</TableCell>
                  <TableCell>{row.trilha}</TableCell>
                  <TableCell>
                    <Favoritar id_conteudos={row.id} favoritado={true} />{" "}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
       
      </TableContainer>
      <div className="pagination">
            <PaginationControlled
              setContentPage={setContentPage}
              page={page}
              count={Math.ceil(headers/10)}
            />
          </div>
      
    </>
  );
}
