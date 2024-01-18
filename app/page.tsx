import styles from '@/styles/styles.module.css';
import Gif from '@/components/Gif';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className={styles.content}>
      {/* Contenido principal */}
      <h1 className={styles.h1Pri}>Bienvenidos!!</h1>
      <div className={styles.gifContainer}>
        <Gif />
      </div>


      {/* Footer */}
      <Footer />
    </div>
  )
}