import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'
import trophee from './../../Assets/trophee.png'
import home from './../../Assets/homepage.png'
import profil from './../../Assets/profil.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItems}>
        <Link to="/contest" className={styles.footerItem}><img className={styles.footerLogo} src={trophee} alt="logo concours"/></Link>
        <Link to="/contest" className={styles.footerItem}>Concours</Link>
      </div>
      <div className={styles.footerItems}>
        <Link to="/pouit" className={styles.footerItem}><img className={styles.footerLogo} src={home} alt="logo home"/></Link>
        <Link to="/pouit" className={styles.footerItem}>Feed</Link>
      </div>
      <div className={styles.footerItems}>
        <Link to="/profil" className={styles.footerItem}><img className={styles.footerLogo} src={profil} alt="logo profil"/></Link>
        <Link to="/profil" className={styles.footerItem}>Compte</Link>
      </div>
      
    </div>
  )
}

export default Footer
