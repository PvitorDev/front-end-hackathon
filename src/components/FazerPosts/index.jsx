import "./style.css";
import { getLocalItem } from "../../utils/localStorage";
import { useState } from "react";
import avatar from "../../assets/avatar.png";
import Modal from "@mui/material/Modal";
import CloseIcon from "../../assets/closeIcon.svg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  border: "none",
  borderRadius: "20px",
};
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Radio from "@mui/material/Radio";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
export default function ModalPostagem({ openModal }) {
  const nome = getLocalItem("nome_usuario");
  const id_usuario = getLocalItem("usuario_id")
  const token = getLocalItem("token")
  const [open, setOpen] = useState(openModal);
  const handleClose = () => setOpen(false);
  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    trilha: "",
  });
  const navigate = useNavigate()
  function publicOrNot(e) {
    if (form.titulo === "" || form.descricao === "") {
      return (
        <Button
          className="make-public"
          disabled
          variant="contained"
          endIcon={<SendIcon />}
        >
          Publicar
        </Button>
      );
    } else {
      return (
        <Button
        onClick={handlePostar}
          className="make-public"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Publicar
        </Button>
      );
    }
  }
async function handlePostar(e){
  e.preventDefault()
  for (let i in form) {
    if (form[i] == "") {
      return toast.error("Preencham todos os campos");
    }
  }
  try {
    await api.post("/postagem/post",{
      titulo: form.titulo,
      descricao: form.descricao,
      tipo: form.trilha
    },{ headers:{
      'Authorization': `Bearer ${token}`,
      nome: nome,
      id: id_usuario
    } })
    toast.success("Publicado")
  } catch (error) {
    console.log(error)
    return toast.error(error.data.message);
  }
}

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <div className="container-modal">
          <div>
            <h2>Criar publicação</h2>
            <img
              onClick={handleClose}
              src={CloseIcon}
              alt="Close Icon"
              className="closeIcon"
            />
          </div>

          <div className="user-infos-modal">
            <img
              className="perfil"
              src={avatar}
              alt="profile-picture"
              width="50"
              heigh="50"
            />
            <p>
              <strong>{nome}</strong>
            </p>
          </div>

          <input
            placeholder="Titulo da pergunta"
            type="text"
            name="titulo"
            id="titulo"
            value={form.titulo}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })}
          />
          <textarea
            className="textarea"
            type="text"
            placeholder="Qual sua pergunta?..."
            name="descricao"
            value={form.descricao}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })}
          />

          <div>
            <label>Fullstack</label>
            <Radio
              className="radioBtn"
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

            <Radio
              className="radioBtn"
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
            <Radio
              className="radioBtn"
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
            <label>Livre</label>
            <Radio
              className="radioBtn"
              checked={form.trilha === "livre"}
              name="trilha"
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
              required
              value="livre"
            />
            {open && publicOrNot()}
          </div>
        </div>
      </Box>
    </Modal>
  );
}
