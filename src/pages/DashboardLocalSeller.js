import React, {useState} from "react";
import design from '../images/design.jpg';
import development from '../images/development.jpg';
import products from '../images/products.jpg';
import services from '../images/services.jpg';
import image1 from '../images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg';
import image2 from '../images/concept-open-magic-book-pages-water-land-small-child-fantasy-nature-learning-copy-space-166401875.jpg';
import image3 from '../images/consulting.jpg';
import image4 from '../images/contactus.jpg';
import image5 from '../images/design.jpg';
import image6 from '../images/development.jpg';
import image7 from '../images/MtFuji-GettyImages-959111140.jpg';
import image8 from '../images/pexels-photo-1172064.jpeg';



function DashboardLocalSeller() {
    const [listOfImages] = useState([
        { index:1, imageName:"Icy Wood",imagePath: design},
        { index:2, imageName:"Reflection of nature",imagePath: development},
        { index:3, imageName:"Wood tree",imagePath: products},
        { index:4, imageName:"Test 4",imagePath: services },
        { index:5, imageName:"Wood tree",imagePath: image1},
        { index:6, imageName:"Wood tree",imagePath: image2},
        { index:7, imageName:"Wood tree",imagePath: image3},
        { index:8, imageName:"Wood tree",imagePath: image4},
        { index:9, imageName:"Wood tree",imagePath: image5},
        { index:10, imageName:"Wood tree",imagePath: image6},
        { index:11, imageName:"Wood tree",imagePath: image7},
        { index:12, imageName:"Wood tree",imagePath: image8},
      ]);
  return (
    <React.Fragment> 
      <div className="component-2 wrapper"><br></br>
      <div className="wrapper"><h2>My Uploaded Images</h2></div>
      <br></br>
        <div className="component-2">
       
          {listOfImages.map((image, index) => (  
              <img src={image.imagePath} alt="NFT Image" key={image.index} style={{
                            height: 100,
                            width: 100,              
                            borderRadius: 7,
                            padding:2
                          }} />                               
          ))}
       
        </div>  
      </div> 
     
   </React.Fragment>
  );
}

export default DashboardLocalSeller;
