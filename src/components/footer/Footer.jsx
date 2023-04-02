import css from "./footer.module.scss";
import { TfiLinkedin } from "react-icons/tfi";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer id="footer" className={css.footer}>
      <div className={`max__block max_padding ${css.container}`}>
        {/* Name */}
        <h2>Sogore Massire </h2>
        {/* de Mossaka */}

        {/* icone */}
        <div className={css.iconLink}>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/massire-sogore-a7b93b208/"
                rel="noreferrer"
                target="_blank"
              >
                <TfiLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/massiresogore"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="mailto:massire.org@gmail.com">
                <AiOutlineMail />
              </a>
            </li>
          </ul>
          <p>
            <small>© 2023 Sogore Massire. All rights reserved</small>
          </p>
        </div>

        {/* Infomation */}
        <div className={css.information}>
          <small>personnal information</small>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/massire-sogore-a7b93b208/"
                rel="noreferrer"
                target="_blank"
              >
                Lizy Sur Ourcq
              </a>
            </li>
            <li>
              <a
                href="https://github.com/massiresogore"
                rel="noreferrer"
                target="_blank"
              >
                77440
              </a>
            </li>
            <li>
              <a href="mailto:massire.org@gmail.com">France</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
