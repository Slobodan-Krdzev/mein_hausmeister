import "swiper/css";
import styles from "./HeroStyles.module.css";
import Button from "../Reusables/Button/Button";
import Toggle from "react-toggle";
import { useState } from "react";
import "react-toggle/style.css";
import SearchBar from "../Reusables/SearchBar/SearchBar";

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
  const [toggleValue, setToggleValue] = useState(false);

  const handleToggleChange = (e) => {
    setToggleValue(e.target.checked);
  };

  return (
    <section className={styles.hero}>
      <label
        className={styles.toggle}
        style={{ display: "flex", justifyContent: "center", gap: "2%" }}
      >
        <span
          style={{
            color: !toggleValue ? "var(--brand-color)" : "",
          }}
        >
          Fur Handwerker
        </span>
        <Toggle defaultChecked={toggleValue} onChange={handleToggleChange} />
        <span
          style={{
            color: toggleValue ? "var(--brand-color)" : "",
          }}
        >
          Fur Kunden
        </span>
      </label>
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

      <div className={styles.heroImage}></div>

      <div className={styles.bottomBtnsWrapper}>
        {dummyBtns.map((btn) => (
          <Button key={btn.id} text={btn.text} style={btn.style} />
        ))}
      </div>

      {/* <form className={styles.bottomForm}>
        <input type="text" className={styles.bottomInput} placeholder="Search"/>
      </form> */}

      <SearchBar />
    </section>
  );
};

export default Hero;
