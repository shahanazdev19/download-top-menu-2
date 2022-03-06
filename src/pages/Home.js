import React,{useState} from "react";
// import image from '../images/home.jpg';
import design from '../images/design.jpg';
import development from '../images/development.jpg';
import products from '../images/products.jpg';
import services from '../images/services.jpg';
// import Marquee from "react-easy-marquee";

function Home() { 
  const [listOfImages] = useState([
    { index:1,imagePath: design},
    { index:2,imagePath: development},
    { index:3,imagePath: products},
    { index:4,imagePath: services }
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
            <img src={image.imagePath} alt="NFT Image" key={image.index} style={{
              height: 150,
              width: 150,              
              borderRadius: 7,
              padding:2
            }} />          
        ))}
        </div>  
      </div> 
     
   </React.Fragment>
  );
}

export default Home;
