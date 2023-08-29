import React from 'react'
import styles from './Contactform.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Contactform = () => {
  console.log(styles)
  return (
    <section className={styles.container}>
      <div className={styles.contactform}>


        <div className={styles.top_btn}>



          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"></MdMessage>}>    </Button>
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"></FaPhoneAlt>}>           </Button>
        </div>
        <Button isOutline={true}
          text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"></HiMail>}>           </Button>


        <div className={styles.from_controler}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>


        <div className={styles.from_controler}>
          <label htmlFor="email">Email</label>
          <input type="email" name="name" />
        </div>


        <div className={styles.from_controler}>
          <label htmlFor="text">Text</label>
          <textarea name="name" rows="10" />
        </div>
        <div
        style={
          {
            display:"flex",
            justifyContent:"end",
          }
        }>
          <Button text="SUBMIT" > </Button>
        </div>

      </div>



      <div className={styles.contact_img}>
        <img src=" \img\Service 24_7-pana 1 (2).svg" alt="" />
      </div>




    </section>


  )
}

export default Contactform
