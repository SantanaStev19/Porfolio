'use client'

import Image from 'next/image'
import Link from 'next/link'

type Project = {
  title: string
  description: string
  imgSrc: string
  githubUrl: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    title: 'Portafolio',
    description: 'Portafolio de un desarollador Full Stack.',
    imgSrc: '/portafolio.jpg',
    githubUrl: 'https://github.com/SantanaStev19/Porfolio',
    demoUrl: 'https://porfolio-jorgestevensantanasalazar-steven-santanas-projects.vercel.app/',
  },
  {
    title: 'Extreme Gym ',
    description: 'Aplicación completa de gimnasio con autenticación y dashboard.',
    imgSrc: '/ExtremeGym.jpg',
    githubUrl: 'https://github.com/ExtremeGym25/PF-Extreme-Gym',
    demoUrl: 'https://pf-extreme-gym.vercel.app/',
  },
  {
    title: 'E-commerce NestJS',
    description: 'API de ecommerce con NestJS, TypeORM y JWT.',
    imgSrc: '/ecommerceBack.jpg',
    githubUrl: 'https://github.com/SantanaStev19/E-Commerce_Back-end_PM4',
  },
  {
    title: 'Gestion de turnos',
    description: 'Pagina full Stack para gestion de turnos e inicio de sesion .',
    imgSrc: '/Gestion.jpg',
    githubUrl: 'https://github.com/SantanaStev19/Gestion_de_Turnos_PM3',
  },
  {
    title: 'Pagina de peliculas',
    description: 'Pagina donde se puede registrar una pelicula y se pueden ver sus datos.',
    imgSrc: '/streming.jpg',
    githubUrl: 'https://github.com/SantanaStev19/Cartelera_de_peliculas_PM2',
  },
  {
    title: 'Pagina inicial',
    description: 'Pagina de inicios a la programacion.',
    imgSrc: '/PM1.jpg',
    githubUrl: 'https://github.com/SantanaStev19/Pagina_Inicial_PM1',
  }
  // añade aquí más proyectos...
]

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Mis Proyectos
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="text-black bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={p.imgSrc}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-700 mb-4 flex-1">{p.description}</p>
              <div className="mt-auto flex gap-4">
                <Link
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  Repositorio
                </Link>
                {p.demoUrl && (
                  <Link
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
