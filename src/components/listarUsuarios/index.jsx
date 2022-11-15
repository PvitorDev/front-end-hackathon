import { useEffect, useState } from "react";
import api from "../../services/api";
import { getLocalItem } from "../../utils/localStorage";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {PaginationControlled} from '../pagination'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
} from "@mui/material";
import "./style.css"
import DeletarUsuario from "../excluirUsuario";
export function ListarUsuarios(){
    const token = getLocalItem("token")
    const admin = JSON.parse(getLocalItem("admin_usuario"))
    const [data,setData] = useState([])
    const [filter, setFilter] = useState("");
    const [page, setContentPage] = useState(1);
    const [usuarios, setUsuarios] = useState(0);
  const handleChange = async (event) => {
    setFilter(event.target.value);
  };
    function getAllContent(mudança) {
        let baseUrl;
        if (mudança == "fullstack") {
          baseUrl = `/usuario/fullstack?page=${page}`;
        } else if (mudança == "qa") {
          baseUrl = `/usuario/qa?page=${page}`;
        } else if (mudança == "uxui") {
          baseUrl = `/usuario/uxui?page=${page}`;
        }else{
            baseUrl = `/usuario?page=${page}`;
        }
        api.get(baseUrl,{
            headers:{
            'Authorization': `Bearer ${token}`,
          } })
          .then((response) => {
            setData(response.data.usuarios);
            setUsuarios(response.data.count.count)
          })
          .catch((error) => {
            console.log(error);
          });
   
}


useEffect(()=>{
    getAllContent()
      
   },[page])
  return(
    <>
         <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={filter}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="todos" onClick={() => getAllContent("todos")}>
                    <em>Todos</em>
                  </MenuItem>
                  <MenuItem value="fullstack" onClick={() => getAllContent("fullstack")}>
                    Fullstack
                  </MenuItem>
                  <MenuItem
                    value="qa"
                    onClick={() => getAllContent("qa")}
                  >
                    QA
                  </MenuItem>
                  <MenuItem
                    value="uxui"
                    onClick={() => getAllContent("uxui")}
                  >
                    UX/UI
                  </MenuItem>
                </Select>
                <FormHelperText>Filtrar</FormHelperText>
              </FormControl>
              <TableContainer
        className="container-table-fav"
        component={Paper}
        sx={{
          borderRadius: "20px",
          maxWidth: "700px",
        }}
      >
        <Table  id="tableUsers" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow  >
              <TableCell align="center" colSpan={5}>
                <h3>Lista de usuarios</h3>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h4>Nome</h4>
              </TableCell>
              <TableCell>
                <h4>Email</h4>
              </TableCell>
              <TableCell>
                <h4>Trilha</h4>
              </TableCell>
              <TableCell>
                <h4>Função</h4>
              </TableCell>
              <TableCell>
                <h4>Deletar</h4>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              maxWidth: "360px",
            }}
          >
            {data &&
              data.map((row) => (
                <TableRow id="tableMain" key={row.id}>
                  <TableCell
                    sx={{
                      maxWidth: "100px",
                    }}
                  >
                    {row.nome}
                  </TableCell>
                  <TableCell id="tableEmail">{row.email}</TableCell>
                  <TableCell>{row.trilha}</TableCell>
                  <TableCell>{row.funcao}</TableCell>
                  <TableCell><DeletarUsuario id={row.id}/></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
       
      </TableContainer>
     
      
      <div className="pagination">
            <PaginationControlled
              setContentPage={setContentPage}
              page={page}
              count={Math.ceil(usuarios/5)}
            />
      </div>
             
    </>
  )
}