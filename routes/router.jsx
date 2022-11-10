import {Navigate,Route,Routes} from 'react-router-dom'

import {getLocalItem} from '../src/utils/localStorage'

import {Login}  from '../src/components/modalLogin';
import {TabelaConteudos} from '../src/components/tabelasConteudos'
import Carousel from '../src/components/Carousel';
function ProtectedRoutes({ children }) {
    const isAuthenticated = getLocalItem('token');

    return isAuthenticated ? children : <Navigate to='/home' />
}

const PreventDuplicatedLoginRoutes = ({ children }) => {
    const isAthenticated = getLocalItem('token');

    return isAthenticated ? <Navigate to='/' /> : children;
}

export function MainRoutes() {

    return (
        <Routes>
            <Route path='/login' element={
                    <Login />
            } />
             <Route path='/tabelaConteudos' element={
                    <TabelaConteudos />
            } />
            <Route path='/carousel' element={
                    <Carousel />
            } />

        </Routes>
    )
}