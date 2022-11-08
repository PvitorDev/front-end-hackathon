import { useState } from "react";
import "./style.css";
import api from "../../services/api";
import Radio from "@mui/material/Radio";
import { toast } from "react-toastify";
import { setLocalItem } from '../../utils/localStorage'

export function Login() {
  const [handleForm, setHandleForm] = useState(0);
  const [open, setOpen] = useState(false);
  const [formCad, setFormCad] = useState({
    nome: "",
    email: "",
    senha: "",
    senhaAuth: "",
    trilha: "",
  });
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });
  async function handleLogin(e) {
    e.preventDefault();
    for (let i in form) {
      if (form[i] == "") {
        return toast.error("Preencham todos os campos");
      }
    }
    try {
      const  {data}  = await api.post("/login", {
        email: form.email,
        senha: form.senha,
      });
     setLocalItem("token", data.token);
     setLocalItem("usuario_id", data.userData.id);
     setLocalItem("nome_usuario", data.userData.nome);
     setLocalItem("email_usuario", data.userData.email);
     setLocalItem("trilha_usuario", data.userData.trilha);
     toast.success("Login realizado");
    } catch (error) {
      return toast.error(error.response.data.mensagem);
    }
  }

  function changeSingIn() {
    setHandleForm((e) => e + 1);
  }
  function changeLogin() {
    setHandleForm((e) => e - 1);
  }
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  async function handleRegister(e) {
    e.preventDefault();
    if (formCad.senha !== formCad.senhaAuth) {
      return toast.error("as senhas não coincidem!");
    }
    for (let i in formCad) {
      if (formCad[i] == "") {
        return toast.error("Preencham todos os campos");
      }
    }
    try {
      await api.post("/cadastro", {
        nome: formCad.nome,
        email: formCad.email,
        senha: formCad.senha,
        trilha: formCad.trilha,
      });
      toast.success("Cadastro realizado com sucesso");
      changeLogin();
    } catch (error) {
      console.log(error);
      return toast.error(error.response.data.mensagem);
    }
  }

  return (
    <div className="login-page">
      <div className="form">
        {handleForm === 1 && (
          <form onSubmit={handleRegister} className="register-form">
            <input
              type="text"
              name="email"
              value={formCad.email}
              placeholder="Email"
              required
              onChange={(e) =>
                setFormCad({
                  ...formCad,
                  [e.target.name]: e.target.value.trim(),
                })
              }
            />
            <input
              type="text"
              name="nome"
              value={formCad.nome}
              placeholder="Nome"
              required
              onChange={(e) =>
                setFormCad({
                  ...formCad,
                  [e.target.name]: e.target.value.trim(),
                })
              }
            />
            <input
              name="senha"
              type="password"
              value={formCad.senha}
              placeholder="Senha"
              required
              onChange={(e) =>
                setFormCad({
                  ...formCad,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              type="password"
              name="senhaAuth"
              value={formCad.senhaAuth}
              placeholder="Repita a senha"
              required
              onChange={(e) =>
                setFormCad({
                  ...formCad,
                  [e.target.name]: e.target.value,
                })
              }
            />

            <label>Fullstack</label>
            <Radio
              checked={formCad.trilha === "fullstack"}
              name="trilha"
              onChange={(e) =>
                setFormCad({
                  ...formCad,
                  [e.target.name]: e.target.value,
                })
              }
              required
              value="fullstack"
            />
            <label>QA</label>

            <Radio
              checked={formCad.trilha === "QA"}
              name="trilha"
              onChange={(e) =>
                setFormCad({
                  ...formCad,
                  [e.target.name]: e.target.value,
                })
              }
              required
              value="QA"
            />
            <label>UX/UI</label>
            <Radio
              checked={formCad.trilha === "UX/UI"}
              name="trilha"
              onChange={(e) =>
                setFormCad({
                  ...formCad,
                  [e.target.name]: e.target.value,
                })
              }
              required
              value="UX/UI"
            />

            <button onClick={handleRegister}>cadastrar</button>
            <p className="message">
              Ja possui uma conta ? <a onClick={changeLogin}>Entre</a>
            </p>
          </form>
        )}
        {handleForm === 0 && (
          <form className="login-form">
            <input
              type="text"
              placeholder="Digite seu e-mail"
              name="email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              name="senha"
              value={form.senha}
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <button onClick={handleLogin} >login</button>
            <p className="message">
              Não tem cadastro? <a onClick={changeSingIn}>Crie uma conta</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
