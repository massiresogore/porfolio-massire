import css from "./technologie.module.scss";
import { TbHtml } from "react-icons/tb";
import { BsFiletypeCss } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandPhp } from "react-icons/tb";
import { DiSymfonyBadge } from "react-icons/di";
import { useEffect, useState } from "react";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import callProgrressBar from "../../utils/CallprogressBar";
import { FaLaravel } from "react-icons/fa";
import { motion } from "framer-motion";
import { technologieVariant } from "../../utils/motion";

export default function Technoligie() {
  const [progressBare] = useState("progress-bar");
  const [progressBarePhp] = useState("progress-bar-php");
  const [progressBareSymfony] = useState("progress-bar-symfony");
  const [progressBareJs] = useState("progress-bar-js");
  const [progressBareCss] = useState("progress-bar-css");
  const [progressBareHtml] = useState("progress-bar-html");
  useEffect(() => {
    init();
    return () => {
      clearInterval();
    };
  }, []);

  function init() {
    callProgrressBar(progressBare);
    callProgrressBar(progressBarePhp);
    callProgrressBar(progressBareSymfony);
    callProgrressBar(progressBareJs);
    callProgrressBar(progressBareCss);
    callProgrressBar(progressBareHtml);
  }

  return (
    <section className={css.technologie}>
      <div className={`max__block max_padding ${css.titre}`}>
        <div style={{ margin: "2rem" }}>
          Mes Technologies <span>.</span>
        </div>
      </div>
      <motion.div
        variants={technologieVariant}
        initial="hidden"
        whileInView="show"
        className={`max__block max_padding ${css.container}`}
      >
        <div className={css.tech}>
          <div className={css.iconame}>
            <div className={css.logo}>
              <TbHtml size={50} style={{ color: "#E56028" }} />
            </div>
            <div className={css.name}>html</div>
          </div>
          <div
            className={`${progressBareHtml} ${css.progressBarHtml}`}
            style={{ "--width": "0" }}>
          </div>
        </div>
        <div className={css.tech}>
          <div className={css.iconame}>
            <div className={css.logo}>
              <BsFiletypeCss size={50} style={{ color: "#2660E4" }} />
            </div>
            <div className={css.name}>css</div>
          </div>
          <div
            className={`${progressBareCss} ${css.progressBarCss}`}
            style={{ "--width": "0" }}
          ></div>
        </div>
        <div className={css.tech}>
          <div className={css.iconame}>
            <div className={css.logo}>
              <TbBrandJavascript size={50} style={{ color: "#EBD41B" }} />
            </div>
            <div className={css.name}>javascript</div>
          </div>
          <div
            className={`${progressBareJs} ${css.progressBarJs}`}
            style={{ "--width": "0" }}
          ></div>
        </div>

        <div className={css.tech}>
          <div className={css.iconame}>
            <div className={css.logo}>
              <FaReact size={50} style={{ color: "#02CDF1" }} />
            </div>
            <div className={css.name}>react</div>
          </div>

          <div
            className={`${progressBare} ${css.progressBar}`}
            style={{ "--width": "0" }}
          ></div>
        </div>

        <div className={css.tech}>
          <div className={css.iconame}>
            <div className={css.logo}>
              <TbBrandPhp size={50} style={{ color: "#7175AA" }} />
            </div>
            <div className={css.name}>php</div>
          </div>
          <div
            className={`${progressBarePhp} ${css.progressBarePhp}`}
            style={{ "--width": "0" }}
          ></div>
        </div>
        {/*Java*/}
        <div className={css.tech}>
          <div className={css.iconame}>
            <div className={css.logo}>
              <FaJava size={50} style={{ color: "#02CDF1" }}/>
            </div>
            <div className={css.name}>JAVA</div>
          </div>
          <div
              className={`${progressBare} ${css.progressBar}`}
              style={{ "--width": "0" }}
          ></div>

        {/*****************Spring*************/}
        </div><div className={css.tech}>
          <div className={css.iconame}>
            <div className={css.logo}>
              <SiSpring size={50} style={{ color: "!important#6cb52d" }} />
            </div>
            <div className={css.name}>Spring-boot</div>
          </div>
          <div
              className={`${progressBare} ${css.progressBar}`}
              style={{ "--width": "0" }}
          ></div>
        </div>

        {/***************** Laravel *************/}
        <div className={css.tech}>
          <div className={css.iconame}>
            <div className={css.logo}>
              <FaLaravel size={50} style={{ color: "!important#6cb52d" }}  />
            </div>
            <div className={css.name}>Laravel</div>
          </div>
          <div
              className={`${progressBare} ${css.progressBar}`}
              style={{ "--width": "0" }}
          ></div>
        </div>
        <div className={css.tech}>
          <div className={css.iconame}>
            <div className={css.logo}>
              <DiSymfonyBadge size={50} style={{ color: "#000000" }} />
            </div>
            <div className={css.name}>symfony</div>
          </div>
          <div
            className={`${progressBareSymfony} ${css.progressBareSymfony}`}
            style={{ "--width": "0" }}
          ></div>
        </div>
      </motion.div>
    </section>
  );
}
