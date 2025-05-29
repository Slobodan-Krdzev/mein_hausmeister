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

      <img src="/item1.png" alt="Vector" className={styles.item1}/>
      <img src="/item2.png" alt="Vector" className={styles.item2}/>
      <img src="/item3.png" alt="Vector" className={styles.item3}/>
      <img src="/item4.png" alt="Vector" className={styles.item4}/>


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

      <div className={styles.heroImageDiv}>
        <img src="/heroImg2.png" alt="Hero2" className={styles.heroImg1} />
        <img src="/heroImg1.png" alt="Hero2" className={styles.heroImg2} />
        <img src="/heroImg3.png" alt="Hero2" className={styles.heroImg3} />

        <span className={styles.tagGreen}>Jetzt verfügbar</span>
        <span className={styles.blueTag}>reparieren</span>
        <span className={styles.yellowTag}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#FFD700"
          >
            <path
              d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 
           1.402 8.178L12 18.896l-7.336 3.855 
           1.402-8.178L.132 9.211l8.2-1.193z"
            />
          </svg>

          4.8
        </span>
      </div>

      <div className={styles.bottomBtnsWrapper}>
        {dummyBtns.map((btn) => (
          <Button key={btn.id} text={btn.text} style={btn.style} />
        ))}
      </div>

      <SearchBar />
    </section>
  );
};

export default Hero;
