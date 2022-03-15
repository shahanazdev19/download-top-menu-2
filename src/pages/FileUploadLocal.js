import React from "react";
import axios from 'axios';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropDownList from "./DropdownList";
import Checkbox from './CheckBox';
import { useNavigate,useLocation  } from 'react-router-dom';

class LocalFileUpload extends React.Component {

    
    // file uploader----------------------
state = { 
  
    // Initially, no file is selected 
    selectedFile: null
  }; 
   
  // On file select (from the pop up) 
  onFileChange = event => { 
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] }); 
  }; 
   
  // On file upload (click the upload button) 
  onFileUpload = () => { 
    // Create an object of formData 
    const formData = new FormData(); 
   
    // Update the formData object 
    formData.append( 
      "myFile", 
      this.state.selectedFile, 
      this.state.selectedFile.name 
    ); 
   
    // Details of the uploaded file 
    console.log(this.state.selectedFile); 
   
    // Request made to the backend api 
    // Send formData object 
    axios.post("api/uploadfile", formData); 
  }; 
  fileData = () => { 
    if (this.state.selectedFile) { 
        
      return ( 
        <div> 
          <h2>File Details:</h2> 
          <p>File Name: {this.state.selectedFile.name}</p> 
          <p>File Type: {this.state.selectedFile.type}</p> 
          <p> 
            Last Modified:{" "} 
            {this.state.selectedFile.lastModifiedDate.toDateString()} 
          </p> 
        </div> 
      ); 
    } else { 
      return ( 
        <div style={{color:'red',alignSelf:'center'}}>           
          <h6 style={{}}>Choose before Pressing the Upload button</h6> 
        </div> 
      ); 
    } 
   
  }; 
  //--------------------------------------------

render(){
  function CartSellItemButtionClick() {
    const navigate = useNavigate();
    const onClick=()=>{
      navigate('/dashboardlocalseller');
        }
    return <button className='save-button button-default' onClick={onClick}>Save</button>;
  }
  return (
    <div className="component-2 col-sm-12 boundary-limit border-line">  
        <div className="float-container col-sm-12">
          <div className="float-child col-sm-6 label">
            Image Sell Type:
          </div>
          <div className="float-child col-sm-6 dropdown ">
            <DropDownList/>
          </div>              
        </div> 
        <div className="float-child control col-sm-12">        
          <div className="float-child col-sm-6 label">
            Upload File
          </div>           
          <div className="float-child col-sm-6 control">
          {this.fileData()}
            <input type="file" onChange={this.onFileChange}/> 
          </div>          
        </div> 
        <div className="float-child control col-sm-12">        
          <div className="float-child col-sm-6 label">          
          </div>           
          <div className="float-child col-sm-6 control">
            <button onClick={this.onFileUpload} className='file-upload-button'> 
                    Upload! 
            </button> 
          </div>          
        </div> 
        <div className="float-child control col-sm-12">        
          <div className="float-child col-sm-6 label">
            Generate Variation?          
          </div>          
          <div className="float-child col-sm-6 control">
            <Checkbox/>
          </div>          
        </div> 
       
        <div className="float-child col-sm-12 save-button-div"> 
        <br></br>
        </div> 
        <div className="col-sm-12 save-button-div"> 
        <CartSellItemButtionClick/>
          {/* <button className='save-button button-default'> 
                  Save 
          </button>         */}
        </div>         
    </div> 
  );
}
}
export default LocalFileUpload;
