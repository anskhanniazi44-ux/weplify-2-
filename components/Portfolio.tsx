
import React, { useState } from 'react';
import { Project } from '../types';

const projects: Project[] = [
  { 
    id: 1, 
    title: 'TechCrunch', 
    category: 'Publishing', 
    image: 'https://s0.wp.com/mshots/v1/https://techcrunch.com?w=800&h=600', 
    link: 'https://techcrunch.com' 
  },
  { 
    id: 2, 
    title: 'The Walt Disney Company', 
    category: 'Corporate', 
    image: 'https://s0.wp.com/mshots/v1/https://thewaltdisneycompany.com?w=800&h=600', 
    link: 'https://thewaltdisneycompany.com' 
  },
  { 
    id: 3, 
    title: 'Vogue', 
    category: 'Magazine', 
    image: 'https://s0.wp.com/mshots/v1/https://vogue.com?w=800&h=600', 
    link: 'https://vogue.com' 
  },
  { 
    id: 4, 
    title: 'Microsoft News', 
    category: 'Corporate', 
    image: 'https://s0.wp.com/mshots/v1/https://news.microsoft.com?w=800&h=600', 
    link: 'https://news.microsoft.com' 
  },
  { 
    id: 5, 
    title: 'Whitehouse.gov', 
    category: 'Government', 
    image: 'https://s0.wp.com/mshots/v1/https://whitehouse.gov?w=800&h=600', 
    link: 'https://whitehouse.gov' 
  },
  { 
    id: 6, 
    title: 'Toyota Brazil', 
    category: 'Enterprise', 
    image: 'https://s0.wp.com/mshots/v1/https://toyota.com.br?w=800&h=600', 
    link: 'https://toyota.com.br' 
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
          <p className="text-3xl md:text-5xl font-bold mb-6">Selected Works</p>
          <p className="max-w-2xl mx-auto text-slate-400 mb-10 text-sm md:text-base">
            Showcasing high-profile websites built and managed with WordPress. Click any card to visit the live site.
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-indigo-400 text-xs font-bold mb-1 block uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">{project.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
