import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/index.css";
import "./styles/globals.scss";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
