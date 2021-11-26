import React from 'react'
import { Link } from 'react-router-dom'
import user from './../../Assets/user.png'
import home from './../../Assets/home.png'
import contest from './../../Assets/coupe.png'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/profil" className={styles.footerItem}><img className={styles.footerLogo} src={user}/></Link>
      <Link to="/first-component" className={styles.footerItem}><img className={styles.footerLogo} src={home}/></Link>
      <Link to="/styling-components" className={styles.footerItem}><img className={styles.footerLogo} src={contest}/></Link>
    </div>
  )
}

export default Footer
