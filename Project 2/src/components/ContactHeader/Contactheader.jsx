import React from 'react'
import styles from './Contactheader.module.css';


const Contactheader = () => {

    console.log(styles)
    return (

        <div className={`container ${styles.contact_section}`}>
            <h1>
                Contact Us
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas voluptate debitis molestiae et, quo earum asperiores repudiandae perferendis doloremque, temporibus nostrum sit recusandae quos id veniam, architecto deleniti deserunt.
                Dolorum nobis, voluptatem modi adipisci asperiores officia cupiditate odit praesentium facilis fuga ipsam tempore impedit quibusdam iure beatae sapiente laudantium eos nihil veritatis, amet corrupti quia. Libero praesentium omnis explicabo!
            </p>
        </div>
    )
}

export default Contactheader
