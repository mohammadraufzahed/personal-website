import React from "react";
import AboutMeStyle from "../../Styles/AboutMe/AboutMe.module.scss";
import { Link } from "react-router-dom";
import { Right_Counter } from "../SocialMedia_PageNumber/Right_Counter";

export const AboutMe = () => {
  return (
    <section className={AboutMeStyle.information_container}>
      <div className={AboutMeStyle.information_box}>
        <div className={AboutMeStyle.first_box}>
          <figure>
            <img src="/images/Header/Red_circle.png" alt="" />
          </figure>
          <h2>
            ABO<span>U</span>T ME
          </h2>
          <figure>
            <img src="/images/AboutMe/withoutbackground94.png" alt="" />
          </figure>
        </div>
        <div className={AboutMeStyle.personal_information}>
          <p>
            Hello There My name is <span>MOHAMMAD BAGHERI ,</span> Im a{" "}
            <span>F</span>rontend <span>D</span>eveloper from Iran and Studying
            Computer Engineering at Yadegar emam University, I Create Beautiful
            professional websites by using best practice Accessibility and I
            enjoy turning Complex Problems into the Simple, Beautiful and
            Intuitive Interface Designs.
          </p>
        </div>
        <div className={AboutMeStyle.second_box}>
          <h3>
            <span>P</span>ersonal <span>D</span>etails
          </h3>
        </div>
        <div className={AboutMeStyle.personal_details}>
          <div className={AboutMeStyle.personal_details_box}>
            <div>
              <h5>Full Name</h5>
              <a>Mohammad Bagheri</a>
            </div>
            <div>
              <h5>Email</h5>
              <a>mohammad.bagheri 24680@gmail.com</a>
            </div>
            <div>
              <h5>Freelance</h5>
              <a>Available</a>
            </div>
            <div>
              <h5>Data of Brithday</h5>
              <a>30 August 2001</a>
            </div>
            <div className={AboutMeStyle.cv_button}>
              <Link to="/cv.pdf" target="_blank" download>
                Download CV
              </Link>
            </div>
            <div>
              <h5>Phone Number</h5>
              <a>+98 933 282 8110</a>
            </div>
          </div>
        </div>
      </div>
      <div className={AboutMeStyle.social_media}>
        <Right_Counter />
      </div>
      <div className={AboutMeStyle.header_corners_page_number}>
        <p>02</p>
      </div>
      <div className={AboutMeStyle.left_line}>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};
