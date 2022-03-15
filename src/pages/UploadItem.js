import React,{useState} from "react";
import Radio from './RadioButton';

function UploadItem() {   
    const [rSelected, setRSelected] = useState(null);
    // handleChange = e => {
    //     const { name, value } = e.target;
    
    //     this.setState({
    //       [name]: value
    //     });
    //   };

      
  return (
    <React.Fragment>      
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh', paddingTop:150}} className="">     
        <Radio/>
    </div>     
 </React.Fragment>
  );

}

export default UploadItem;
