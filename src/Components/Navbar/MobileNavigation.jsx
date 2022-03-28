import React, { useState } from "react";
import { NavLinks } from "./NavLinks";
import Logo from "../../images/Header/MYLOGO.png";
import MobileNavigate from "../../Styles/Navbar/Navbar.module.scss";
import HeaderStyle from "../../Styles/Header/Header.module.scss";
import White from "../../images/Header/bttersun-modified.png";
import MenuToggle from "./MenuToggle";
export const MobileNavigation = () => {
  const [isOpen, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);
  return (
    <>
      <div className={HeaderStyle.header_head_top}>
        <div className={HeaderStyle.head_top_logo}>
          <figure>
            <img src={Logo} alt="" width={65} height={65} />
          </figure>
        </div>
        <div className={HeaderStyle.header_corner_right_top}>
          <div className={HeaderStyle.header_corner_information}>
            <h3>
              <span>C</span>reative
            </h3>
            {/* <figure>
              <FontAwesomeIcon icon={faLeftLong} />
            </figure> */}
            <h3>
              <span>D</span>eveloper
            </h3>
          </div>
          <div className={HeaderStyle.header_corner_image}>
            <figure>
              <img src={White} />
            </figure>
          </div>
        </div>
      </div>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <nav className={MobileNavigate.hamburger_menu}>
          <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
        </nav>
      )}
    </>
  );
};