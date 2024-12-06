import React from 'react';
import { Menu, Phone, MapPin, Clock, Instagram } from 'lucide-react';
import logo from '../assets/images/logo.png';

const LandingPage = () => {
  // Função para formatar mensagem do WhatsApp
  const getWhatsAppLink = () => {
    const message = encodeURIComponent('Olá! Gostaria de fazer um pedido.');
    return `https://wa.me/12997222359?text=${message}`;
  };
  // Array de produtos para facilitar a manutenção
  const produtos = [
    {
      categoria: "Cervejas",
      descricao: "Nacionais e importadas das melhores marcas",
      imagem: "/api/placeholder/400/300"
    },
    {
      categoria: "Destilados",
      descricao: "Os melhores whiskies, vodkas, gins e mais",
      imagem: "/api/placeholder/400/300"
    },
    {
      categoria: "Vinhos",
      descricao: "Seleção especial de vinhos nacionais e importados",
      imagem: "/api/placeholder/400/300"
    },
    {
      categoria: "Bebidas não alcoólicas",
      descricao: "Refrigerantes, sucos, energéticos e águas",
      imagem: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-[#8B0000] shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Pancho Villa Logo" className="h-12 mr-3" />
            <span className="text-2xl font-bold text-white">Pancho Villa</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#produtos" className="text-white hover:text-green-400">Produtos</a>
            <a href="#sobre" className="text-white hover:text-green-400">Sobre</a>
            <a href="#contato" className="text-white hover:text-green-400">Contato</a>
          </div>
          <button className="md:hidden text-white">
            <Menu />
          </button>
        </div>
      </nav>

      {/* Hero Section com Background */}
      <div className="bg-[#8B0000] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <img src={logo} alt="Pancho Villa Logo" className="mx-auto h-32 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empório de Bebidas Pancho Villa
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            A melhor seleção de bebidas da região
          </p>
        </div>
      </div>

      {/* Produtos em Destaque */}
      <section id="produtos" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B0000]">Nossos Produtos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {produtos.map((produto, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-[#8B0000] hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={produto.imagem}
                  alt={produto.categoria}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-[#8B0000]">{produto.categoria}</h3>
                  <p className="text-gray-600">{produto.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destaques ou Promoções */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B0000]">Destaques da Semana</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#8B0000]">
              <h3 className="text-xl font-bold mb-4 text-[#8B0000]">Promoção Especial</h3>
              <p className="text-gray-600">Cervejas selecionadas com até 20% de desconto!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#8B0000]">
              <h3 className="text-xl font-bold mb-4 text-[#8B0000]">Novidades</h3>
              <p className="text-gray-600">Confira nossa nova seleção de vinhos importados</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#8B0000]">
              <h3 className="text-xl font-bold mb-4 text-[#8B0000]">Clube Pancho</h3>
              <p className="text-gray-600">Cadastre-se e receba ofertas exclusivas!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section id="contato" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8B0000]">Entre em Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-[#8B0000] mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <a href="https://wa.me/12997222359" 
                 className="text-gray-600 hover:text-[#8B0000] transition-colors">
                (12) 99722-2359
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Instagram className="w-12 h-12 text-[#8B0000] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <a href="https://instagram.com/adegapanchovilla" 
                 className="text-gray-600 hover:text-[#8B0000] transition-colors">
                @adegapanchovilla
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-[#8B0000] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Horário</h3>
              <p className="text-gray-600">Seg-Dom: 9h às 23h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B0000] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Pancho Villa Empório de Bebidas. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2"
      >
        <svg
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="hidden md:inline">Fale Conosco</span>
      </a>
    </div>
  );
};

export default LandingPage;