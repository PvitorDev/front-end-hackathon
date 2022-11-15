import {useState} from 'react'
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border:'none',
    borderRadius:'20px',
  };
import Box from '@mui/material/Box';
import CloseIcon from '../../assets/closeIcon.svg'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './style.css'
import api from '../../services/api'
import { getLocalItem } from '../../utils/localStorage';
import { toast } from "react-toastify";

export default function CriarPlano(){
  const [form, setForm] = useState({
    nome: ""
  });
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const idUsuario = getLocalItem("usuario_id")
    const token = getLocalItem("token")




    async function handlePlano(e){
      e.preventDefault()
      if(!form.nome){
        return toast.error("Todos os campos")
      }
        try {
          api.post("/plano",{
            nome : form.nome
        },{ headers:{
            'Authorization': `Bearer ${token}`,
             idUsuario: idUsuario
          } })
          toast.success("Plano criado")
        } catch (error) {
          console.log(error.response)
          return toast.error(error);
        }
    }
    return(
        <>
     <Button id="buttonPlano" onClick={handleOpen} variant="outlined">Criar Plano</Button>

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
             <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
              Deseja criar seu plano ?
            </Typography>
              <form onSubmit={handlePlano}>
                <input type="text" name="nome" className='input-edit'  placeholder='Nome do seu plano'  value={form.nome}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })}/>
              </form>
            {open &&  <Button
             id="buttonErro"
             onClick={handlePlano}
              variant="outlined" >
                Criar                                                                                                                                                                                                                                                                                                                                                                  
              </Button>}
              {open &&  <Button onClick={handleClose}  id="buttonErro" variant="outlined" color="error">Cancelar</Button>}

       </Box>
      </Modal>
      </>
    )
}