import styles from 'styles/Home.module.css'
import Layout from 'components/Layout/layout'
import Hero from 'components/hero/hero'

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <div className={styles.container}>
        This is a new content to my portfolio.
      </div>
    </Layout>
  )
}
