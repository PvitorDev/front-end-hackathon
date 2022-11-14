import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../src/components/modalLogin';
import { getLocalItem } from '../src/utils/localStorage';
import {Home} from '../src/pages/Home'
import { ConteudosQA } from '../src/components/Tabelas/Conteudos/QA';
import {ConteudosFullstack} from '../src/components/Tabelas/Conteudos/Fullstack';
import { ConteudosUX } from '../src/components/Tabelas/Conteudos/UX';

import { Details } from '../src/pages/Perfil';
import { Grafico } from '../src/components/Graficos';
import { Comunidade } from '../src/pages/comunidade';
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
        <Route path= '/perfil' element={
            
            <ProtectedRoutes> 
        <Details/>
        </ProtectedRoutes>
        
        } />
        <Route path='/comunidade' element={<Comunidade/>}></Route>
        </Routes>

    )
}