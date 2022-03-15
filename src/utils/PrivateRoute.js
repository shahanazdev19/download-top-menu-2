import { Route,Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from '../context/AuthContext';

// const PrivateRoute =props =>{
//     const {type}=props;
//     console.log(AuthContext);
   
//     const {user} = useContext(AuthContext);
//     console.log(user);
//     //return !user && type==="guest" ? <Navigate to="/home" /> :(!user && type==="private" ? <Navigate to="/login" /> : <Outlet />) 
//     return (!user && type==="private" ? <Navigate to="/login" /> : <Outlet />) 
        
// }
// export default PrivateRoute;

// Restricted route 
const PrivateRoute = ({}) => {
    const {user} = useContext(AuthContext);
    if (!user) {
        return <Navigate to="/login" />
    }
    return  <Outlet />
}

export default PrivateRoute;