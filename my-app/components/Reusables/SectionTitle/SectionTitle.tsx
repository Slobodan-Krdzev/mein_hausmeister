import styles from "./SectionTitleStyles.module.css"

interface SectionTitleProps {
    text: string
}

const SectionTitle = ({text}: SectionTitleProps) => {
  return (
    <h2 className={styles.title}>
        {text}
    </h2>
  )
}

export default SectionTitle
