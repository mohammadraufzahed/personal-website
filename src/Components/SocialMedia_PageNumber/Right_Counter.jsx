import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Right_Counter_Style from "../../Styles/Right_Counter/Right_Counter.module.scss";
library.add(faGithub, faLinkedinIn, faInstagram);
export const Right_Counter = () => {
  return (
    <>
      <div className={Right_Counter_Style.header_corner_right_midlle}>
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
    </>
  );
};
