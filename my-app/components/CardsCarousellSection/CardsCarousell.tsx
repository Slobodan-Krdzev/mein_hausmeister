import { CardCarousellServiceType } from "../../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./CardsCarousellStyles.module.css";

const services: CardCarousellServiceType[] = [
  { id: 1, label: "Home Repair", icon: "/homeRepair.png" },
  { id: 2, label: "Windows", icon: "/windows.png" },
  { id: 3, label: "Painter", icon: "/painter.png" },
  { id: 4, label: "Electrician", icon: "electrician.png" },
  { id: 5, label: "A / C", icon: "ac.png" },
  { id: 6, label: "Cleaning", icon: "/cleaning.png" },
  { id: 7, label: "Assembly", icon: "/assembly.png" },
  { id: 8, label: "Carpenter", icon: "/carpenter.png" },
  { id: 9, label: "Construction", icon: "/construction.png" },
];

const CardsCarousell = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className={styles.swiper}
      >
        {/* Group into 3x3 grid per slide */}
        {[0, 1, 2].map((i) => (
          <SwiperSlide key={i}>
            <div className={styles.grid}>
              {services.map((service, index) => (
                <div className={styles.card} key={index}>
                  <img src={service.icon} alt={service.label} className={styles.icon} />
                  <div className={styles.label}>{service.label}</div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardsCarousell;
