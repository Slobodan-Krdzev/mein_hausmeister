import { FinderContactType } from "../../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./FinderCarousellStyles.module.css";
import "swiper/css";
import SectionTitle from "../Reusables/SectionTitle/SectionTitle";
import Button from "../Reusables/Button/Button";

const dummyContacts: FinderContactType[] = [
  {
    id: 1,
    tag: { label: "SANITÄRREPARATUREN", color: "#1461F0" },
    image: "finderCaroImg.png",
    name: "Marcus Shmidt",
    adress: "38 Abeasdfsdg Adigsd",
    location: "Ingolstadt",
  },
  {
    id: 2,
    tag: { label: "ELECTRICAL", color: "#F5CE47" },
    image: "finderCaroImg.png",
    name: "Johann Electrical",
    adress: "38 Abeasdfsdg Adigsd",
    location: "Sassen",
  },
  {
    id: 3,
    tag: { label: "Plumber", color: "#FC9554" },
    image: "finderCaroImg.png",
    name: "Plumber Blockovicht",
    adress: "38 Abeasdfsdg Adigsd",
    location: "Berlin",
  },
];

const FinderCarousell = () => {
  return (
    <section className={styles.caroSection}>
      <SectionTitle text="Top-bewertete Handwerker" />

      <Swiper
        className={styles.finderCarousell}
        spaceBetween={30}
        slidesPerView={1.3}
      >
        {dummyContacts.map((contact) => (
          <SwiperSlide key={contact.id} className={styles.slide}>
            <div
              className={styles.tag}
              style={{ backgroundColor: contact.tag.color }}
            >
              {contact.tag.label}
            </div>

            <div
              className={styles.cardImage}
              style={{
                backgroundImage: `url("/${contact.image}")`,
              }}
            />

            <div className={styles.cardBottomPart}>
              <p className={styles.name}>{contact.name}</p>
              <p className={styles.adress}>{contact.adress}</p>
              <div className={styles.location}>
                <img src="/pin.png" alt="Pin" className={styles.pin} />
                {contact.location}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.bottomBtnWrapper}>
        <Button text={"Hausmeister Finden"} style={0} width="100%" />
      </div>
    </section>
  );
};

export default FinderCarousell;
