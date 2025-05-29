import { SecondSectionPostType } from "../../types/types";
import SectionTitle from "../Reusables/SectionTitle/SectionTitle";
import styles from "./SecondSectionStyles.module.css";

const dummyPosts: SecondSectionPostType[] = [
  {
    id: 1,
    text: "Kalenderbuchung und einfache Kommunikation.",
  },
  {
    id: 2,
    text: "Zertifizierte Profis für höchste Qualität.",
  },
  {
    id: 3,
    text: "Verfügbare Handwerker für dringende Reparaturen.",
  },
];

const SecondSection = () => {
  return (
    <section className={styles.secondSection}>
      <div className={styles.topTitleWrapper}>
        <SectionTitle text="Warum Menschen uns mögen" />
        <img src="/brush.png" alt="Brush" className={styles.brush} />
      </div>

      <ul className={styles.list}>
        {dummyPosts.map((post) => (
          <li key={post.id} className={styles.listItem}>
            {" "}
            <img
              src="/check.png"
              alt="Check Mark"
              className={styles.checkMark}
            />{" "}
            {post.text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SecondSection;
