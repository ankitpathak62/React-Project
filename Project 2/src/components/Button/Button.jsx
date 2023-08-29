import React from 'react'
import {MdMessage} from 'react-icons/md'
import styles from './Button.module.css'



const Button = ({ isOutline,icon,text }) => {
    console.log(styles)
    // console.log(props)

  return (
    <div>


      <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
       

       {icon}
       {text}
      </button>


    </div>
  )
}

export default Button
