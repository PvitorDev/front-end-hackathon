import { useState, useEffect } from "react";
import Loading from "../../../loading";
import { PaginationControlled } from "../../../pagination";
import api from "../../../../services/api";
import "./style.css";
import ResponsiveAppBar from "../../../header";
import { Login } from "../../../modalLogin";
import Favoritar from "../../../favoritar";
import Deletar from "../../../deletar";
import Editar from "../../../editar";
import { getLocalItem } from "../../../../utils/localStorage";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AdicionarConteudo from "../../../adicionarConteudos";
export function ConteudosQA() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setContentPage] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const admin = getLocalItem("admin_usuario");
  const adm = JSON.parse(admin);
  const [headers,setHeaders]= useState(0)
  const [filter, setFilter] = useState("");
  const handleChange = async (event) => {
    setFilter(event.target.value);
  };
  function getAllContent(mudança) {
    let baseUrl;
    if (mudança == "id") {
      baseUrl = `/postagem/conteudos/trilha/qa?page=${page}&filter=id`;
    } else if (mudança == "titulo") {
      baseUrl = `/postagem/conteudos/trilha/qa?page=${page}&filter=titulo`;
    } else {
      baseUrl = `/postagem/conteudos/trilha/qa?page=${page}`;
    }
    api
      .get(baseUrl)
      .then((response) => {
        setLoading(false);
        setData(response.data);
        setHeaders(response.headers["x-total-count"])
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }
  function handleChangeLink(item) {
    window.location.href = `${item}`;
  }

  useEffect(() => {
    getAllContent();
  }, [page]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ResponsiveAppBar setIsActive={setIsActive} />
      <div className="container-QA">
        <div className="container-section-header">
          <div className="container-header-QA">
            <div className="title-QA font-nunito">
              <h1>QA Quality Assurance </h1>
            </div>

            <div className="container-add">
            {adm && <AdicionarConteudo/>}
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={filter}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" onClick={() => getAllContent()}>
                    <em>Normal</em>
                  </MenuItem>
                  <MenuItem value="id" onClick={() => getAllContent("id")}>
                    Mais recente
                  </MenuItem>
                  <MenuItem
                    value="titulo"
                    onClick={() => getAllContent("titulo")}
                  >
                    Titulo
                  </MenuItem>
                </Select>
                <FormHelperText>Filtrar</FormHelperText>
              </FormControl>
            </div>
          </div>

          <div className="container-table-QA font-nunito display-justify-align-center">
            <table className="tableQA">
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Postador por:</th>
                  <th>Tipo</th>
                  <th>Duração</th>
                  <th>Favoritar</th>
                  {adm && <th>Excluir</th>}
                  {adm && <th>Editar</th>}
                </tr>
              </thead>

              {data &&
                data.map((item) => (
                  <tbody key={item.id}>
                    <tr className="itemsConteudos">
                      <td onClick={() => handleChangeLink(item.link)}>
                        {item.titulo}
                      </td>
                      <td onClick={() => handleChangeLink(item.link)}>
                        {item.criador_nome}
                      </td>
                      <td onClick={() => handleChangeLink(item.link)}>
                        {item.tipo}
                      </td>
                      <td onClick={() => handleChangeLink(item.link)}>
                        {item.duracao}
                      </td>
                      <td>
                        <Favoritar id_conteudos={item.id} />
                      </td>

                      {adm && (
                        <td>
                          <Deletar id_conteudo={item.id} />
                        </td>
                      )}
                      {adm && (
                        <td>
                          <Editar id_conteudo={item.id} />
                        </td>
                      )}
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
          <div className="pagination">
            <PaginationControlled
              setContentPage={setContentPage}
              page={page}
              count={Math.ceil(headers/10)}
            />
          </div>
        </div>

        {isActive && <Login setIsActive={setIsActive} />}
      </div>
    </>
  );
}
