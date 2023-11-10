import React, { useState } from "react";


function validateForm(formData) {
  let errors = [];
 
  if (!formData.name || !/^[A-Za-z]+$/.test(formData.name)) {
     errors.push("Name is invalid");
  }
 
  if (!formData.surname || !/^[A-Za-z]+$/.test(formData.surname)) {
     errors.push("Surname is invalid");
  }
 
  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
     errors.push("Email is invalid");
  }
 
  if (!formData.nickname || !/^[a-z0-9]+$/.test(formData.nickname)) {
     errors.push("Nickname is invalid");
  }
 
  if (!formData.password || formData.password.length < 8 || !/\d/.test(formData.password)) {
     errors.push("Password is invalid");
  }
 
  return errors;
 }

 const handleSubmit = (e) => {
  2   e.preventDefault();
  3
  4   const errors = validateForm(formData);
  5
  6   if (errors.length > 0) {
  7       console.log("Validation errors: ", errors);
  8   } else {
  9       console.log("Form data is valid");
  11       setFormData({
  12           name: "",
  13           surname: "",
  14           email: "",
  15           nickname: "",
  16           password: "",
  17       });
  18   }
  19};


 function RegistrationComponent() {
  const [formData, setFormData] = useState({
     name: "",
     surname: "",
     email: "",
     nickname: "",
     password: "",
  })};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
    />
    <input
      type="text"
      name="surname"
      value={formData.surname}
      onChange={handleChange}
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />
    <input
      type="text"
      name="nickname"
      value={formData.nickname}
      onChange={handleChange}
    />
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
    />
    <button type="submit">Register</button>
  </form>
);

export default RegistrationComponent;