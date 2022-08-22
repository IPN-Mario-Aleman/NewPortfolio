import styles from 'styles/header.module.scss';

function header() {
  return (
    <header>
       <nav className={styles.navigator}>
          <div className='logo'>
              <a href='#'>
                  <img src='/images/logo.png' alt='logo' />
              </a>
          </div>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
       </nav>
    </header>
  )
}

export default header