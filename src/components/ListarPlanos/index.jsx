import { useEffect, useState } from "react";
import api from "../../services/api";
import { getLocalItem } from "../../utils/localStorage";

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
import DetalharPlano from "../PlanoDetalhe";
export default function ListarUsuarios(){
    const token = getLocalItem("token")
    const idUsuario = getLocalItem("usuario_id")
    const [data,setData] = useState([])
  
 

useEffect(()=>{
    api.get("/plano",
    { headers:{
        'Authorization': `Bearer ${token}`,
         idUsuario: idUsuario
      } }).then((response)=>{
        setData(response.data)
      })             .catch((error) => {
        console.log(error);
      });
      
   },[])
  return(
    <>
       <TableContainer>
        <Table  id="tableUsers" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow  >
              <TableCell align="center" colSpan={5}>
                <h3>Lista de Planos</h3>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h4>Nome</h4>
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
                  <TableCell>
                    <DetalharPlano id={row.id}/>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
       
      </TableContainer>
     
      
     
             
    </>
  )
}