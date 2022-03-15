import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const actions = [
  { label: "Hard Copy", value: 1 },
  { label: "Soft Copy", value: 2 },
  { label: "Both", value: 3 }
];

const DropDownList = () => (
  <div className="container padLeft0">
    <div className="">
      {/* <div className="col-md-4"></div> */}
      <div className="col-md-12">
        <Select options={ actions } />
      </div>
      {/* <div className="col-md-4"></div> */}
    </div>
  </div>
);
 
export default DropDownList