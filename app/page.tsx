import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/styles.module.css"
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head> 
        <title>Mi pagina Web</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name ="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      </Head>

  {/* Navbar */}
    <nav className= {styles.navbar}>
    <a href="#" className={styles.navbarBrand}>Home</a>

    <ul className = {styles.navbarbar}>
      <li className={styles.navItem}>
      <a href="#" className={styles.navLink}>Ayuda</a>
      </li>
      <li className={styles.navItem}>
      <a href="#" className={styles.navLink}>Sesión</a>
      </li>
    </ul>
    </nav>

 {/* Contenido Principal */}

    <div className={styles.content}>
      <h1>Hola mundo</h1>
    </div>


    {/* Componente Footer */}
    <Footer/>

    </div>

  );
}

// COn letra mayuscula son componentes de next
{/* <div className="flex flex-col items-center">
<nav className="bg-gray-800 text-white p-4">
  <ul className="text-2xl flex space-x-4">
    <li className="my-2">
      <Link href="/">
        Home
      </Link>
    </li>
    <li className="my-2">
      <Link href="/pages/test">
        Test
      </Link>
    </li>
  </ul>
</nav>
</div>
      {/* <div className="p-8"> 
        <h2 className="text-2xl font-bold mb-4">Información del Alumno</h2>
        <p>
          <strong>Nombre:</strong> Jonatan Galan
        </p>
        <p>
          <strong>Grupo:</strong>  TI02SM-22
        </p>
        <p>
          <strong>Edad:</strong> 20 años
        </p>
        <p>
          <strong>Curso:</strong> Ingeniería en software multiplataforma
        </p>
      </div>
    </div> */}