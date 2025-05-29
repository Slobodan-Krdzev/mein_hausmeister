import styles from "./NavbarStyles.module.css"
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <img src='/logo.png' alt="Logo" />
        <HamburgerMenu />
    </header>
  )
}

export default Navbar
