import React from "react";
import { ContactForm } from "../components";
import Banner from "../assets/contact-banner.jpg";

const Contact: React.FC = () => {
  return (
    <div className="mt-8">
      <img src={Banner} alt="" />
      <ContactForm />
    </div>
  );
};

export default Contact;
