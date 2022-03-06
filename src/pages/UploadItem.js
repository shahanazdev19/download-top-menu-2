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

    {/* <div className="radio-buttons">

        Local
        <input
          id="windows"
          value="windows"
          name="platform"
          type="radio"
          onChange={this.handleChange}
        />
        Global
        <input
          id="mac"
          value="mac"
          name="platform"
          type="radio"
          onChange={this.handleChange}
          defaultChecked
        />       
      </div> */}
  
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh', paddingTop:230}} className="">     
        <Radio/>
    </div>     
 </React.Fragment>
  );

}

export default UploadItem;
