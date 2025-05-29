import React, { useState } from "react";
import styles from "./HamburgerMenuStyles.module.css"
import Button from "../Button/Button";

const dummyCategories: string[] = ["Electrical", "Plumbing", "Carpenter", "Maintainer"]

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.hamburderIcon} onClick={() => setOpen(true)}>
        <img src="/bars.png" alt="Bars" />
      </div>

      {open && (
        <div className={styles.overlayMenu}>
        <img src="/logo.png" alt="Logo" className={styles.menuOpenLogo}/>
          <button className={styles.closeBtn} onClick={() => setOpen(false)}>×</button>
          
           

            <h2>Suchen</h2>
          <ul className={styles.list}>
            <li>Inserent</li>
            <li>Anmelden</li>
            <li>Registrieren</li>
          </ul>
          
          <form className={styles.searchForm}>
            <input type="text" placeholder="Suchen" />
            
            <select name="categorySelector" id="catSelector">
                {dummyCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
           
          </form>

           <div style={{width: '100%', margin: '4vh auto', display: 'flex', justifyContent: 'center'}}>
            <Button text={"Suchen"} style={2} width="100%"/>

            </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
