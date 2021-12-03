import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'
import trophee from './../../Assets/trophee.png'
import home from './../../Assets/home.png'
import profil from './../../Assets/profil.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/contest" className={styles.footerItem}>
        <div className={styles.footerItems}>
          <img className={styles.footerLogo} src={trophee} alt="logo concours"/>
          <p className={styles.footerItem}>Concours</p>
        </div>
      </Link>
      <Link to="/pouit" className={styles.footerItem}>
        <div className={styles.footerItems}>
          <img className={styles.footerLogo} src={home} alt="logo home"/>
          <p className={styles.footerItem}>Feed</p>
        </div>
      </Link>
      <Link to="/profil" className={styles.footerItem}>
        <div className={styles.footerItems}>
          <img className={styles.footerLogo} src={profil} alt="logo profil"/>
          <p className={styles.footerItem}>Compte</p>
        </div>  
      </Link>
    </div>
  )
}

export default Footer
