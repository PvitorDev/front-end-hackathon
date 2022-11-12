import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../src/components/modalLogin';
import { getLocalItem } from '../src/utils/localStorage';
import {Home} from '../src/pages/Home'
import { ConteudosQA } from '../src/components/Tabelas/Conteudos/QA';
import {ConteudosFullstack} from '../src/components/Tabelas/Conteudos/Fullstack';
import { ConteudosUX } from '../src/components/Tabelas/Conteudos/UX';
import {CustomerDetails} from '../src/components/PerfilDetails'
import {CustomerCharges} from '../src/components/PerfilCostumer'
import { Details } from '../src/pages/Perfil';
function ProtectedRoutes({ children }) {
    const isAuthenticated = getLocalItem('token');

    return isAuthenticated ? children : <Navigate to='/' />
}

export function MainRoutes() {

    return (
        <Routes>
            <Route path='/' element={
                <Home/>}
            />
           
        <Route path='/trilha/fullstack' element={<ConteudosFullstack/>} />
        <Route path='/trilha/qa' element={<ConteudosQA/>}/>
        <Route path='/trilha/uxui' element={<ConteudosUX/>}/>
        <Route path= '/login' element={<Login/>} />
        <Route path= '/perfil' element={
            
            <ProtectedRoutes> 
        <Details/>
        </ProtectedRoutes>
        
        } />
        </Routes>

    )
}