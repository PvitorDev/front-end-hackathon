import { useState, useEffect } from "react";
import Loading from "../../../loading";
import { PaginationControlled } from "../../../pagination";
import api from '../../../../services/api'
import './style.css'
import ResponsiveAppBar from '../../../header'
import { Login } from "../../../modalLogin";
import Favoritar from "../../../favoritar";
import Deletar from "../../../deletar";
import Editar from "../../../editar";
import { getLocalItem } from "../../../../utils/localStorage";
export function ConteudosUX(){
const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [page, setContentPage] = useState(1)
  const [isActive, setIsActive] = useState(false)
  const admin = getLocalItem("admin_usuario")
  const adm = JSON.parse(admin)

  function getAllContent() {
    api
      .get(`/postagem/conteudos/trilha/uxui?page=${page}`)
      .then((response) => {
        setLoading(false);
        setData(response.data)
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }
  function handleChangeLink(item) {
    window.location.href = `${item}`;
  }

  useEffect(() => {
    getAllContent();
  }, [page]);


  if (loading) {
    return <Loading />;
  }
    return(
        <>
        <ResponsiveAppBar setIsActive={setIsActive}/>
            <div className='container-UX'>
    
                <div className='container-section-header'>
                    <div className='container-header-UX'>
                        <div className='title-UX font-nunito'>
                            <h1>UX/UI Design</h1>
                        </div>
    
                        <div className='container-add'>
                            <div onClick={() => openModalRegister()} className='add-UX font-nunito display-justify-align-center'>
                                <span className='' >Adicionar Conteudos</span>
                            </div>
                        </div>
                    </div>
    
                    <div className='container-table-UX font-nunito display-justify-align-center'>
                        <table className="tableUX">
                            <thead>
                                <tr >
                                    <th >
                                        Titulo
                                    </th>
                                    <th>Postador por:</th>
                                    <th>Tipo</th>
                                    <th>Duração</th>
                                    <th>Favoritar</th>
                                    {adm && <th>Opções</th> }
                                </tr>
                            </thead>
    
                            {data && data.map((item) => (
                                <tbody key={item.id} >
                                    <tr className="itemsConteudos">
                                        <td onClick={()=>handleChangeLink(item.link)}>{item.titulo}</td>
                                        <td onClick={()=>handleChangeLink(item.link)}>{item.criador_nome}</td>
                                        <td onClick={()=>handleChangeLink(item.link)}>{item.trilha}</td>
                                        <td onClick={()=>handleChangeLink(item.link)}>{item.duracao}</td>
                                        <td>
                                       <Favoritar id_conteudos={item.id} />
                                        </td>
                                       
                                        {adm && 
                                        <td><Deletar id_conteudo={item.id} /></td> }
                                        {adm && <td>
                                        <Editar/>
                                        </td>  }
                                        
                                    </tr>
                                </tbody>
                                
                            ))}
                         
                        </table>
                        
                    </div>
                    <div className='pagination'>
                          <PaginationControlled setContentPage={setContentPage} page={page} count={6} />
                          </div>
                </div>
              
            {isActive && <Login setIsActive={setIsActive} />}
            </div>
            </>
    )
}