import {Navigate,Route,Routes} from 'react-router-dom'

import {getLocalItem} from '../src/utils/localStorage'

import {Login}  from '../src/components/modalLogin';

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
                <PreventDuplicatedLoginRoutes>
                    <Login />
                </PreventDuplicatedLoginRoutes>
            } />

        </Routes>
    )
}