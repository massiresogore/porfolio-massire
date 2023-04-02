import css from "./header.module.scss";
import { CgMenuOreos } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { getMenuStyles, topTopBottom } from "../../utils/motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpen] = useState(false);
  const [headerShadow, setHeaderShadow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHeaderShadow("0 2px 5px rgba(0,0,0,.2)");
      } else {
        setHeaderShadow("none");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside() {
      const viewport_width = document.documentElement.clientWidth;
      if (menuRef.current) {
        if (viewport_width <= 700) {
          setMenuOpen(true);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <header className={css.header} style={{ boxShadow: headerShadow }}>
      <motion.div
        variants={topTopBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`max__block max_padding ${css.container}`}
      >
        <Link to="/" className={css.title}>
          MS
        </Link>
        <nav>
          <button
            onClick={(event) => {
              setMenuOpen((prev) => !prev);
            }}
          >
            <CgMenuOreos size={30} />
          </button>
          <ul
            className={css.links}
            ref={menuRef}
            //a modifier pour un meilleur ui
            style={getMenuStyles(menuOpened)}
          >
            <li>
              <Link to="#">Projet</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="##">Resume</a>
            </li>
            <li className={css.icon}>
              <p href="##">+(33) 07 53 70 31 13</p>
              <button
                className="phone"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <BiPhoneCall size={40} />
              </button>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}

// const App = () => {
//   return (
//     <BrowserRouter>
//       <h1>Adopte Me!</h1>
//       <Routes>
//         <Route path="/details/:id" element={<Details />} />
//         <Route path="/" element={<SearchParams />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
