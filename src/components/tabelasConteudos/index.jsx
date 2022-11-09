import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
} from "@mui/material";
import {Content} from '../pagination'
import "./style.css";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Favoritar from "../favoritar";
import api from "../../services/api";
import Loading from "../loading"
export function TabelaConteudos() {
  const [loading, setLoading] = useState(true);
  const [headers, setHeaders] = useState(0);
  const [data,setData] = useState([])
  
  

  useEffect(() => {
    api
      .get(`/postagem/conteudos/trilha/uxui?page=6`)
      .then((response) => {
        setLoading(false);
        setData(response.data)
        setHeaders(response.headers["x-total-counts"]);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []); 

  if (loading) {
    return <Loading/>;
  }
  return (
    <TableContainer
      className="container-table-defaulters"
      component={Paper}
      sx={{
        borderRadius: "20px",
        maxWidth: "700px",
      }}
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={10}>
              <div className="clients-icon">
                <h2>Fullstack</h2>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <h4>Titulo</h4>
            </TableCell>
            <TableCell>
              <h4>Criado por</h4>
            </TableCell>
            <TableCell>
              <h4>Tipo</h4>
            </TableCell>
            <TableCell colSpan={10}>
              <h4>Duração</h4>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            maxWidth: "306px",
          }}
        >
          {data &&
            data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.titulo}</TableCell>
                <TableCell>{row.criador_nome}</TableCell>
                <TableCell>{row.tipo}</TableCell>
                <TableCell>{row.duracao}</TableCell>
                <TableCell>
                  <Favoritar id_conteudos={row.id} />
                </TableCell>
                <TableCell>
                  <CreateOutlinedIcon />
                </TableCell>
                <TableCell>
                  <DeleteTwoToneIcon />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <p>
       
      </p>
     
    </TableContainer>
  );
}
