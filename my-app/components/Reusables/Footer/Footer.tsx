import styles from "./FooterStyles.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>

        <div className={styles.logoText}>

            <img src="/logo.png" alt="Logo" />
            <p className={styles.clientLogo}>Mein Handwerker</p>
        </div>

        <div className={styles.linksGrid}>
            <p className={styles.link}>Lorem</p>
            <p className={styles.link}>Lorem</p>
            <p className={styles.link}>Lorem</p>
            <p className={styles.link}>Lorem</p>
            <p className={styles.link}>Lorem</p>
        </div>

        <hr />
        <p className={styles.botText}>Copyright © 2024 Mein Hausmaister</p>
        <p className={styles.botText}>All Rights Reserved </p>

    </footer>
  )
}

export default Footer
