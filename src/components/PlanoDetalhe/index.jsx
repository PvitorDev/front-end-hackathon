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
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '../../assets/closeIcon.svg'
import irPara from '../../assets/ver.png'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border:'none',
    borderRadius:'20px',
  };
export default function DetalharPlano({id}){
    const token = getLocalItem("token")
    const idUsuario = getLocalItem("usuario_id")
    const [data,setData] = useState([])
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 

useEffect(()=>{
    api.get(`plano/${id}`,
    { headers:{
        'Authorization': `Bearer ${token}`,
         idUsuario: idUsuario
      } }).then((response)=>{
        setData(response.data.itens)
        console.log(response.data.itens)

      })             .catch((error) => {
        console.log(error);
      });
      
   },[])
  return(
    <>
    <img src={irPara} alt="" onClick={handleOpen}/>
    <Modal
      keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      > 
       <Box sx={style}>
          <img src={CloseIcon} alt="Close Icon"
        className="closeIcon" onClick={handleClose} />
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
                </TableRow>
              ))}
          </TableBody>
        </Table>
        </TableContainer>
       </Box>
      </Modal>
    
             
    </>
  )
}