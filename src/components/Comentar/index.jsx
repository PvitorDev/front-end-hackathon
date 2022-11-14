import "./style.css"
import { useState,useEffect } from "react"
import Stack from '@mui/material/Stack';
import Modal from "@mui/material/Modal";
import CloseIcon from "../../assets/closeIcon.svg";
import Button from '@mui/material/Button';
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 220,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    border: "none",
    borderRadius: "20px",
  };
import Box from "@mui/material/Box";
import { getLocalItem } from "../../utils/localStorage";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useNavigate } from 'react-router-dom';
import Postagem from "../../pages/Postagem";

  export default function Comentar({id_postagem}){
    const idUsuario = getLocalItem("usuario_id")
    const token = getLocalItem("token")
    const [form, setForm] = useState({
        comentario: ""
      });
 async function handleComentario(e){
    e.preventDefault()
    if(form.comentario ==''){
        return toast.error("Escreva um comentário")
    }
         try {
            await api.post(`/postagem/comentar/${id_postagem}`,{
                comentario : form.comentario
            },{ headers:{
                'Authorization': `Bearer ${token}`,
                 id_usuario: idUsuario
              } })
              toast.success("Comentário feito")
         } catch (error) {
            console.log(error.response)
            return toast.error(error);
         }
 }
      const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true)
    return (
        <>
        <Stack spacing={2} direction="row">
          <Button onClick={handleOpen} variant="text">Comentar</Button>
        </Stack>
           <Modal
           keepMounted
           open={open}
           onClose={handleClose}
           aria-labelledby="keep-mounted-modal-title"
           aria-describedby="keep-mounted-modal-description"
         >
           <Box sx={style}>
          <form onSubmit={handleComentario}>
          <textarea
            className="textarea"
            type="text"
            placeholder="Escreva um comentario"
            name="comentario"
            value={form.comentario}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })}
          />
         {open &&  <Button onClick={handleComentario} variant="text">Comentar</Button>}
          </form>
           </Box>
           </Modal>
           </>
      );
}