import React,{useState} from "react";
import design from '../images/design.jpg';
import development from '../images/development.jpg';
import products from '../images/products.jpg';
import services from '../images/services.jpg';

function OilPainting() {
  const [listOfImages] = useState([
    { index:1,imagePath: design},
    { index:2,imagePath: development},
    { index:3,imagePath: products},
    { index:4,imagePath: services }
  ]); 
  return (
    <React.Fragment> 
      <div className="component-2 wrapper">
      <br></br>
        <div className="wrapper">
          Oil Painting New Arrival
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
          Oil Painting Sold
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
        <div className="component-2 wrapper">
        <div className="wrapper">
          Oil Painting All List
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
      </div> 
     
   </React.Fragment>
  );
}

export default OilPainting;
