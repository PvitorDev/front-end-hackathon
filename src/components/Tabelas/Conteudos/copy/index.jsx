import { useState, useEffect } from "react";
import { PaginationControlled } from "../../../pagination";

import './style.css'
export function TabelaPrincipal(){
    const tableData = [
        {
            nome: 'Sara Silva',
           cpf:21123123131, 
            id: 565436136,
            telefone:2121312,
            email: 'R$ '
        },
        {
            nome: 'Carlos Prado',
           cpf:21123123131, 
            id: 565462136,
            telefone:2121312,
            email: 'R$ '
        },
        {
            nome: 'Lara Brito',
           cpf:21123123131, 
            id: 5654546136,
            telefone:2121312,
            email: 'R$ '
        },
        {
            nome: 'Soraia Neves',
           cpf:21123123131, 
            id: 565456136,
            telefone:2121312,
            email: 'R$ '
        },
    ]
    const [page, setContentPage] = useState(1)
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
    
                            {tableData.map((item) => (
                                <tbody key={item.id}>
                                    <tr className="itemsConteudos" onClick={() => setClientData(item)}>
                                        <td>{item.nome}</td>
                                        <td>{item.cpf}</td>
                                        <td>{item.email}</td>
                                        <td>{item.telefone}</td>
                                        <td>
                                            <div className='status-client-ok display-justify-align-center'>
                                                Em dia
                                            </div>
                                        </td>
                                        <td>
                                            <div onClick={() => handleChangeAddCharge(item)} className='addCharge-customers display-justify-align-center'>
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