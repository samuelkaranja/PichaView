import React from "react";
import { ContactForm } from "../components";
//import Banner from "../assets/contact-banner.jpg";

const Contact: React.FC = () => {
  return (
    <div className="mt-8">
      {/* <img src={Banner} alt="" className="mx-auto" /> */}
      <h1 className="text-4xl font-semibold text-center underline mb-8">
        Contact Us
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
