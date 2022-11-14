import { useEffect, useState } from "react";
import api from "../../services/api";
import { getLocalItem } from "../../utils/localStorage";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {PaginationControlled} from '../pagination'
import Loading from "../loading";
export function ListarUsuarios(){
    const token = getLocalItem("token")
    const admin = JSON.parse(getLocalItem("admin_usuario"))
    const [data,setData] = useState([])
    const [filter, setFilter] = useState("");
    const [page, setContentPage] = useState(1);
    const [usuarios, setUsuarios] = useState(0);
  const handleChange = async (event) => {
    setFilter(event.target.value);
  };
    function getAllContent(mudança) {
        let baseUrl;
        if (mudança == "fullstack") {
          baseUrl = `/usuario/fullstack?page=${page}`;
        } else if (mudança == "qa") {
          baseUrl = `/usuario/qa?page=${page}`;
        } else if (mudança == "uxui") {
          baseUrl = `/usuario/uxui?page=${page}`;
        }else{
            baseUrl = `/usuario?page=${page}`;
        }
        api.get(baseUrl,{
            headers:{
            'Authorization': `Bearer ${token}`,
          } })
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
   
}


useEffect(()=>{
    getAllContent("todos")
      
   },[page])
  return(
    <>
         <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={filter}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="todos" onClick={() => getAllContent("todos")}>
                    <em>Todos</em>
                  </MenuItem>
                  <MenuItem value="fullstack" onClick={() => getAllContent("fullstack")}>
                    Fullstack
                  </MenuItem>
                  <MenuItem
                    value="qa"
                    onClick={() => getAllContent("qa")}
                  >
                    QA
                  </MenuItem>
                  <MenuItem
                    value="uxui"
                    onClick={() => getAllContent("uxui")}
                  >
                    UX/UI
                  </MenuItem>
                </Select>
                <FormHelperText>Filtrar</FormHelperText>
              </FormControl>
           
              <div className="pagination">
            <PaginationControlled
              setContentPage={setContentPage}
              page={page}
              count={Math.ceil(usuarios/10)}
            />
          </div>
    </>
  )
}