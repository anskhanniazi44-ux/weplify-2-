
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://image2url.com/r2/default/images/1771154912750-9df5a22f-625e-4871-9c6e-16ac583cd67c.png" 
                alt="Weplify Logo" 
                className="h-10 w-auto object-contain" 
              />
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Expert WordPress development for modern businesses. Providing scalable solutions and premium digital products since 2021.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-50 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#about" className="hover:text-indigo-600">About</a></li>
              <li><a href="#offers" className="hover:text-indigo-600">Premium Offers</a></li>
              <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-600">Portfolio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Official Partners</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#hosting" className="hover:text-indigo-600">Hostinger</a></li>
              <li><a href="#offers" className="hover:text-indigo-600">Elementor</a></li>
              <li><a href="#offers" className="hover:text-indigo-600">GeneratePress</a></li>
              <li><a href="#offers" className="hover:text-indigo-600">Astra</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© {currentYear} Weplify. Built by Anas.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
