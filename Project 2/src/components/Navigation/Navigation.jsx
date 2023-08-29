import React from 'react'
import styles from "./Navigation.module.css";


const Navigation = () => {
  console.log(styles)
  return (


    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="\img\Frame 2 1 (1).png" alt="" />
      </div>
      <ul className='nav'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>


    </nav>







  )
}

export default Navigation
