import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../App.css";
import data from "../mock-data.json";


function Register() {
    const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({    
    email: "",
    password:"",
    cpassword:""
  });

//   const [editFormData, setEditFormData] = useState({
//     fullName: "",
//     address: "",
//     phoneNumber: "",
//     email: "",
//   });

  //const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

//   const handleEditFormChange = (event) => {
//     event.preventDefault();

//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;

//     const newFormData = { ...editFormData };
//     newFormData[fieldName] = fieldValue;

//     setEditFormData(newFormData);
//   };

//   const handleAddFormSubmit = (event) => {
//     event.preventDefault();

//     const newContact = {
//       id: nanoid(),
//       fullName: addFormData.fullName,
//       address: addFormData.address,
//       phoneNumber: addFormData.phoneNumber,
//       email: addFormData.email,
//     };

//     const newContacts = [...contacts, newContact];
//     setContacts(newContacts);
//   };

//   const handleEditFormSubmit = (event) => {
//     event.preventDefault();

//     const editedContact = {
//       id: editContactId,
//       fullName: editFormData.fullName,
//       address: editFormData.address,
//       phoneNumber: editFormData.phoneNumber,
//       email: editFormData.email,
//     };

//     const newContacts = [...contacts];

//     const index = contacts.findIndex((contact) => contact.id === editContactId);

//     newContacts[index] = editedContact;

//     setContacts(newContacts);
//     setEditContactId(null);
//   };

//   const handleEditClick = (event, contact) => {
//     event.preventDefault();
//     setEditContactId(contact.id);

//     const formValues = {
//       fullName: contact.fullName,
//       address: contact.address,
//       phoneNumber: contact.phoneNumber,
//       email: contact.email,
//     };

//     setEditFormData(formValues);
//   };

//   const handleCancelClick = () => {
//     setEditContactId(null);
//   };

//   const handleDeleteClick = (contactId) => {
//     const newContacts = [...contacts];

//     const index = contacts.findIndex((contact) => contact.id === contactId);

//     newContacts.splice(index, 1);

//     setContacts(newContacts);
//   };
  const values = { email:'', password: '',cpassword: '' };
  const [fromValues,setFromValues] = useState(values);
  const [formErrors,setFromErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFromValues({...fromValues,[name]:value});
};

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('yes');
    setFromErrors(validate(fromValues));
    const response = await fetch('http://127.0.0.1:8000/api/signup/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(fromValues)
    })
    console.log(response)
    if (response.status === 201){
      alert('Account create successfully.Please verify your gmail.')
      setIsSubmit(true);
      setFromValues({ email:'', password: '',cpassword: ''});
    }
    
  }

  const validate=(values)=>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;   
    if (!values.email) {
      errors.email = "* Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "* This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "* Password is required";
    } else if (values.password.length < 4) {
      errors.password = "* Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "* Password cannot exceed more than 10 characters";
    }
    if (!values.cpassword) {
      errors.cpassword = "* Password is required";
    } else if (values.cpassword.length < 4) {
      errors.cpassword = "* Password must be more than 4 characters";
    } else if (values.cpassword.length > 10) {
      errors.cpassword= "* Password cannot exceed more than 10 characters";
    }
    if (!values.password.match(values.cpassword)){
        errors.password1= "* Password Should be metch";
    }
    return errors; 
}

  return (
    <div>
       

	    <div class="page-wrapper-inner">
            <div role="main" class="site-content">
                <div class="header-spacer"></div>
            </div>
		    <div class="container">
			    <div class="post-content no-vc">
				    <div class="woocommerce">
                    <div class="container">
                        <div class="woocommerce-notices-wrapper"></div>
                        <div class="et-overflow-container et-login-wrapper no_popup">
                            <div class="et-form-container register-active">	
                                <div id="et-register-form" class="">
                                    <h2 class="page-title">Register</h2>
                                        <form onSubmit={handleSubmit} method="post" class="woocommerce-form woocommerce-form-register register">
                                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide float-label">
                                            <label for="email" class="fl-label">Email address&nbsp;<span class="required">*</span></label>
                                                <input
                                                type="email"
                                                name="email"
                                                className="input-text"
                                                required="required"
                                                placeholder="Enter Email..."
                                                onChange={handleChange}
                                                />                                                
                                            </p>
                                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide float-label">
                                            <label for="password" class="fl-label">Password&nbsp;<span class="required">*</span></label>
                                                <input
                                                type="password"
                                                name="password"
                                                className="input-text"
                                                required="required"
                                                placeholder="Enter Password..."
                                                onChange={handleChange}
                                                />
                                               
                                            </p>
                                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide float-label">
                                            <label for="cpassword" class="fl-label">Confirm Password&nbsp;<span class="required">*</span></label>
                                                <input
                                                type="password"
                                                name="cpassword"
                                                className="input-text"
                                                required="required"
                                                placeholder="Confirm Password..."
                                                onChange={handleChange}
                                                />                                               
                                            </p> 
                                            <p class="woocommerce-form-row form-row">                                              
                                                <button type="submit" class="woocommerce-Button woocommerce-button button woocommerce-form-register__submit" name="register" value="Register">Register</button>
                                            </p>
                                            <p class="form-actions extra">Already a member?<a href="/login" class="login-link">Log In</a></p>
                                            <div class="wcfmmp_become_vendor_link"><a href="/login">Become a Vendor</a></div>
                                        </form>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>
			    </div>
		    </div>		
		</div>		
	</div>
  );
}

export default Register;






