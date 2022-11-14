import { useState } from "react"
import { toast } from "react-toastify";
import api from "../../services/api"
import { getLocalItem } from "../../utils/localStorage"
import editIcon from '../../assets/editIcon.svg'
import Modal from '@mui/material/Modal';
import CloseIcon from '../../assets/closeIcon.svg'
import Radio from "@mui/material/Radio";

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
import Box from '@mui/material/Box';
  import './style.css'
import { useNavigate } from "react-router-dom";
export  default function EditarPerfil(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const id_usuario = getLocalItem("usuario_id")
    const navigate = useNavigate()
    const token = getLocalItem("token")
    const [form, setForm] = useState({
        nome: "",
        email: "",
        trilha: "",
        senha: "",
        senhaAuth:""
      });


    async function HandleAtualizar(e){
        e.preventDefault()
       
        for (let i in form) {
          if (form[i] == "") {
            return toast.error("Preencham todos os campos");
          }
        }
        if(form.senha !== form.senhaAuth){
          return   toast.error("Senhas não coincidem")
        }
        try {
            await api.put(`/usuario`,{
                nome:form.nome,
                email: form.email,
                trilha: form.trilha,
                senha: form.senha
                },{ headers:{
                    'Authorization': `Bearer ${token}`,
                    user: id_usuario
                  } })
            toast.success("atualizado")
            navigate("/")
        } catch (error) {
            console.log(error.response)
            return toast.error(error);
        }
    }
   
    return(
        <>
        <button onClick={handleOpen}>
            Editar Perfil
        </button>
        <Modal
        keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
             <Box sx={style}>
        <div className="modaEdit">
             <h2>Atualizar Cadastro</h2>
             <img
             onClick={handleClose}
            src={CloseIcon}
             alt="Close Icon"
          className="closeIcon"
                            />
             <form onSubmit={HandleAtualizar} className="modal-form-edit">
                <div className="input-edit">
                    <span>Nome*</span>
                    <input type="text" name='nome' value={form.nome}  onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }  placeholder='Seu nome'/>
                </div>
                <div className="input-edit-email">
                <div className="input-edit">
                <span>E-mail*</span>
                <input type="text" name='email' value={form.email}  onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }  placeholder='Seu email'/>
                </div>
                </div>
                <div className="input-edit">
                <span>Trilha*</span>
                </div>
                <div className="input-edit-trilha">
               
                <label>Fullstack</label>
                <Radio className="radioBtn"
              checked={form.trilha === "fullstack"}
              name="trilha"
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
              required
              value="fullstack"
            />
            <label>QA</label>

            <Radio className="radioBtn"
              checked={form.trilha === "qa"}
              name="trilha"
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
              required
              value="qa"
            />
            <label>UX/UI</label>
            <Radio className="radioBtn"
              checked={form.trilha === "uxui"}
              name="trilha"
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
              required
              value="uxui"
            />

                </div>
                <div className="input-edit">
                    <span>Senha*</span>
                    <input type="password" name='senha' value={form.senha}  onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              } placeholder='Sua senha'/>
                </div>
                <div className="input-edit">
                    <span>Repita a senha*</span>
                    <input type="password" name='senhaAuth' value={form.senhaAuth}  onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }  placeholder='Repita a senha'/>
                </div>
            {open && <button onClick={HandleAtualizar}  className="orange-btn">Atualizar</button>}
             </form>
             </div>
             </Box>
        

        </Modal>
        </>
    )
}