import React, { useEffect, useState } from 'react';
import styles from './SideMenuStyles.module.css';
import { useMenu } from '../../../context/FilterMenuContext/FilterMenuContext';
import Button from '../Button/Button';

const services = [
    'Elektroinstallation',
    'Sanitärinstallation',
    'Maler- und Lackierarbeiten',
    'Tischlerei/Schreinerei',
    'Dachdeckerarbeiten',
    'Heizungsinstallation',
    'Fliesenarbeiten',
    'Maurerarbeiten',
    'Garten- und Landschaftsbau',
    'Schlosserarbeiten'
  ];

const FilterSidebar = () => {
  const [activeTab, setActiveTab] = useState('vorwahl');
  const {toggleMenu} = useMenu()
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.sidebar}>
        <div style={{display: 'flex', justifyContent: 'right'}}>
        <button onClick={() => toggleMenu()} className={styles.menuClose}>x</button>

        </div>

      <div className={styles.header}>
        <h3>Filter</h3>
        <a href="#">Alle zurücksetzen</a>
      </div>

      <div className={styles.section}>
        <p>Standort</p>
        <div className={styles.tabs}>
          <button
            className={activeTab === 'vorwahl' ? styles.activeTab : ''}
            onClick={() => setActiveTab('vorwahl')}
          >
            Vorwahl
          </button>
          <button
            className={activeTab === 'entfernung' ? styles.activeTab : ''}
            onClick={() => setActiveTab('entfernung')}
          >
            Entfernung
          </button>
        </div>
        <input className={styles.input} type="text" placeholder="PLZ" />
      </div>

      <div className={styles.section}>
        <p>Art der Dienstleistung</p>
        <ul className={styles.checkboxList}>
          {services.map((service, index) => (
            <li key={index}>
              <label className={styles.label}>
                <input type="checkbox" className={styles.checkbox}/> {service}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <p>Bewertungen</p>
      </div>

        <div className={styles.bottomBtnWrapper}>
        <Button text={"Hausmeister Finden"} style={0} width="100%" />
      </div>
      </div>
  );
};

export default FilterSidebar;