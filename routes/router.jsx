import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../src/components/modalLogin';
import { TabelaConteudos } from '../src/components/tabelasConteudos';
import { getLocalItem } from '../src/utils/localStorage';

function ProtectedRoutes({ children }) {
    const isAuthenticated = getLocalItem('token');

    return isAuthenticated ? children : <Navigate to='/login' />
}

export function MainRoutes() {

    return (
        <Routes>
            <Route path='/' element={
                <ProtectedRoutes>
                    <TabelaConteudos />
                </ProtectedRoutes>}
            />
            <Route path='/tabelaConteudos' element={
                <ProtectedRoutes>
                    <TabelaConteudos />
                </ProtectedRoutes>}
            />
            <Route path='/login' element={<Login />} />

        </Routes>

    )
}