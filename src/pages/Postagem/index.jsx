import "./style.css"
import { useState , useEffect} from "react"

import { getLocalItem } from "../../utils/localStorage";
import { toast } from "react-toastify";
import api from "../../services/api";
import ResponsiveAppBar from "../../components/header";
import { Login } from "../../components/modalLogin";
import PostagemDetails from "../../components/postagemDetalhe";
  export default function Postagem({id}){
    const [isActive, setIsActive] = useState(false);
    return(
        <>
        <main className="mainPostagens">
        <ResponsiveAppBar setIsActive={setIsActive} />
        </main>
        <div>
            <PostagemDetails id={id}/>
        </div>
        {isActive && <Login setIsActive={setIsActive} />}
        </>
    )
}