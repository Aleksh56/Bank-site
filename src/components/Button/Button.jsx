import React from 'react'
import styles from '../../style.js'

const Button = ({title, yPadding, xPadding, bgColor, textColor, margin}) => {
  return (
    <button className={`bg-${bgColor} border-pink-600 py-${yPadding} px-${xPadding} text-${textColor} ${styles.button} ${margin} transition-all hover:scale-105`}>
        {title}
    </button>
  )
}

export default Button