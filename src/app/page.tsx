'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Dynamically set page title based on inferred company name
    document.title = "Vše Pro Stavby";

    // Generate a simple SVG favicon with a gradient and convert to Base64
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4F46E5" /><stop offset="100%" stop-color="#8B5CF6" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute('href', faviconUrl);

  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-indigo-600 tracking-tight">
            Vše Pro Stavby
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">O nás</a>
            <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Služby</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Kontakt</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-indigo-600 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg py-2`}>
          <a href="#about" onClick={toggleMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">O nás</a>
          <a href="#services" onClick={toggleMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Služby</a>
          <a href="#contact" onClick={toggleMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Kontakt</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Vše Pro Stavby
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 animate-fade-in-up animation-delay-300">
            Váš spolehlivý partner pro komplexní stavební řešení. Přinášíme kvalitu, profesionalitu a inovace.
          </p>
          <a href="#contact" className="inline-block bg-white text-indigo-700 hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 shadow-lg animate-fade-in-up animation-delay-600">
            Kontaktujte nás
          </a>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 rotate-12 scale-150">
            <path fill="currentColor" fill-opacity="1" d="M0,160L40,165.3C80,171,160,181,240,165.3C320,149,400,107,480,101.3C560,96,640,128,720,138.7C800,149,880,139,960,133.3C1040,128,1120,123,1200,106.7C1280,91,1360,64,1400,50.7L1440,37.3L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section - Using placeholder text from redesign context */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">O nás</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Vítejte u Vše Pro Stavby – vašeho partnera pro všechny stavební projekty. Jsme společnost s dlouholetou tradicí a bohatými zkušenostmi v oblasti stavebnictví.
              Naším cílem je poskytovat komplexní a vysoce kvalitní služby, které uspokojí i ty nejnáročnější požadavky našich klientů.
            </p>
            <p>
              Zakládáme si na preciznosti, spolehlivosti a individuálním přístupu. Každý projekt je pro nás jedinečný a věnujeme mu maximální pozornost od počáteční konzultace až po finální realizaci a předání díla.
              Naše týmy jsou složeny z certifikovaných odborníků a specialistů ve svém oboru, kteří neustále sledují nejnovější trendy a technologie v oblasti stavebnictví.
            </p>
            <p>
              S Vše Pro Stavby získáte nejen profesionální služby, ale i partnera, na kterého se můžete spolehnout. Těšíme se na spolupráci s vámi!
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Using placeholder text from redesign context */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Naše Služby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-indigo-600 mb-6 flex justify-center">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 10h.01M15 10h.01M9 14h.01M15 14h.01m-5 4h.01"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Kompletní stavební práce</h3>
              <p className="text-gray-600 text-center">
                Nabízíme široké spektrum stavebních prací od základů po střechu, včetně novostaveb, rekonstrukcí a přístaveb.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-indigo-600 mb-6 flex justify-center">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Rekonstrukce a renovace</h3>
              <p className="text-gray-600 text-center">
                Specializujeme se na moderní a efektivní renovace bytových i komerčních prostor s důrazem na detail.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-indigo-600 mb-6 flex justify-center">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-1.208-8.455-3.255M2 12c.731-2.479 2.197-4.717 4.103-6.527m16.897 6.527c-.731 2.479-2.197 4.717-4.103 6.527M12 4.5l2.455 2.455M12 4.5l-2.455 2.455"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Stavební dozor a poradenství</h3>
              <p className="text-gray-600 text-center">
                Poskytujeme odborný stavební dozor a komplexní poradenství pro bezproblémový průběh vašich projektů.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Using placeholder details from redesign context */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Kontaktujte nás</h2>
          <div className="max-w-xl mx-auto bg-gray-50 rounded-lg shadow-lg p-8 space-y-6 text-center">
            <div className="flex items-center justify-center space-x-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-4 4v7a2 2 0 01-2 2H9a2 2 0 01-2-2v-7"></path>
              </svg>
              <p className="text-lg text-gray-700">info@vseprostavby.cz</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.134l-1.498.88a1 1 0 00-.5.917V19a2 2 0 002 2h2c2.76 0 5-2.24 5-5V9.28a1 1 0 01.684-.948l4.493-1.498a1 1 0 011.134.502l.88 1.498a1 1 0 00.917-.5H21a2 2 0 002-2V5M3 5h6m-3 0V3m0 2h.01M3 5V3m0 2h.01M17 5h6m-3 0V3m0 2h.01"></path>
              </svg>
              <p className="text-lg text-gray-700">+420 777 123 456</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0L6.343 16.657A8 8 0 1117.657 16.657z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <p className="text-lg text-gray-700">Stavební 123, 110 00 Praha 1</p>
            </div>
            <p className="text-md text-gray-600 mt-6">
              Rádi zodpovíme vaše dotazy a připravíme nabídku šitou na míru vašim potřebám.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Vše Pro Stavby. Všechna práva vyhrazena.
          <div className="mt-2">
            Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">DigitalFusion</a>
          </div>
        </div>
      </footer>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fadeInFromBottom {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInFromBottom 0.8s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        /* Apply delays to children if needed, e.g., for service cards */
        .grid > div:nth-child(1) {
            animation-delay: 0.1s;
        }
        .grid > div:nth-child(2) {
            animation-delay: 0.2s;
        }
        .grid > div:nth-child(3) {
            animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}
