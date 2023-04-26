import css from "./resumer.module.scss";
const Resumer = () => {
  return (
    <section className={`max__block max_padding ${css.container}`}>
      <div className={css.intro}>
        <h1>A propos de moi</h1>
        <p>
          je suis un étudiant en 3<sup>ème</sup> année de bachelor , conception
          et développement
          {` d'application`} Web et mobile en recherche de stage
        </p>

        <div>
          <article className="1">
            <h2>Comment je suis arrivé la ?</h2>
            <p>
              {`j'ai`} commencé à apprendre le web en septembre 2021,et en 2022
              {`j'ai`} integré{" "}
              <a
                style={{ color: "var( --color-yellow)" }}
                href="https://iesig-education.com/"
              >
                ilci
              </a>{" "}
              en deuxieme année de concepteur et developpeur
              {` d'application`} web et mobile,{" "}
              {`d'où  j'ai appris et obtnenue une base`} en php html css et
              symfony et depuis je suis accros, et en septempbre 2022, je suis
              tombé amoureux de javascript😌. actuellement {`j'apprends`} un peu
              plus javascript, react et en même temps node js, que du bonheur
              🥰.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Resumer;
