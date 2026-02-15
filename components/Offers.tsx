
import React from 'react';
import { Offer } from '../types';

const offers: Offer[] = [
  {
    id: 'elementor',
    title: 'Elementor Pro',
    description: 'The world\'s #1 web creation platform. I provide specialized setup and license activation for custom builds.',
    icon: '🏗️',
    color: 'bg-pink-500',
    badge: 'Builder Choice',
    link: '#contact',
  },
  {
    id: 'hostinger',
    title: 'Hostinger Hosting',
    description: 'Experience blazing-fast speeds with LiteSpeed servers. Includes free domain and SSL with my setup package.',
    icon: '🚀',
    color: 'bg-purple-600',
    badge: 'Best Performance',
    link: '#contact',
  },
  {
    id: 'generatepress',
    title: 'GeneratePress Premium',
    description: 'The most lightweight and powerful theme for speed and stability. Perfect for SEO-focused sites.',
    icon: '⚡',
    color: 'bg-blue-500',
    badge: 'Lightweight',
    link: '#contact',
  },
  {
    id: 'astra',
    title: 'Astra Premium',
    description: 'Beautiful pre-built templates for every niche. Fast, customizable, and Elementor ready.',
    icon: '🌟',
    color: 'bg-indigo-500',
    badge: 'Versatile',
    link: '#contact',
  }
];

const Offers: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="offers" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase mb-2 text-sm md:text-base">Exclusive Deals</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Premium Digital Solutions
          </p>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-500 mx-auto">
            I've partnered with industry leaders to bring you the best tools for your next big project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-indigo-100 text-indigo-800">
                  {offer.badge}
                </span>
              </div>
              
              <div className={`w-14 h-14 ${offer.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-inherit/20 group-hover:scale-110 transition-transform`}>
                {offer.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{offer.title}</h3>
              <p className="text-slate-500 mb-8 flex-grow leading-relaxed text-sm md:text-base">
                {offer.description}
              </p>
              
              <button
                onClick={handleScrollToContact}
                className="w-full py-3 px-4 bg-slate-900 text-white text-center rounded-xl font-semibold hover:bg-slate-800 transition-colors"
              >
                Get This Product
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Bundle?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get a professional setup featuring all these premium tools at a fraction of the cost. Let's build your dream site together.
          </p>
          <button 
            onClick={handleScrollToContact}
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg"
          >
            Get My Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
