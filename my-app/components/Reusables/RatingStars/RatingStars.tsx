import React from "react";
import styles from "./RatingStarsStyles.module.css";

interface StarRatingProps {
  rating: number;
  max?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, max = 5 }) => {
  const stars: any[] = [];

  for (let i = 1; i <= max; i++) {
    if (rating >= i) {
      stars.push(
        <span key={i} className={`${styles.star} ${styles.full}`}>
          ★
        </span>
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <span key={i} className={`${styles.star} ${styles.half}`}>
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className={`${styles.star} ${styles.empty}`}>
          ★
        </span>
      );
    }
  }

  return <div className={styles.starRating}>{stars}</div>;
};

export default StarRating;
