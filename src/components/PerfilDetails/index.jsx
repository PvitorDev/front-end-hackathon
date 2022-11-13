import { useState, useEffect } from "react";
import api from '../../services/api'
import './style.css'
import {getLocalItem} from '../../utils/localStorage.js'
import Loading from "../loading";
import EditarPerfil from "../editarPerfil";
import { Dashboard } from "../Dashboard";
export  function CustomerDetails() {
    const id_usuario = getLocalItem("usuario_id")
    const admin = JSON.parse(getLocalItem("admin_usuario"))
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    function getPerfil() {
        api.get(`/usuario/perfil/${id_usuario}`)
        .then((response) => {
            setLoading(false);
            setData(response.data);
          })
          .catch((error) => {
            setLoading(false);
            console.log(error);
          });
    }
    useEffect(() => {
        getPerfil();
      }, []);
    
    if (loading) {
        return <Loading />;
      }
    return (
        <>
            <div className='customerName'>
                <h1>{data && data.nome}</h1>
            </div>
            <div className='customerData'>
                <div className='customerDataHeader'>
                  {admin &&   <Dashboard/>}
                    <h3></h3>
                    <EditarPerfil/>
                </div>
                <div className='customerDataTable'>
                    <div className='upperCells'>
                        <div className='dataCell'>
                            <h4>E-mail</h4>
                            <p>{data && data.email}</p>
                        </div>
                        <div className='dataCell'>
                            <h4>Trilha</h4>
                            <p>{data && data.trilha}</p>
                        </div>
                        <div className='dataCell'>
                            <h4>Conta criada em: </h4>
                            <p>{data && new Date(data.criado_em).toLocaleDateString()}</p>
                        </div>
                        <div className='dataCell'>
                            <h4>Ultima atualização:</h4>
                            <p>{data && new Date( data.atualizado_em).toLocaleDateString()}</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}