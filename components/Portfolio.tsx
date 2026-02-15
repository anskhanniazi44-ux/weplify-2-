
import React, { useState } from 'react';
import { Project } from '../types';

const projects: Project[] = [
  { 
    id: 1, 
    title: 'The Daily Grind Cafe', 
    category: 'Local Business', 
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'https://wordpress.org' 
  },
  { 
    id: 2, 
    title: 'Sarah J. Portfolio', 
    category: 'Personal', 
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'https://elementor.com' 
  },
  { 
    id: 3, 
    title: 'Urban Kicks Store', 
    category: 'E-commerce', 
    image: 'https://images.unsplash.com/photo-1556742049-04ff4f6a0299?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'https://woocommerce.com' 
  },
  { 
    id: 4, 
    title: 'Elite Legal Associates', 
    category: 'Professional', 
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'https://generatepress.com' 
  },
  { 
    id: 5, 
    title: 'Zen Yoga Studio', 
    category: 'Health', 
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'https://wpastra.com' 
  },
  { 
    id: 6, 
    title: 'Pawfect Pet Grooming', 
    category: 'Local Business', 
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'https://hostinger.com' 
  },
  { 
    id: 7, 
    title: 'Fresh Harvest Market', 
    category: 'Local Business', 
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'https://wordpress.com' 
  },
  { 
    id: 8, 
    title: 'Bloom & Grow Florals', 
    category: 'E-commerce', 
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'https://example.com' 
  },
  { 
    id: 9, 
    title: 'Next Step Coaching', 
    category: 'Professional', 
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'https://example.org' 
  },
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-indigo-400 font-semibold tracking-wide uppercase mb-2 text-sm md:text-base">Portfolio</h2>
          <p className="text-3xl md:text-5xl font-bold mb-6">Real-World Projects</p>
          <p className="max-w-2xl mx-auto text-slate-400 mb-10 text-sm md:text-base">
            From local brick-and-mortar shops to niche personal brands, I help small businesses establish a powerful digital footprint.
          </p>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 scrollbar-hide overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-slate-800 block transform transition-all duration-500 hover:-translate-y-2 animate-in fade-in zoom-in-95 duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/40 transition-all duration-500 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-indigo-600 px-6 py-2 rounded-full font-bold text-sm shadow-xl">
                  View Project
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full pointer-events-none">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-indigo-400 text-xs font-bold mb-1 block uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">{project.title}</h3>
                  </div>
                  <div className="bg-white/10 p-2 rounded-full text-white/50 group-hover:text-white group-hover:bg-indigo-500 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
