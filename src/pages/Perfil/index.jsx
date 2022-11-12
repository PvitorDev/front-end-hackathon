import ResponsiveAppBar from '../../components/header'
import { CustomerCharges } from '../../components/PerfilCostumer'
import { CustomerDetails } from '../../components/PerfilDetails'
import './style.css'
import { useState} from "react";
import { Login } from '../../components/modalLogin';
export function Details() {
    const [isActive, setIsActive] = useState(false);
    return (
        <> 
        <ResponsiveAppBar setIsActive={setIsActive}/>
        <div className='containerDetails'>
            <div className='container-section-header'>
                <CustomerDetails />
                <CustomerCharges />
            </div>
        {isActive && <Login setIsActive={setIsActive} />}
        </div>

        </>
    )
}
