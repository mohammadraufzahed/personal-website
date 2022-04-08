import React from "react";
import { Link } from "react-router-dom";
import Portfolio from "../../Styles/Portfilio/Portfolio.module.scss";
import { Right_Counter } from "../SocialMedia_PageNumber/Right_Counter";
export const MyPortfolio = () => {
  return (
    <section className={Portfolio.MyPortfolio_items}>
      <div className={Portfolio.MyPortfolio_items_information}>
        <div className={Portfolio.information_box}>
          <figure>
            <img src="/images/Header/Red_circle.png" alt="" />
          </figure>
          <h2>
            MY PO <span>R</span>TFOLIO
          </h2>
          <figure>
            <img src="/images/MyPortfolio/withoubackground9000.png" alt="" />
          </figure>
        </div>
        <div className={Portfolio.Items}>
          <div>
            <p></p>
            <p></p>
            <figure>
              <img src="/images/MyPortfolio/Capture.png" alt="">
                {/* <Link to="https://kilid-mohammad24680.vercel.app/"></Link> */}
              </img>
            </figure>
          </div>
          <div>
            <p></p>
            <p></p>
            <figure>
              <img src="/images/MyPortfolio/Capture.png" alt="">
                {/* <Link to="https://kilid-mohammad24680.vercel.app/"></Link> */}
              </img>
            </figure>
          </div>
          <div>
            <p></p>
            <p></p>
            <figure>
              <img src="/images/MyPortfolio/Capture.png" alt="">
                {/* <Link to="https://kilid-mohammad24680.vercel.app/"></Link> */}
              </img>
            </figure>
          </div>
          <div>
            <p></p>
            <p></p>
            <figure>
              <img src="/images/MyPortfolio/Capture.png" alt="">
                {/* <Link to="https://kilid-mohammad24680.vercel.app/"></Link> */}
              </img>
            </figure>
          </div>
          <div>
            <p></p>
            <p></p>
            <figure>
              <img src="/images/MyPortfolio/Capture.png" alt="">
                {/* <Link to="https://kilid-mohammad24680.vercel.app/"></Link> */}
              </img>
            </figure>
          </div>
          <div>
            <p></p>
            <p></p>
            <figure>
              <img src="/images/MyPortfolio/Capture.png" alt="">
                {/* <Link to="https://kilid-mohammad24680.vercel.app/"></Link> */}
              </img>
            </figure>
          </div>
        </div>
      </div>
      <div className={Portfolio.social_media}>
        <Right_Counter />
      </div>
      <div className={Portfolio.corners_page_number}>
        <p>04</p>
      </div>
    </section>
  );
};
