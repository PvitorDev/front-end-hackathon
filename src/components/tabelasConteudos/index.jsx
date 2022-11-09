import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { PaginationControlled } from '../../components/pagination/index';
import api from "../../services/api";
import Favoritar from '../favoritar';
import Loading from "../loading";
import "./style.css";

export function TabelaConteudos() {
  const [loading, setLoading] = useState(true);
  const [headers, setHeaders] = useState(0);
  const [data, setData] = useState([])
  const navigate = useNavigate();
  const [page, setContentPage] = useState(1)

  function getAllContent() {
    api
      .get(`/postagem/conteudos/trilha/fullstack?page=${page}`)
      .then((response) => {
        setLoading(false);
        setData(response.data)
        setHeaders(response.headers["x-total-counts"]);
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

  console.log(data)

  if (loading) {
    return <Loading />;
  }
  return (

    <div className="container-table">
      <h2>Titulo</h2>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Criado Por</th>
            <th>Tipo</th>
            <th>Duração</th>
            <th>Trilha</th>
          </tr>
        </thead>
        {data.map((item) => (
          <tbody key={item.id}>
            <tr onClick={() => handleChangeLink(item.link)}>
              <td>{item.titulo}</td>
              <td>{item.criador_nome}</td>
              <td>{item.tipo}</td>
              <td>{item.duracao}</td>
              <td>{item.trilha}</td>
            </tr>
            <div className="icons">
              <Favoritar id_conteudos={item.id} />
              <CreateOutlinedIcon />
              <DeleteTwoToneIcon />
            </div>
          </tbody>
        ))}
      </table>
      <div className='pagination'>
        <PaginationControlled setContentPage={setContentPage} page={page} />
      </div>
    </div>

  );
}