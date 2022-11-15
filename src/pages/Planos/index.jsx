import CriarPlano from "../../components/criarPlanos";
import ResponsiveAppBar from "../../components/header";
import { useState } from "react";
import "./style.css"
import ListarPlanos from '../../components/ListarPlanos'
export default function Planos(){
    const [isActive, setIsActive] = useState(false);

    return(
        <>  
        <div className="mainProfile">
        <ResponsiveAppBar setIsActive={setIsActive}/>
        </div>
        <CriarPlano/>
        <div>
            <ListarPlanos/>
        </div>
        </>

    )
}