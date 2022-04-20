import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import ContactMe from "../../Styles/Contact_Me/ContactMe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
library.add(faGithub, faLinkedinIn, faInstagram);
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
toast.configure();
const Contact_Me = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const submit = () => {
    if (name && email && message && validEmail) {
      const serviceId = "service_fct2fyw";
      const templateId = "template_kj63yzr";
      const userId = "tMoVCEkfoRAqlQH5_";
      const templateParams = {
        name,
        email,
        message,
      };
      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
      toast.success("succes", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      toast.error("Please fill in all fields", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };
  const isValidEmail = () => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;
    setValidEmail(regex.test(email));
  };

  return (
    <section className={ContactMe.ContactMe_items}>
      <div className={ContactMe.information_box}>
        <figure>
          <img src="/images/Header/Red_circle.png" alt="" />
        </figure>
        <h2>
          CONT <span>A</span>CT ME
        </h2>
      </div>
      <div className={ContactMe.ContactMe_items_information}>
        <div className={ContactMe.form}>
          <figure>
            <img src="/images/Contact_Me/withoutbackground922.png" alt="" />
          </figure>
          <h4>Get in touch</h4>
          <div>
            <input
              type="text"
              placeholder="Full Name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onKeyUp={isValidEmail}
              onChange={(e) => setEmail(e.target.value)}
              className={
                email != "" && !validEmail ? ContactMe.invalid_email : null
              }
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className={ContactMe.Click_Me}>
            <button onClick={submit}>Send</button>
          </div>
        </div>
        <div className={ContactMe.social_media}>
          <figure>
            <img src="/images/Contact_Me/withoubackground141.png" alt="" />
          </figure>
          <div className={ContactMe.main_header}>
            <h4>Nice to meet you, i will chat you soon.</h4>
          </div>
          <div>
            <h5>Email</h5>
            <a href="mailto:mohammad.bagheri24680@gmail.com">
              mohammad.bagheri 24680@gmail.com
            </a>
          </div>
          <div>
            <h5>Phone Number</h5>
            <a href="tel:09332828110">+98 933 282 8110</a>
          </div>
          <div>
            <h5>Freelance</h5>
            <a>Available</a>
          </div>
          <div>
            <h5>Address</h5>
            <a>Iran,Tehran</a>
          </div>
          <div className={ContactMe.header_corner_right_midlle}>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
              <a>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
              <a>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
              <a>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className={ContactMe.side_images}>
        <figure>
          <img src="/images/Contact_Me/withoutbackground77.png" alt="" />
        </figure>
        <figure>
          <img src="/images/Header/Red_circle.png" alt="" />
        </figure>
      </div>
      <div className={ContactMe.corners_page_number}>
        <p>05</p>
      </div>
    </section>
  );
};

export default Contact_Me;
