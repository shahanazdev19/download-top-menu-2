import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { createContext,useState,useEffect } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) =>{
   
    const [authTokens, setAuthToken] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) :null);
    const [user,setUser] = useState(()=>localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) :null);;
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    const loginUser = async(e) => {
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/api/token/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value,'password':e.target.password.value})
        })
        const data =  await response.json();
        console.log('data',data);
        //console.log('response',response)

        if (response.status === 200){
            setAuthToken(data)
            const d =(jwt_decode(data.access))
            if(d.is_verified===true){
                setUser(jwt_decode(data.access))
                localStorage.setItem('authTokens',JSON.stringify(data))
                navigate('/dashboardlocalseller');
                // navigate('/uploaditem');
            }
            else{
                alert('Please Verify your email!')
                navigate('/login')
            }
            
        }else{
            alert('Somethings wrong!')
        }
    }

    const logoutUser=() =>{
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    const contextData ={
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser
    }   
    return(
        <AuthContext.Provider value={contextData}>
            {/* {loading ? null:children} */}
            {children}
        </AuthContext.Provider>
    )
}