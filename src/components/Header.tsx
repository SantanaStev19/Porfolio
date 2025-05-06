'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' 

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre mí' },
  { href: '/projects', label: 'Proyectos' },
]

function NavLink({ href, label, isActive, onClick }: {
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`block px-3 py-2 rounded transition hover:bg-gray-700 ${
        isActive ? 'font-bold text-cyan-700' : 'text-white'
      }`}
    >
      {label}
    </Link>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="bg-gray-800 text-white shadow-md m-5 rounded-lg">
        {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-4xl font-bold">JS</div>
        {/* Botón hamburguesa en móviles */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
            />
          ))}
        </nav>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col px-4 pb-4 gap-2 animate-slide-down">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
              onClick={closeMenu}
            />
          ))}
        </nav>
      )}
    </header>
  )
}
