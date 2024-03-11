import React from "react";
import msgGif from "../../assets/message.gif";
import "./contact.css"
// import styled from "styled-components";
import { FaLinkedinIn, FaGithub, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


function Contact() {
  return (
    <section className="container Contactcontainer">
      <div className="contact-title title" id="contact" data-aos="fade-right">
        Contact
      </div>
      <div className="contact-content">
        <div className="contact-details-wrapper" data-aos="fade-right">
          <p>
           
            <span style={{ color: "rgb(115, 52, 209)"}}>
              {" "}
              Reach Me
            </span>{" "}
            for the Interview
          </p>
          <div className="contactbtn">
            <a
              href="https://www.linkedin.com/in/sridineshg"
              target="_blank"
              rel="noreferrer"
            >
              <button className="contact-btn">
                <FaLinkedinIn />
              </button>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="contact-btn">
                <FaGithub />
              </button>
            </a>
            <a
              href="mailto:sridineshgit@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="contact-btn" >
                <FiMail />
              </button>
            </a>
            <a
              href="tel:7538875836"
              target="_blank"
              rel="noreferrer"
            >
               <button className="contact-btn" style={{ marginRight: "0" }}>
                
                <FaPhone />
              </button>
            </a>
          </div>
        </div>

        <div className="contact-img-wrapper" data-aos="fade-left">
          <img src={msgGif} alt="" className="msg-gif" />
        </div>
        
      </div>
    </section>
  );
}
export default Contact;
