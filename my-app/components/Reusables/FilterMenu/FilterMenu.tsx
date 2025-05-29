import React, { useState } from 'react';
import styles from './FilterSidebar.module.css';

const FilterMenu = () => {
  const [activeTab, setActiveTab] = useState('vorwahl');
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

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h3>Filter</h3>
        <a href="#">Alle zurücksetzen</a>
      </div>

      <div className={styles.section}>
        <label>Standort</label>
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
        <label>Art der Dienstleistung</label>
        <ul className={styles.checkboxList}>
          {services.map((service, index) => (
            <li key={index}>
              <label>
                <input type="checkbox" /> {service}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <label>Bewertungen</label>
      </div>

      <button className={styles.submitBtn}>Wenden Sie die Filter an</button>
    </div>
  );
};

export default  FilterMenu;