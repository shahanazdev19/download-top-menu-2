import React from "react";
import LocalFileUpload from "./FileUploadLocal";
import GlobalFileUpload from "./FileUploadGlobal";


function Radio () {
  const [status, setStatus] = React.useState(0) // 0: no show, 1: show yes, 2: show no.

  const radioHandler = (status) => {
    setStatus(status);
  };

  return (
    <div style={{justifyContent:'center', alignItems:'center', display:'flex',flexDirection: 'column'}}>   
        <div style={{justifyContent:'center', alignItems:'center'}}> 
            <input type="radio" name="itemUploader" value="Local" checked={status === 1} onChange={(e) => radioHandler(1)}/> Local &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="itemUploader" value="International" checked={status === 2} onChange={(e) => radioHandler(2)} />International
        </div>
        <br></br><br></br>
        <div className="component-1" style={{justifyContent:'center', alignItems:'center'}}> 
            {status === 1 && <LocalFileUpload/>}
            {status === 2 && <GlobalFileUpload/>}
        </div> 
             
    </div>
  );
}

export default Radio;