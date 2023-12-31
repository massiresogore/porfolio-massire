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
             afin {`d'ontenir`} le titre de concepteur et développeur {` d'applications`} Web et mobile

              {` au sein duquel j'ai appris`}  PHP HTPL CSS et Javascript.
              {/*symfony et depuis je suis accros, et en septempbre 2022, je suis*/}
              {/*tombé amoureux de javascript 😌. tous les jours {`j'apprends`} un*/}
              {/*peu plus de javascript et react que du bonheur 🥰.*/}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Resumer;
