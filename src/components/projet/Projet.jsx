import css from "./projet.module.scss";
import { motion } from "framer-motion";
import { technologieVariant } from "../../utils/motion";
import calculatrice from "../../asset/images/calculatrice.png";
import bankist from "../../asset/images/bankist.png";
import cv from "../../asset/images/cv.png";
import guess from "../../asset/images/guess.png";
import word from "../../asset/images/word.png";
export default function Projet() {
  return (
    <section style={{ background: "#f8f7f1" }} className={` ${css.projet}`}>
      <div className={`max__block max_padding ${css.container}`}>
        {/* article-1 normal */}
        <motion.div
          variants={technologieVariant}
          initial="hidden"
          whileInView="show"
          className=""
        >
          <article className={css.articleCard}>
            <div className={css.text}>
              <h4>Javascript Project</h4>
              <h3>calculatrice</h3>
              <p>
                Description du projet , une application simple pour
                comprehension des technologies utiliser
                <a
                  id="arrow"
                  href="https://massiresogore.github.io/calculatrice/"
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
              src={calculatrice}
              alt="Screenshot of the Wall of Wonder Collections."
            />
          </article>
        </motion.div>
        {/* article-2 reverse */}
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
                Description du projet , une application simple pour
                comprehension des technologies utiliser
                <a
                  id="arrow"
                  href="https://massiresogore.github.io/arrayBankist/"
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
              src={bankist}
              alt="Screenshot of the Wall of Wonder Collections."
            />
          </article>
        </motion.div>
        {/* article-3 normal */}
        <motion.div
          variants={technologieVariant}
          initial="hidden"
          whileInView="show"
          className=""
        >
          <article className={css.articleCard}>
            <div className={css.text}>
              <h4>php Project </h4>
              <h3>CV</h3>
              <p>
                Description du projet , une application simple pour
                comprehension des technologies utiliser
                <a
                  id="arrow"
                  href="https://massiresogore.github.io/calculatrice/"
                >
                  this
                </a>
              </p>
              <h4 style={{ color: "#f2cb05", fontSize: "2rem" }}>
                {" "}
                Technologies used include:
              </h4>
              <ul>
                <li>HTML-CSS</li>
                <li>Php</li>
                <li>Javascript</li>
              </ul>
            </div>
            <img src={cv} alt="Screenshot of the Wall of Wonder Collections." />
          </article>
        </motion.div>
        {/* article-4 reverse */}
        <motion.div
          variants={technologieVariant}
          initial="hidden"
          whileInView="show"
          className={css.reverse}
        >
          <article className={`${css.articleCartReverse}`}>
            <div className={css.text2}>
              <h4>Javascript Project</h4>
              <h3>guess</h3>
              <p>
                Description du projet , une application simple pour
                comprehension des technologies utiliser
                <a
                  id="arrow"
                  href="https://massiresogore.github.io/jeuNbrAleatoire/"
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
              src={guess}
              alt="Screenshot of the Wall of Wonder Collections."
            />
          </article>
        </motion.div>
        {/* article-5 normal */}
        <motion.div
          variants={technologieVariant}
          initial="hidden"
          whileInView="show"
          className=""
        >
          <article className={css.articleCard}>
            <div className={css.text}>
              <h4>Javascript Project</h4>
              <h3>word</h3>
              <p>
                Description du projet , une application simple pour
                comprehension des technologies utiliser
                <a id="arrow" href="https://massiresogore.github.io/word/">
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
              src={word}
              alt="Screenshot of the Wall of Wonder Collections."
            />
          </article>
        </motion.div>
      </div>
    </section>
  );
}
