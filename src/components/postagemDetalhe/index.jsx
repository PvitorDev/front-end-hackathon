import "./style.css"
import { useState , useEffect} from "react"

import { getLocalItem } from "../../utils/localStorage";
import { toast } from "react-toastify";
import api from "../../services/api";

  export default function PostagemDetails({id}){
    const [data, setData] = useState([]);
    function getAllContent() {
      api
        .get(`/postagem/post/${id}`)
        .then((response) => {
          setData(response.data.postagem);
          console.log(response.data)
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  
    useEffect(()=>{
      getAllContent()
    },[])
    return(
      <>
     
     
       {data && data.map((item)=>(
         <div className='feed' key={item.id}>
         <div className="perfilIcon">
         <strong>{item.criador_nome}</strong>
         </div>
        <div className='conteudosPostagem'>
        <h1>{item.titulo}</h1>
        <p>{item.descricao}</p>
                 
        </div>

        </div>
       ))}
     
       
      </>
    )
}