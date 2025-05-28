import "swiper/css";
import styles from "./HeroStyles.module.css";
import Button from "../Reusables/Button/Button";

const dummyBtns = [
  {
    id: 1,
    text: "Anfrage Posten",
    clickHandler: () => {
      console.log("Anfrage");
    },
    style: 1,
  },
  {
    id: 2,
    text: "Hausmeister Finden",
    clickHandler: () => {
      console.log("Hausmeister Finden");
    },
    style: 2,
  },
];

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="toggle-bar">
        <button className="toggle active">For artisans</button>
        <button className="toggle">For customers</button>
      </div>
      <div className={styles.heroTextWrapper}>
        <h1 className={styles.title}>
          Handwerker
          <br />
          leicht <span className="uniqueText">gemacht</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Alle Dienstleistungen, die Sie brauchen, an einem Ort.
        </p>
      </div>

      <div className={styles.heroImage}>

      </div>

      <div className={styles.bottomBtnsWrapper}>
        {dummyBtns.map((btn) => (
          <Button key={btn.id} text={btn.text} style={btn.style} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
