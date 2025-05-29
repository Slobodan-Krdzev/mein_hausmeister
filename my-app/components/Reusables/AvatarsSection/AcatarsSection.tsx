import React from "react";
import styles from "./AvatarsSectionStyles.module.css";


interface AvatarGroupProps {
  avatars: string[];
  countText: string;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars, countText }) => {
  return (
    <div className={styles.avatarGroup}>
      {avatars.map((src, index) => (
        <div key={index} className={styles.avatarWrapper}>
          <img src={src} alt={`Avatar ${index}`} />
        </div>
      ))}
      <div className={styles.counter}>
        *
        {countText}
      </div>
    </div>
  );
};

export default AvatarGroup;
