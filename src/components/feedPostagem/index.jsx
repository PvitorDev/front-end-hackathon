import avatar from '../../assets/avatar.png'
import { useState,useEffect } from 'react';
import api from '../../services/api'
import Comentar from '../Comentar';
export default function FeedPostagem(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    function getAllContent() {
      api
        .get(`/postagem/post`)
        .then((response) => {
          setLoading(false);
          setData(response.data);
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
         <img src={avatar} alt="profile-picture" />
         <strong>{item.criador_nome}</strong>
         </div>
        <div className='conteudosPostagem'>
        <h1>{item.titulo}</h1>
        <p>{item.descricao}</p>
                 
        </div>

        <Comentar id_postagem={item.id}/>
        
        </div>
       ))}
       
      </>
    )
}