import React from "react";
import styles from "./SearchBarStyles.module.css";

const InputWithIcons = () => {
  return (
    <form className={styles.inputWrapper} 
    onFocus={() => console.log('On Focus')}>
        
      <div className={styles.iconLeft}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          fill="#939393"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.29 5.59 12.7 3 9.5 3S3.71 5.59 3.71 8.39c0 2.8 2.59 5.39 5.79 5.39 1.61 0 3.07-.59 4.2-1.57l.27.28v.79l4.25 4.25 1.49-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </div>

      <input
        type="text"
        placeholder="Search..."
        className={styles.input}
      />


      <button className={styles.iconRight} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          fill="#939393"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M10 18h4v-2h-4v2zm-7-8v2h18v-2H3zm3-6v2h12V4H6z" />
        </svg>
      </button>
    </form>
  );
};

export default InputWithIcons;
