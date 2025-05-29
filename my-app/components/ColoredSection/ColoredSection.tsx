import { ColoredSectionCardsItemType } from "../../types/types";
import StarRating from "../Reusables/RatingStars/RatingStars";
import SectionTitle from "../Reusables/SectionTitle/SectionTitle";
import styles from "./ColoredSectionStyles.module.css";

const dummyCards: ColoredSectionCardsItemType[] = [
  {
    id: 1,
    name: "John Carter",
    location: "Dresden",
    image: "/person5.png",
    rating: 5,
    desc: "Die App hat es einfach gemacht, einen Tischler zu finden. Er hat meinen Kleiderschrank und meinen Badezimmer-Schrank gebaut, und sie sehen fantastisch aus!",
    galery: ["/frame1.png", "/frame2.png", "/frame2.png", "/frame3.png"],
  },
  {
    id: 2,
    name: "Lena Muller",
    location: "Berlin",
    image: "/person6.png",
    rating: 4,
    desc: "Die App hat es einfach gemacht, einen Tischler zu finden. Er hat meinen Kleiderschrank und meinen Badezimmer-Schrank gebaut, und sie sehen fantastisch aus!",
    galery: ["/frame1.png"],
  },
  {
    id: 3,
    name: "Max Schmidt",
    location: "Dresden",
    image: "/person1.png",
    rating: 5,
    desc: "Die App hat es einfach gemacht, einen Tischler zu finden. Er hat meinen Kleiderschrank und meinen Badezimmer-Schrank gebaut, und sie sehen fantastisch aus!",
    galery: ["/frame1.png", "/frame2.png", "/frame2.png", "/frame3.png"],
  },
];

const ColoredSection = () => {
  return (
    <section className={styles.coloredSection}>
      <div className={styles.titleArtWrapper}>
        <img src="/ticks.png" alt="Ticks" className={styles.ticks} />
        <div className={styles.titleWrapper}>
          <SectionTitle text="Echte Erfahrungen, echte Ergebnisse" />
        </div>
      </div>

      <h3>
        Erfahren Sie, wie unsere App Reparaturen und Verbesserungen für Menschen
        wie Sie erleichtert.
      </h3>

      <div className={styles.testemonialsHolder}>
        {dummyCards.map((person) => (
          <div key={person.id} className={styles.singleTestemonial}>
            <div className={styles.imageNameWrap}>
              <img
                src={person.image}
                alt={person.name}
                className={styles.personImage}
              />
              <div className={styles.nameLocationWrap}>
                <p className={styles.name}>{person.name}</p>
                <p className={styles.location}>{person.location}</p>
              </div>
            </div>

            <StarRating rating={person.rating} />

            <p className={styles.desc}>{person.desc}</p>

            <div className={styles.galery}>
              {person.galery.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={image}
                  className={styles.galeryImg}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColoredSection;
