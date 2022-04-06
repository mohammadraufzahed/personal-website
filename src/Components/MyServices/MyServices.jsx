import React from "react";
import Services from "../../Styles/MyServices/MyServices.module.scss";

export const MyServices = () => {
  return (
    <section className={Services.Container}>
      <div className={Services.Container_Items}>
        <div className={Services.Container_First_Item}>
          <h2>
            <span>M</span>y <span>S</span>ervices
          </h2>
          <p>What I Do</p>
        </div>
        <div className={Services.Container_Second_Item}>
          <div>
            <figure>
              <img src="/images/MyServices/108400301.png" alt="" />
            </figure>
            <figure>
              <img src="/images/MyServices/withoubackground125.png" alt="" />
            </figure>
            <h5>Web Development</h5>
            <p>
              i can help you to make and develop the site you are considering
            </p>
          </div>
          <div>
            <figure>
              <img src="/images/MyServices/withoubackground126.png" alt="" />
            </figure>
            <h5>Web Development</h5>
            <p>
              i can help you to make and develop the site you are considering
            </p>
          </div>
          <div>
            <figure>
              <img src="/images/MyServices/withoubackground1181.png" alt="" />
            </figure>
            <figure>
              <img src="/images/MyServices/withoubackground127.png" alt="" />
            </figure>
            <h5>Web Development</h5>
            <p>
              i can help you to make and develop the site you are considering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
