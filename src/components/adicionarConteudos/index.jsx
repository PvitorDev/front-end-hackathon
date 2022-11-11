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
export  default function AdicionarConteudo(){
    const token = getLocalItem('token')
    const admin = getLocalItem("admin_usuario")
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [form, setForm] = useState({
        titulo: "",
        tipo: "",
        trilha: "",
        duracao: "",
        link: "",
      });


    async function HandleAdicionar(e){
        e.preventDefault()
        for (let i in form) {
            if (form[i] == "") {
              return toast.error("Preencham todos os campos");
            }
          }
        try {
            await api.post(`/postagem/conteudo`,{
                titulo:form.titulo,
                tipo: form.tipo,
                trilha: form.trilha,
                duracao: form.duracao,
                link: form.link
                },{ headers:{
                    'Authorization': `Bearer ${token}`
                  } })
            toast.success("Conteúdo adicionado")
            setTimeout((()=>window.location.reload()),2000)
        } catch (error) {
            console.log(error.response)
            return toast.error(error.response.mensagem);
        }
    }
   
 
    return(
        <>
             <div
                onClick={handleOpen}
                className="add-customers font-nunito display-justify-align-center"
              >
                <span className="">Adicionar Conteudos</span>
              </div>
        <Modal
        keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
             <Box sx={style}>
        <div className="modaEdit">
             <h2>Adicionar Conteudo</h2>
             <img
             onClick={handleClose}
            src={CloseIcon}
             alt="Close Icon"
          className="closeIcon"
                            />
             <form onSubmit={HandleAdicionar} className="modal-form-edit">
                <div className="input-edit">
                    <span>Titulo*</span>
                    <input type="text" name='titulo' value={form.titulo}  onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }  placeholder='Titulo do conteudo'/>
                </div>
                <div className="input-edit-tipo">
                <div className="input-edit">
                <span>Tipo*</span>
                </div>                   
                    <label>Artigo</label>
                <Radio className="radioBtn"
              checked={form.tipo === "Artigo"}
              name="tipo"
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
              required
              value="Artigo"
            />
            <label>Video</label>

            <Radio className="radioBtn"
              checked={form.tipo === "Vídeo"}
              name="tipo"
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
              required
              value="Vídeo"
            />
            <label>Lives</label>
            <Radio className="radioBtn"
              checked={form.tipo === "Lives"}
              name="tipo"
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
              required
              value="Lives"
            />
            <label>Curso</label>
            <Radio className="radioBtn"
              checked={form.tipo === "Curso"}
              name="tipo"
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
              required
              value="Curso"
            />
           <div className="input-edit-outros">
           <label>Outros</label>
            <Radio className="radioBtn"
              checked={form.tipo === "Outros"}
              name="tipo"
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
              required
              value="Outros"
            />
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
                    <span>Duração*</span>
                    <input type="text" name='duracao' value={form.duracao}  onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              } placeholder='Titulo do conteudo'/>
                </div>
                <div className="input-edit">
                    <span>Link*</span>
                    <input type="text" name='link' value={form.link}  onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }  placeholder='Titulo do conteudo'/>
                </div>
            {open && <button onClick={HandleAdicionar}  className="orange-btn">Atualizar</button>}
             </form>
             </div>
             </Box>
        

        </Modal>
        </>
    )
}