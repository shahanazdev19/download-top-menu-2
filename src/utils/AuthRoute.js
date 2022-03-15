import { Route,Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from '../context/AuthContext';


const AuthRoute = ({...props }) => {
    const {user} = useContext(AuthContext);
//     console.log(user);
    if (!user) {
        return <Navigate to="/" />
    }
    return <Outlet />
}
 export default AuthRoute;