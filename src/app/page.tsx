import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import {
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si'

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-20 p-8">
      {/* Foto a la izquierda */}
      <div className="flex-shrink-0 ">
        <Image
          src="/perfil.jpg"
          alt="Foto de perfil"
          width={250}
          height={250}
          className="rounded-full shadow-xl object-cover"
        />
      </div>

      {/* Contenido a la derecha */}
      <div className="w-full md:max-w-xl text-center md:text-left px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ¡Hola! Soy <span className="text-blue-600">Steven Santana</span>
        </h1>
        <p className="text-xl text-gray-700 mb-6 break-words overflow-hidden">
        <span >
          Desarrollador Full Stack Junior | Estudiante de Ingeniería Mecatrónica | Front-End | Back-End</span>
        </p>

        {/* Carrusel de tecnologías */}
        <div className="px-4">
          <Marquee pauseOnHover speed={40} gradient={false} className="mb-8">
            <div className="flex gap-10 px-5 text-4xl text-blue-600">
              {[
                { icon: <SiNextdotjs />, label: 'Next.js' },
                { icon: <SiNestjs />, label: 'NestJS' },
                { icon: <SiTypescript />, label: 'TypeScript' },
                { icon: <SiReact />, label: 'React' },
                { icon: <SiTailwindcss />, label: 'TailwindCSS' },
                { icon: <SiHtml5 />, label: 'HTML5' },
                { icon: <SiCss3 />, label: 'CSS3' },
                { icon: <SiJavascript />, label: 'JavaScript' },
                { icon: <SiGit />, label: 'Git' },
                { icon: <SiGithub />, label: 'GitHub' },
                { icon: <SiVercel />, label: 'Vercel' },
                { icon: <SiPostgresql />, label: 'PostgreSQL' },
                { icon: <SiExpress />, label: 'Express.js' },
                { icon: <SiNodedotjs />, label: 'Node.js' },
                { icon: <SiMongodb />, label: 'MongoDB' },
              ].map((tech, index) => (
                <div key={index} 
                  className="text-4xl cursor-pointer hover:text-blue-400 transition"
                  title={tech.label}
                  >
                    {tech.icon}
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Botón centrado en móviles y alineado a la izquierda en escritorio */}
        <div className="flex justify-center md:justify-start">
          <Link
            href="/projects"
            className="bg-gray-600 text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition"
          >
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}
