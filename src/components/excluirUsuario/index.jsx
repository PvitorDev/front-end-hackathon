import { useState } from "react"
import { toast } from "react-toastify";
import api from "../../services/api"
import { getLocalItem } from "../../utils/localStorage"
import './style.css'
import deleteIcon from '../../assets/deleteIcon.svg'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  border:'none',
    borderRadius:'20px',
};

export  default function DeletarUsuario({id}){
    const token = getLocalItem('token')
    const admin = JSON.parse(getLocalItem("admin_usuario"))
    const id_usuario = getLocalItem("usuario_id")
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 const navigate = useNavigate()
    async function HandleDeletar(){
        if(!token || !admin){
            return toast.error("Você não está logado")
        }
        try {
            await api.delete(`/usuario/perfil/${id}`,{ headers:{
                'Authorization': `Bearer ${token}` 
              } })
          toast.success("Deletado")
          setOpen(false)
          navigate("/perfil")
        } catch (error) {
          console.log(error.response)
            return toast.error(error.response.data.mensagem);
        }
    }
 
    return(
        <div>
        <div className="deleteIcon" onClick={handleOpen} ><img src={deleteIcon} alt="delete" /></div>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          
          <Box sx={style}>
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
              Deseja excluir ?
             
            </Typography>
            {open &&  <Button onClick={handleClose}  id="buttonErro" variant="outlined">Cancelar</Button>}
            {open &&  <Button
             id="buttonErro"
             onClick={HandleDeletar}
              variant="outlined" color="error">
                Deletar
              </Button>}
          </Box>
        </Modal>
      </div>

    )
}