
import React from 'react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Sites Launched', value: '120+' },
    { label: 'Happy Clients', value: '85+' },
    { label: 'Optimization Rate', value: '98%' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-indigo-50 rounded-full -z-10"></div>
            <img
              src="https://picsum.photos/id/1/600/600"
              alt="Workspace"
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Empowering Your Digital Presence with Specialized Expertise
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              With over 3 years in the WordPress ecosystem, I've mastered the art of building websites that aren't just visually stunning, but are search-engine optimized and conversion-focused. 
            </p>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              My journey started with simple blog setups and has evolved into complex multi-vendor marketplaces and high-traffic corporate portals. I prioritize clean code, scalability, and exceptional user experience.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
