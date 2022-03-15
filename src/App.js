import React,{useState,useContext} from "react";
import "./App.css";
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import NavbarMenu from './components/MenuAsGallary/NavbarMenu';
import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
import Contactus from "./pages/Contactus";
import Design from "./pages/Design";
import OilPainting from "./pages/Oilpainting";
import Marketing from "./pages/Marketing";
import BuyerInfo from "./pages/BuyerInfo";
import UploadItem from "./pages/UploadItem";
import Painting from "./pages/Painting";
import SellItem from './pages/SellItem';
import CartSellItems1 from "./pages/CartSellItems1";
import DashboardLocalSeller from "./pages/DashboardLocalSeller";
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './utils/PrivateRoute';
import AuthRoute from './utils/AuthRoute';
import {AuthProvider} from './context/AuthContext'

function App() {
  const [userData, setUserData] = useState(null);
  //const {loginUser,logoutUser} = useContext(AuthContext);
  return (
    
      <BrowserRouter>
        <NavbarMenu />
        <AuthProvider>
        <Routes>
          {/* <Route path="/home" exact element={<Home/>} type="guest"></Route>
          <Route path="/contactus" element={<Contactus/>} type="guest"></Route>
          <Route path="/buyerinfo" element={<BuyerInfo/>} type="guest"></Route>
          <Route path="/uploaditem" element={<UploadItem/>} type="guest"></Route>
          <Route path="/marketing" element={<Marketing/>} type="guest"></Route>
          <Route path="/oilpainting" element={<OilPainting/>} type="guest"></Route>
          <Route path="/design" element={<Design/>} type="guest"></Route>
          <Route path="/consulting" element={<Consulting/>} type="guest"></Route>
          <Route path="/painting" element={<Painting/>} type="guest"></Route>
          <Route path="/sellitem" element={<SellItem/>} type="guest"></Route>
          <Route path="/cartsellitem1" element={<CartSellItems1/>} type="guest"></Route>
          <Route path={"/dashboardlocalseller"} element={<DashboardLocalSeller/>} type="guest"></Route>
          <Route path={"/login"} element={<Login/>} type="guest"></Route>
          <Route path={"/register"} element={<Register/>} type="guest"></Route>
          <Route path="/*" element={<PrivateRoute/>}>
            <Route path={"dashboardlocalseller"} element={<DashboardLocalSeller/>} type="private"></Route>
            <Route path="uploaditem" element={<UploadItem/>} type="private"></Route>
          </Route> */}
          <Route path="/" element={<Navigate to='/home' replace/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path={"/login"} element={<Login/>} type="guest"></Route>
          <Route path={"/register"} element={<Register/>} type="guest"></Route>
          {/* <Route path="/*" element={<PrivateRoute/>}>
            <Route path="dashboardlocalseller" element={<DashboardLocalSeller/>} type="private"/>
            <Route path="uploaditem" element={<UploadItem/>} type="private"/>
          </Route>
          <Route exact	path={<AuthRoute/>}>
            <Route path="sellitem" element={<SellItem/>} type="private"/>
            <Route path="cartsellitem1" element={<CartSellItems1/>} type="private"/>            
          </Route> */}
					{/* <AuthRoute exact path="/sellitem">
							<SellItem/>
					</AuthRoute>
          <AuthRoute exact path="/cartsellitem1">
							<CartSellItems1/>
          </AuthRoute> */}
        </Routes>
        
        </AuthProvider>
      </BrowserRouter>
    
  );
}

export default App;
