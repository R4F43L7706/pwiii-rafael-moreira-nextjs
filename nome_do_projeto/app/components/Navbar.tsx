import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Meu Portfólio</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#sobre" className="hover:text-blue-600">Sobre</a></li>
          <li><a href="#projetos" className="hover:text-blue-600">Projetos</a></li>
          <li><a href="#contato" className="hover:text-blue-600">Contato</a></li>
        </ul>
      </div>
    </nav>
  )
}

