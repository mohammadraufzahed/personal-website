import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import HeaderStyle from "../../Styles/Header/Header.module.scss";
import Circle from "../../images/Header/LeftBottom.png";
import White from "../../images/Header/bttersun-modified.png";
import Little_Circle from "../../images/Header/Red_circle.png";
import Main_Picture from "../../images/Header/withoutbackground911.png";
import { Right_Counter } from "../SocialMedia_PageNumber/Right_Counter";
library.add(faGithub, faLinkedinIn, faInstagram, faLeftLong);
export const Header = () => {
  return (
    <section className={HeaderStyle.header}>
      <div className={HeaderStyle.header_head_top}>
        <div className={HeaderStyle.header_corner_right_top}>
          <div className={HeaderStyle.header_corner_image}>
            <figure>
              <img src={White} />
            </figure>
          </div>
        </div>
      </div>
      <div className={HeaderStyle.header_corner}>
        <div className={HeaderStyle.header_corner_leftbottom}>
          <div>
            <figure>
              <img src={Circle} width={500} height={500} alt="" />
            </figure>
          </div>
          <div>
            <h3>
              <span>F</span>rontend <span>D</span>eveloper
            </h3>
            <h5>
              From <span>IR</span>
            </h5>
          </div>
        </div>
      </div>
      <div className={HeaderStyle.header_main}>
        <div className={HeaderStyle.header_main_left_piece}>
          <figure>
            <img src={Little_Circle} />
          </figure>
          <h2>
            <span>H</span>ELLO I'M
          </h2>
        </div>
        <div className={HeaderStyle.header_name_information}>
          <h1>
            MOHAMMAD <br /> BAGHERI
          </h1>
          <figure>
            <img src={Main_Picture} />
          </figure>
        </div>
      </div>
      <div className={HeaderStyle.social_media}>
        <Right_Counter />
      </div>
      <div className={HeaderStyle.header_corners_page_number}>
        <p>01</p>
      </div>
    </section>
  );
};
