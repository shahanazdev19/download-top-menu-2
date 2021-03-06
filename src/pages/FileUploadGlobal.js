import React from "react";
import axios from 'axios';

class GlobalFileUpload extends React.Component {
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
  return (
    <div className="component-2 wrapper">     
        <div> 
                <input type="file" onChange={this.onFileChange}/> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
        </div> 
        {this.fileData()} 
    </div> 
  );
}
}
export default GlobalFileUpload;
