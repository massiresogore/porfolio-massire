import css from "./hero.module.scss";
import massire from "../../asset/massire.png";

import {
  toLeft,
  toRight,
  bottomTopTop,
  lowBottomTopTop,
} from "../../utils/motion";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{ background: "#f8f7f1" }} className={` ${css.hero}`}>
      <div className={`max__block max_padding ${css.container}`}>
        <motion.div
          variants={toLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={css.row1}
        >
          <span>Hey There,</span>
          <br />
          <span>{`I 'm Massire`}</span>
        </motion.div>
        <div className={css.row2}>
          <motion.div
            variants={bottomTopTop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={css.person}
          >
            <motion.img
              variants={lowBottomTopTop}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              alt=""
              src={massire}
            />
          </motion.div>
        </div>
        <motion.div
          variants={toRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={css.row3}
        >
          <span>étudiant</span>
          <br />
          <span>en 3eme année</span>
        </motion.div>
      </div>
    </section>
  );
}
