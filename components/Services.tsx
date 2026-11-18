
import React from 'react';
import { Service } from '../types.ts';

const services: Service[] = [
  {
    title: 'Website Design & Development',
    description: 'Modern, responsive custom websites built from scratch with clean architecture, smooth interactions, and mobile-first layouts.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'WordPress Design & Development',
    description: 'High-performing WordPress websites crafted with Elementor, GeneratePress, and Astra tailored to your business goals.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Landing Pages & Website Redesign',
    description: 'Conversion-focused landing pages and full website redesigns that modernize your brand, layout, and user experience.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Speed, Hosting & Domain Setup',
    description: 'Complete hosting deployment, domain and DNS setup, SSL configuration, and Core Web Vitals speed optimization.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Services</h2>
            <p className="text-slate-600">Comprehensive web and WordPress development services designed to help you succeed in the digital landscape.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors">
              <div className="flex-shrink-0 text-sky-600">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
