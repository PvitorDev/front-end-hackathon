import { Table, TableHead, TableBody, TableRow, TableCell, Paper, TableContainer } from '@mui/material'
import { fontWeight } from '@mui/system'
import { useState, useEffect } from "react";

import Loading from '../../loading';
import './style.css'
import api from '../../../services/api';
export default function TabelaQA() {
    const [loading, setLoading] = useState(true);
    const [headers, setHeaders] = useState(0);
    const [data, setData] = useState([]);
    function getAllContent() {
        api
          .get(`/postagem/conteudos/trilha/qa?page=1`)
          .then((response) => {
            setLoading(false);
            setData(response.data);
            setHeaders(response.headers["x-total-count"]);
          })
          .catch((error) => {
            setLoading(false);
            console.log(error);
          });
      }
    
      useEffect(()=>{
        getAllContent()
      },[])
      if (loading) {
        return <Loading/>;
      }
      function handleLink(item){
        window.location.href = `${item}`;
      }
    return (
        <TableContainer className='container-table-qa' component={Paper}
            sx={{
                borderRadius: '20px',
                maxWidth: '360px'
            }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={2}>
                            <h2>QA</h2>
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                        {headers && headers.length > 0 ? <h3 className="ConteudosTotals">{headers}</h3> :<h3 className="ConteudosTotals">''</h3> }
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><h4>Titulo</h4></TableCell>
                        <TableCell><h4>Criador</h4></TableCell>
                        <TableCell><h4>Tipo</h4></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody
                    sx={{
                        maxWidth: '360px'
                    }}>
                    {
                      data && data.map(row => (
                            <TableRow key={row.id} onClick={() =>handleLink(row.link)}>
                                <TableCell sx={{
                                    maxWidth: '100px',
                                    padding: '5px'
                                }}>{row.titulo}</TableCell>
                                <TableCell>{row.criador_nome}</TableCell>
                                <TableCell>{row.tipo}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <p> <a href="/trilha/qa">Ver todos</a></p>
        </TableContainer>
    )
}

