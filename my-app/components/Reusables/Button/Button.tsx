import React from 'react'
import styles from "./ButtonStyles.module.css"

interface ButtonProps {
    text: string,
    style: number,
    clickHandler?: () => void,
    width?: string
}

const Button = ({text, style, clickHandler, width ='50%'}: ButtonProps) => {


    const outlinedStyles = {
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid var(--brand-color)'
    }

    const filledStyles = {
        color: 'white',
        background: 'var(--custom-brand-bg)',
        border: '2px solid var(--brand-color)'
    }


  return (
    <button className={styles.btn} style={{width ,...style === 1 ? outlinedStyles : filledStyles }}>
        {text}
    </button>
  )
}

export default Button
