import Image from 'next/image'
import Link from 'next/link'
import { SiNextdotjs, SiNestjs, SiTypescript, SiReact, SiTailwindcss } from 'react-icons/si'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      <Image
        src="/perfil.jpg"
        alt="Foto de perfil"
        width={150}
        height={150}
        className="rounded-full mb-6 shadow-lg"
      />
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        ¡Hola! Soy <span className="text-blue-600">[Tu Nombre]</span>
      </h1>
      <p className="text-xl text-gray-700 mb-6">
        <span className="typewriter">Desarrollador Full Stack Junior</span>
      </p>

      <div className="flex gap-6 justify-center text-3xl text-blue-600 mb-8">
        <SiNextdotjs title="Next.js" />
        <SiNestjs title="NestJS" />
        <SiTypescript title="TypeScript" />
        <SiReact title="React" />
        <SiTailwindcss title="TailwindCSS" />
      </div>
   
      <Link
        href="/projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Ver proyectos
      </Link>
    </section>
  )
}
