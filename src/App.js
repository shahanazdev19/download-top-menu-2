import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarMenu from './components/DropdownMenu/NavbarMenu';
import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
import Contactus from "./pages/Contactus";
import Design from "./pages/Design";
import OilPainting from "./pages/Oilpainting";
import Marketing from "./pages/Marketing";
import Products from "./pages/Products";
import UploadItem from "./pages/UploadItem";
import Signup from "./pages/Signup";
import Painting from "./pages/Painting";

function App() {
  return (
    
      <BrowserRouter>
        <NavbarMenu />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contactus" component={Contactus}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/uploaditem" component={UploadItem}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/marketing" component={Marketing}></Route>
          <Route path="/oilpainting" component={OilPainting}></Route>
          <Route path="/design" component={Design}></Route>
          <Route path="/consulting" component={Consulting}></Route>
          <Route path="/Painting" component={Painting}></Route>
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
