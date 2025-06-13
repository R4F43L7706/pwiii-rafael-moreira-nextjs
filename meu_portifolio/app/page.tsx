import Head from 'next/head'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Sobre */}
        <section id="sobre" className="mb-16">
          <h1 className="text-4xl font-bold text-gray-800">Olá! Eu sou Rafael Alves</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Meu portifólio. Aqui eu te mostro alguns dos meus projetos. Dev em formação na ETEC Prof. Camargo Aranha
          </p>
        </section>

        {/* Projetos */}
        <section id="projetos" className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">OngManager</h3>
              <p className="text-gray-600">Plataforma de Gestão focada em ONG'S, programada em Node.JS, HTML5 e CSS</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Site CROCS Relâmpago Mcqueen</h3>
              <p className="text-gray-600">Site simples para anunciar a venda da edição especial de Crocs do Relâmpago McQueen. Sem Backend, feito apenas com HTML5 e CSS</p>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contato</h2>
          <p className="text-gray-600 text-lg">
            Você pode me encontrar no email: <a className="text-blue-600 underline" href="mailto:seuemail@example.com">rafaalves.rham@gmail.com</a>
          </p>
        </section>
      </main>

      <footer className="text-center text-gray-500 text-sm py-6">
        © {new Date().getFullYear()} Rafael Alves Moreira. Todos os direitos reservados.
      </footer>
    </>
  )
}