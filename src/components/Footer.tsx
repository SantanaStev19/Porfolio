import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contáctame</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-base mb-4">
        <a
          href="https://github.com/SantanaStev19"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <FaGithub /> <span>SantanaStev19</span>
        </a>
        <a
          href="https://www.linkedin.com/in/jorgestevensantanasalazar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <FaLinkedin /> <span>jorgestevensantanasalazar</span>
        </a>
        <a
          href="mailto:steven.santana.s19@gmail.com"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <FaEnvelope /> <span>steven.santana.s19@gmail.com</span>
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Jorge Steven Santana Salazar. Todos los derechos reservados.
      </p>
    </footer>
  )
}

