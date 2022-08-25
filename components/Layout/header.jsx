import React, { useState, useEffect } from 'react';
import styles from '/styles/header.module.scss'

function header() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.onscroll = function() {
      var y = window.scrollY;
      if (y > 0 ){
        setNav(true)
      }
      if (y === 0){
        setNav(false)
      }
    };
  }, []);

  return (
    <header className={nav === false ? styles.header : styles.header + ' ' + styles.header_active}>
       <nav className={styles.navigator}>
          <div className='logo'>
              <a href='#'>
                  <img src='/images/logo.png' alt='logo' />
              </a>
          </div>
          <div className={styles.nav_wrapper}>
            <ul className={styles.nav_links}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
          </div>
       </nav>
    </header>
  )
}

export default header