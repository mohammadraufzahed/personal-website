import React from "react";
import Skills from "../../Styles/MySkills/MySkills.module.scss";
import { Right_Counter } from "../SocialMedia_PageNumber/Right_Counter";
const MySkills = () => {
  return (
    <section className={Skills.Myskills_items}>
      <div className={Skills.Myskills_items_information}>
        <div className={Skills.information_box}>
          <figure>
            <img src="/images/Header/Red_circle.png" alt="" />
          </figure>
          <h2>
            MY S <span>K</span>ILLS
          </h2>
          <figure>
            <img src="/images/MySkills/withoutbackground933.png" alt="" />
          </figure>
        </div>
        <div className={Skills.Items}>
          <div className={Skills.Items_box}>
            <h3>
              <span>T</span>echnical <span>S</span>kills
            </h3>
            <div className={Skills.box}>
              <p>HTML & CSS</p>
              <p>95%</p>
              <div className={Skills.one}>
                <div></div>
              </div>
            </div>
            <div className={Skills.box}>
              <p>jQuery</p>
              <p>75%</p>
              <div className={Skills.two}>
                <div></div>
              </div>
            </div>
            <div className={Skills.box}>
              <p>React</p>
              <p>65%</p>
              <div className={Skills.three}>
                <div></div>
              </div>
            </div>
            <div className={Skills.box}>
              <p>JavaScrip</p>
              <p>75%</p>
              <div className={Skills.four}>
                <div></div>
              </div>
            </div>
            <div className={Skills.box}>
              <p>Responsive</p>
              <p>90%</p>
              <div className={Skills.five}>
                <div></div>
              </div>
            </div>
            <div className={Skills.box}>
              <p>Bootstrap</p>
              <p>80%</p>
              <div className={Skills.six}>
                <div></div>
              </div>
            </div>
          </div>
          <div className={Skills.Items_box}>
            <h3>
              <span>P</span>rofessional <span>S</span>kills
            </h3>
            <div className={Skills.box}>
              <p>public relations</p>
              <p>95%</p>
              <div className={Skills.seven}>
                <div></div>
              </div>
            </div>
            <div className={Skills.box}>
              <p>Teamwork</p>
              <p>90%</p>
              <div className={Skills.eight}>
                <div></div>
              </div>
            </div>
            <div className={Skills.box}>
              <p>Creativity</p>
              <p>90%</p>
              <div className={Skills.nine}>
                <div></div>
              </div>
            </div>
            <div className={Skills.box}>
              <p>Public speaking</p>
              <p>80%</p>
              <div className={Skills.ten}>
                <div></div>
              </div>
            </div>
            <div className={Skills.box}>
              <p>Entrepreneurial thinking</p>
              <p>90%</p>
              <div className={Skills.eleven}>
                <div></div>
              </div>
            </div>
            <div className={Skills.box}>
              <p>Good listener</p>
              <p>90%</p>
              <div className={Skills.twelve}>
                <div></div>
              </div>
            </div>
          </div>
          <div className={Skills.other_skills}>
            <h4>
              <span>O</span>ther <span>S</span>kills
            </h4>
            <p>Git</p>
            <p>Seo</p>
            <p>Figma</p>
            <p>Blender</p>
            <p>Sass</p>
            <p>GitHub</p>
            <p>ReactNative</p>
          </div>
        </div>
      </div>
      <div className={Skills.social_media}>
        <Right_Counter />
      </div>
      <div className={Skills.corners_page_number}>
        <p>03</p>
      </div>
    </section>
  );
};

export default MySkills;
