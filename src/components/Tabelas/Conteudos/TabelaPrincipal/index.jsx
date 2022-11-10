import { useState, useEffect } from "react";
import Loading from "../../../loading";
import { PaginationControlled } from "../../../pagination";
import api from '../../../../services/api'
import './style.css'
export function TabelaPrincipal(){
const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [page, setContentPage] = useState(1)

  function getAllContent() {
    api
      .get(`/postagem/conteudos/trilha/fullstack?page=${page}`)
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
            <div className='container-customers'>
    
                <div className='container-section-header'>
                    <div className='container-header-customers'>
                        <div className='title-customers font-nunito'>
                            <h1>Fullstack</h1>
                        </div>
    
                        <div className='container-add'>
                            <div onClick={() => openModalRegister()} className='add-customers font-nunito display-justify-align-center'>
                                <span className='' >Adicionar Conteudos</span>
                            </div>
                        </div>
                    </div>
    
                    <div className='container-table-customers font-nunito display-justify-align-center'>
                        <table className="tableCustomers">
                            <thead>
                                <tr >
                                    <th >
                                        Titulo
                                    </th>
                                    <th>Tipo</th>
                                    <th>Criador</th>
                                    <th>Trilha</th>
                                    <th>Duração</th>
                                    <th>Criar Cobrança</th>
                                </tr>
                            </thead>
    
                            {data && data.map((item) => (
                                <tbody key={item.id} onClick={()=>handleChangeLink(item.link)}>
                                    <tr className="itemsConteudos">
                                        <td>{item.titulo}</td>
                                        <td>{item.criador_nome}</td>
                                        <td>{item.trilha}</td>
                                        <td>{item.duracao}</td>
                                        <td>
                                            <div className='status-client-ok display-justify-align-center'>
                                                Em dia
                                            </div>
                                        </td>
                                        <td>
                                            <div  className='addCharge-customers display-justify-align-center'>
                                                Cobrança
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                
                            ))}
                         
                        </table>
                        
                    </div>
                    <div className='pagination'>
                          <PaginationControlled setContentPage={setContentPage} page={page} count={6} />
                          </div>
                </div>
              
            </div>
    )
}