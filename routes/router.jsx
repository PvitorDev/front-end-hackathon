import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../src/components/modalLogin';
import { getLocalItem } from '../src/utils/localStorage';
import {Home} from '../src/pages/Home'
import {TabelaConteudos} from '../src/components/Tabelas/Conteudos/FullstackConteudos'
import { TabelaPrincipal } from '../src/components/Tabelas/Conteudos/TabelaPrincipal';
function ProtectedRoutes({ children }) {
    const isAuthenticated = getLocalItem('token');

    return isAuthenticated ? children : <Navigate to='/login' />
}

export function MainRoutes() {

    return (
        <Routes>
            <Route path='/' element={
                <Home/>}
            />
            {<Route path='/tabelaConteudos' element={
                    <TabelaConteudos />}
            />}
        <Route path='/home' element={<TabelaPrincipal/>} />
        <Route path= '/login' element={<Login/>} />
        </Routes>

    )
}