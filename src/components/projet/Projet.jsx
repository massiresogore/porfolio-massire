import css from "./projet.module.scss";
import { motion } from "framer-motion";
import { technologieVariant } from "../../utils/motion";
export default function Projet() {
  return (
    <section style={{ background: "#f8f7f1" }} className={` ${css.projet}`}>
      <div className={`max__block max_padding ${css.container}`}>
        <motion.div
          variants={technologieVariant}
          initial="hidden"
          whileInView="show"
          className=""
        >
          <article className={css.articleCard}>
            <div className={css.text}>
              <h4>Javascript Project</h4>
              <h3>Fake banque guichet</h3>
              <p>
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                <a
                  id="arrow"
                  href="https://frontendmasters.github.io/grid-flexbox-v2/grid-figure-figcaption"
                >
                  this
                </a>
              </p>
              <h4 style={{ color: "#f2cb05", fontSize: "2rem" }}>
                {" "}
                Technologies used include:
              </h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
            <img
              src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-4.png"
              alt="Screenshot of the Wall of Wonder Collections."
            />
          </article>
        </motion.div>
        {/* article 2 */}
        <motion.div
          variants={technologieVariant}
          initial="hidden"
          whileInView="show"
          className={css.reverse}
        >
          <article className={`${css.articleCartReverse}`}>
            <div className={css.text2}>
              <h4>Javascript Project</h4>
              <h3>Fake banque guichet</h3>
              <p>
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                <a
                  id="arrow"
                  href="https://frontendmasters.github.io/grid-flexbox-v2/grid-figure-figcaption"
                >
                  this
                </a>
              </p>
              <h4 style={{ color: "#f2cb05", fontSize: "2rem" }}>
                {" "}
                Technologies used include:
              </h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>

            <img
              src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-4.png"
              alt="Screenshot of the Wall of Wonder Collections."
            />
          </article>
        </motion.div>
      </div>
    </section>
  );
}
