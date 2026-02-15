
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      const offset = scrolled ? 80 : 120; // Dynamic offset based on header size
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Offers', href: '#offers' },
    { name: 'Hosting', href: '#hosting' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-2 md:py-3' : 'bg-transparent py-4 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <img 
                src="https://image2url.com/r2/default/images/1771160459135-efa3355c-af5d-425a-96ad-12bd701f2360.png" 
                alt="Weplify Logo" 
                // Responsive logo height: 
                // Mobile: h-12 (scrolled) / h-16 (top)
                // Desktop: h-20 (scrolled) / h-32 (top)
                className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 
                  ${scrolled 
                    ? 'h-12 md:h-20' 
                    : 'h-16 md:h-32'
                  }`} 
                style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    scrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-600/30"
              >
                Start Your Project
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute w-full left-0 py-4 px-2 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block px-4 py-3 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg text-base font-semibold"
            >
              {link.name}
            </a>
          ))}
          <div className="px-4 py-3">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="block w-full text-center bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
            >
              Start Your Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
