"use client";

import React, { useState } from "react";
import axios from "axios";
import ContactForm from "@/components/material/ContactForm";

export function ContactSection(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${props.apiEndpoint}user/contact/sent`,formData);
      if (response.status === 200 && response.data.status === "success") {
        alert(response.data.message);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        alert(`${response.status} Hata detay: ${response.data.message}`);
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <ContactForm
      formData={formData}
      handleChange={handleChange}
      onSubmitForm={handleSubmitForm}
    />
  );
}

export default ContactSection;
