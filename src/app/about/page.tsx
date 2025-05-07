
export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 md:px-0">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Sobre mí
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="space-y-6 text-gray-400 text-lg">
          <p>
            Hola, mi nombre es <span className="font-semibold text-blue-600">Jorge Steven Santana Salazar</span>, 
            soy estudiante de Ingeniería Mecatrónica con experiencia como técnico y líder de mantenimiento, 
            actualmente en transición hacia el desarrollo de software. En los últimos meses me he enfocado 
            intensamente en formarme como <span className="text-blue-600 font-medium">Desarrollador Full Stack
                </span>, dominando tecnologías como <span className="font-medium">NestJS </span>, 
                <span className="font-medium">Next.js</span>, <span className="font-medium">React </span>, 
                <span className="font-medium">TypeScript </span> ,entre otras y la integración entre frontend y backend, 
                aplicando principios de arquitectura modular y buenas prácticas.
          </p>
          <p>
            Me apasiona construir soluciones <span className="italic">escalables</span>, limpias y bien organizadas, con foco tanto en la experiencia del usuario como en la calidad del código. Además, tengo una fuerte mentalidad de <span className="underline">mejora continua</span>, que me ha llevado a complementar mis habilidades técnicas con conocimientos en Git colaborativo, testing y despliegue.
          </p>
          <p>
            Actualmente me encuentro postulando activamente a oportunidades donde pueda comenzar como desarrollador junior, ya sea en frontend, backend o full stack.
          </p>
        </div>
      </div>
    </section>
  )
}
