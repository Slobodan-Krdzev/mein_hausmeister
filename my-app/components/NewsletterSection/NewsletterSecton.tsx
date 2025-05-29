import React from "react";
import SectionTitle from "../Reusables/SectionTitle/SectionTitle";
import styles from "./NewsletterStyles.module.css";
import Button from "../Reusables/Button/Button";
import AvatarGroup from "../Reusables/AvatarsSection/AcatarsSection";

const dummyAvatars: string[] = ['/person1.png', '/person2.png', '/person5.png', '/person6.png', '/person1.png']

const NewsletterSecton = () => {
  return (
    <section className={styles.newsletterSection}>
      <SectionTitle text="Finde und buche zuverlässige Handwerker" />

      <AvatarGroup avatars={dummyAvatars} countText={"10.2k"} />

      <p className={styles.desc}>
        Schließe dich über 10.000 zufriedenen Haushalten und Unternehmen an, die
        uns vertrauen, um erfahrene Profis zu finden. Chatten, planen und
        erledigen – alles an einem Ort.
      </p>
      <div className={styles.bottomBtnWrapper}>
        <Button text={"Jetzt anmelden"} style={0} width="100%" />
      </div>
    </section>
  );
};

export default NewsletterSecton;
