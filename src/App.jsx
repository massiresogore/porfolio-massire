import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Resumer from "./components/resumer/Resumer";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        /*  <Route path="/contact" element={<Contact />} />
        <Route path="/resumer" element={<Resumer />} />*/
      </Routes>
      <Footer />
    </>
  );
}
