import React from 'react'
import styles from 'styles/hero.module.scss'

function hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.hero_content}>
            <div className={styles.hero_text}>
                <h1>Mi nombre es Mario Alemán</h1>
                <p>Desarrollador Frontend con 1 año de experiencia en el mercado, puedo crear páginas web modernas apegado a tu éstilo.</p>
            </div>
            <div className={styles.hero_image}>
                <img src="public/images/blob_profile_picture.png" alt="foto_perfil" />
            </div>
        </div>
    </div>
  )
}

export default hero