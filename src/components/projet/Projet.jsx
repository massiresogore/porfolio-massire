import css from "./projet.module.scss";
import { motion } from "framer-motion";
import { technologieVariant } from "../../utils/motion";
import { projetData } from "../../utils/data";

export default function Projet() {
  return (
    <section style={{ background: "#f8f7f1" }} className={` ${css.projet}`}>
      <div className={`max__block max_padding ${css.container}`}>
        {projetData.map((data) => {
          const {
            id,
            motionClass,
            articleClass,
            textClass,
            title,
            subtile,
            technologie,
            paragraph,
            language,
            image,
            href,
          } = data;
          return (
            <motion.div
              variants={technologieVariant}
              initial="hidden"
              whileInView="show"
              className={motionClass === "" ? "" : css.reverse}
              key={id}
            >
              <article
                className={
                  articleClass === "articleCard"
                    ? css.articleCard
                    : css.articleCartReverse
                }
              >
                <div className={textClass === "text" ? css.text : css.text2}>
                  <h4>{title}</h4>
                  <h3>{subtile}</h3>
                  <p className="">
                    {paragraph}
                    <a id="arrow" href={href}>
                      this
                    </a>
                  </p>
                  <h4 style={{ color: "#f2cb05", fontSize: "2rem" }}>
                    {technologie}
                  </h4>
                  <ul>
                    {language.map((lg) => (
                      <li key={lg}>{lg}</li>
                    ))}
                  </ul>
                </div>
                <img src={image} alt={textClass} />
              </article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
