import css from "./resumer.module.scss";
const Resumer = () => {
  return (
    <section className={`max__block max_padding ${css.container}`}>
      <div className={css.intro}>
        <h1>A propos de moi</h1>
        <p>
          je suis Sogore Massire, étudiant en 3<sup>ème</sup> année de bachelor , Conception
          et Développement
          {` d'applications`} Web et mobile.
        </p>

        <div>
        <article className="1">
            <h2>Comment je suis arrivé la ?</h2>
            <p>
              {`j'ai`} commencé à apprendre le web en septembre 2021, en 2022
              {` j'ai`} integré{" "}
              <a
                style={{ color: "var( --color-yellow)" }}
                href="https://iesig-education.com/"
              >
                ilci
              </a>{" "}
             afin {`d'ontenir`} le titre de concepteur et développeur Informatique.
            </p>
          </article>
        <article className="2">
            <h2>Mes Skills ?</h2>
            &nbsp;
              Pour l'instant je fais : 
              &nbsp;<h3>* Language</h3>
              <ul>
                <li>Java Script/Html/Css</li>
                <li>Php</li>
                <li>Java</li>
              </ul>
              &nbsp;
                <h3>* Frontend framework</h3>
              <ul>
                <li>ReactJs/TypeScript</li>
                <li>NextJs/TypeScript</li>
                <li>VueJs</li>
              </ul>
              &nbsp;
                <h3>* Backend framework</h3>
              <ul>
                <li>Laravel</li>
                <li>Spring boot</li>
              </ul>

          </article>
         
        </div>
      </div>
    </section>
  );
};

export default Resumer;
