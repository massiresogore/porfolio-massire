import cv from "../asset/images/cv.png";
import calculatrice from "../asset/images/calculatrice.png";
import bankist from "../asset/images/bankist.png";
import guess from "../asset/images/guess.png";
import word from "../asset/images/word.png";
//import css from "./projet.module.scss";
export const projetData = [
  {
    id: 1,
    motionClass: "",
    articleClass: "articleCard",
    textClass: "text",
    title: "php Project",
    subtile: "CV",
    technologie: "Technologies used include:",
    paragraph:
      " une application simple pour comprehension des technologies utilisées",
    language: ["HTML/CSS", "Php", "Javascript"],
    image: cv,
    href: "https://www.sogoremassire.fr/",
  },
  {
    id: 2,
    motionClass: "reverse",
    articleClass: "articleCartReverse",
    textClass: "text2",
    title: "Javascript Project",
    subtile: "Fake banque guichet",
    paragraph:
      " une application simple pour comprehension des technologies utilisées",
    href: "https://massiresogore.github.io/arrayBankist/",
    technologie: "Technologies used include:",
    language: ["HTML", "Css", "Javascript"],
    image: bankist,
  },
  {
    id: 3,
    motionClass: "",
    articleClass: "articleCard",
    textClass: "text",
    title: "Javascript Project",
    subtile: "calculatrice",
    paragraph:
      " une application simple pour comprehension des technologies utilisées",
    href: "https://massiresogore.github.io/calculatrice/",
    technologie: "Technologies used include:",
    language: ["HTML", "Css", "Javascript"],
    image: calculatrice,
  },
  {
    id: 4,
    motionClass: "reverse",
    articleClass: "articleCartReverse",
    textClass: "text2",
    title: "Javascript Project",
    subtile: "guess",
    paragraph:
      " une application simple pour comprehension des technologies utilisées",
    href: "https://massiresogore.github.io/jeuNbrAleatoire/",
    technologie: "Technologies used include:",
    language: ["HTML", "Css", "Javascript"],
    image: guess,
  },
  {
    id: 5,
    motionClass: "",
    articleClass: "articleCard",
    textClass: "text",
    title: "Javascript Project",
    subtile: "word",
    paragraph:
      " une application simple pour comprehension des technologies utilisées",
    href: "https://massiresogore.github.io/word/",
    technologie: "Technologies used include:",
    language: ["HTML", "Css", "Javascript"],
    image: word,
  },
];
