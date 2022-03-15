import React,{useState} from "react";
import { Link } from 'react-router-dom';
// import image from '../images/home.jpg';
import design from '../images/design.jpg';
import development from '../images/development.jpg';
import products from '../images/products.jpg';
import services from '../images/services.jpg';
import SellItem from '../pages/SellItem';

// import Marquee from "react-easy-marquee";

function Home() { 
  const [listOfImages] = useState([
    { index:1, imageName:"Test 1",imagePath: design},
    { index:2, imageName:"Test 2",imagePath: development},
    { index:3, imageName:"Test 3",imagePath: products},
    { index:4, imageName:"Test 4",imagePath: services }
  ]); 
  
  return (
    <React.Fragment>
     
      <div className="component-1">
        <div className="Home-component"> 
        </div> 
      </div>       
      <div className="component-2 wrapper">
        <div className="wrapper">
          Latest sold ...
        </div><br></br>
        <div className="component-2"> 
        {listOfImages.map((image, index) => (               
            <img src={image.imagePath} alt="NFT Image" key={image.index} style={{
              height: 150,
              width: 150,              
              borderRadius: 7,
              padding:2
            }} />          
        ))}
        </div> 
      </div> 
     
      <div className="component-2 wrapper"><br></br>
      <div className="wrapper">
          Our Collections
        </div><br></br>
        <div className="component-2">
       
          {listOfImages.map((image, index) => (               
              <Link to={{
                pathname:"/sellitem",
                state: {image:image} // your data array of objects
              }} key={index}>
              <img src={image.imagePath} alt="NFT Image" key={image.index} style={{
                            height: 150,
                            width: 150,              
                            borderRadius: 7,
                            padding:2
                          }} /> 
              </Link>                  
          ))}
       
        </div>  
        <br></br>
        <div className="component-2">
       
          {listOfImages.map((image, index) => (               
              <Link to={{
                pathname: "./SellItem",
                state: {image:image} // your data array of objects
              }} key={index}>
              <img src={image.imagePath} alt="NFT Image" key={image.index} style={{
                            height: 150,
                            width: 150,              
                            borderRadius: 7,
                            padding:2
                          }} /> 
              </Link>                  
          ))}
       
        </div>  
      </div> 
     
   </React.Fragment>
  );
}

export default Home;
