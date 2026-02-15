
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
                src="https://image2url.com/r2/default/images/1771160459135-efa3355c-af5d-425a-96ad-12bd701f2360.png" 
                alt="Weplify Logo" 
                className="h-20 w-auto object-contain" 
              />
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Expert WordPress development for modern businesses. Providing scalable solutions and premium digital products since 2021.
            </p>
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
