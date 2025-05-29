import React from "react";
import styles from "./CircleCardCarousellStyles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "../Reusables/SectionTitle/SectionTitle";
import Button from "../Reusables/Button/Button";
import { DummyPersonsItemType } from "../../types/types";

const dummyPersons: DummyPersonsItemType[] = [
  {
    id: 1,
    name: "Peter Schmidt",
    desc: "Elektriker",
    image: "/person1.png",
  },
  {
    id: 2,
    name: "Hans Muller",
    desc: "Schlosser",
    image: "/person2.png",
  },
  {
    id: 3,
    name: "Jan Uberhansen",
    desc: "Painter",
    image: "/person1.png",
  },
  {
    id: 4,
    name: "Peter Schmidt",
    desc: "Elektriker",
    image: "/person1.png",
  },
  {
    id: 5,
    name: "Hans Muller",
    desc: "Schlosser",
    image: "/person2.png",
  },
  {
    id: 6,
    name: "Jan Uberhansen",
    desc: "Painter",
    image: "/person1.png",
  },
];

const CircleCardCarousell = () => {
  return (
    <section className={styles.caroSection}>
      <SectionTitle text="Top-bewertete Handwerker" />

      <Swiper
        className={styles.personsCarousell}
        spaceBetween={0}
        slidesPerView={2.3}
      >
        {dummyPersons.map((contact) => (
          <SwiperSlide key={contact.id} className={styles.slide}>
            <img
              src={contact.image}
              alt={contact.name}
              className={styles.image}
            />

            <div className={styles.nameDesWrapper}>
              <div className={styles.nameIconWrapper}>
                <p className={styles.name}>{contact.name}</p>
                <img
                  src="/verified.png"
                  alt="Verified Icon"
                  className={styles.verifiedIcon}
                />
              </div>
            </div>
            <p className={styles.desc}>{contact.desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.bottomBtnWrapper}>
        <Button text={"Hausmeister Finden"} style={0} width="100%" />
      </div>
    </section>
  );
};

export default CircleCardCarousell;
