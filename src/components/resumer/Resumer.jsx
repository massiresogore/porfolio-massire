import css from "./resumer.module.scss";
const Resumer = () => {
  return (
    <section className={`max__block max_padding ${css.container}`}>
      <div className={css.intro}>
        <h1>A propos de moi</h1>
        <p>
          je suis un étudiant en 3<sup>ème</sup> année de bachelor , conception
          et développement
          {` d'application`} Web et mobile nb:
          <mark>le site est en cours de modification...</mark>
        </p>

        <div>
          <article className="1">
            <h2>Comment je suis arrivé la ?</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate eius temporibus nobis deserunt molestiae assumenda cum
              optio placeat exercitationem eligendi voluptatibus possimus neque
              quia minus, incidunt dolor explicabo corrupti fugit.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Resumer;
