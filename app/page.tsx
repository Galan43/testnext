import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
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
      <div className="p-8">
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
    </div>
  );
}
