import { useState } from "react"
import { toast } from "react-toastify";
import api from "../../services/api"
import { getLocalItem } from "../../utils/localStorage"
import editIcon from '../../assets/editIcon.svg'
export  default function Editar(){
    const [deletado, setDeletado] = useState(false);
    const token = getLocalItem('token')
    const admin = getLocalItem("admin_usuario")
  

    async function deletar({id_conteudos}){
        if(!token || !admin){
            return toast.error("Você não está logado")
        }
        try {
            await api.put(`/postagem?id_conteudo=${id_conteudos}`,{ headers:{
                'Authorization': `Bearer ${token}`
              } })
        } catch (error) {
            return toast.error(error.response.data.mensagem);
        }
    }
 
    return(
<div ><img src={editIcon} alt="" /></div>
    )
}