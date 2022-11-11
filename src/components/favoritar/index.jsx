import { useState } from "react"
import { toast } from "react-toastify";
import api from "../../services/api";
import { getLocalItem, removeLocalItem, setLocalItem } from "../../utils/localStorage";
import "./style.css"

export default function Favoritar({id_conteudos}){
    const [favorito, setFavorito] = useState(false);
    const token = getLocalItem('token')
    const id = getLocalItem('usuario_id')
 
    async function favoritar() {
      if(!token || !id){
       return toast.error("Você não está logado")
      }
        try {
            await api.post(`/postagem/favoritar/${id_conteudos}`,{
              id_usuarios:id
            },{ headers:{
              'Authorization': `Bearer ${token}`
            } })
            if (!favorito) {
              setFavorito(true);
              toast.success("Favoritado");
            } else {
              setFavorito(false);
              toast.success("Removido dos favoritos");
            }
        } catch (error) {
          return toast.error(error.response.data.mensagem);
        }
      }
    return(
        <div onClick={favoritar} className={`${favorito ? 'like liked' : 'like'}`}  id="like"></div>
    )
}