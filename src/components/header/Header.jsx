import css from "./header.module.scss";
import { CgMenuOreos } from "react-icons/cg";
import { BiCopy } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { topTopBottom } from "../../utils/motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
          setMenuOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  const saveToClipBoard = () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText("0753703113");
        toast.success("Numéro copié");
      } catch (error) {
        toast.error("Ne peut pas copier");
      }
    }
  };

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
            onClick={() => {
              //console.log(menuOpened);
              if (menuOpened === false) {
                setMenuOpen(true);
              }
              // setMenuOpen(false);
            }}
          >
            <CgMenuOreos size={30} />
          </button>
          <ul
            className={css.links}
            ref={menuRef}
            //a modifier pour un meilleur ui
            style={{ left: menuOpened ? "0" : "-100%" }}
          >
            <li>
              <Link to="#" id="projet">
                Projet
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className={css.resume}>
              <Link to="/resumer">Resume</Link>
            </li>
            <li className={css.icon}>
              <p title="copy number">
                +(33) 07 53 70 31 13{" "}
                <BiCopy onClick={saveToClipBoard} size={20} />
              </p>

              {/* <button className="phone" >
                <BiCopy size={40} />
              </button> */}
            </li>
          </ul>
        </nav>
      </motion.div>
      <ToastContainer position="top-left" />
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
