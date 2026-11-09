
import React, { useState, useEffect } from 'react';
import { Project, OtherProject, SampleProject } from '../types.ts';

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Center for Yoga LA', 
    category: 'Health & Wellness', 
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'https://centerforyogala.com/' 
  },
  { 
    id: 2, 
    title: 'Newport Beach Car Fest', 
    category: 'Events & Automotive', 
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'https://newportbeachcarfest.org/' 
  },
  { 
    id: 3, 
    title: 'Pillz Online Pharmacy', 
    category: 'E-commerce', 
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'https://pillzonline.com/' 
  },
  { 
    id: 4, 
    title: 'IBC Pakistan Business', 
    category: 'Corporate', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'http://ibc.net.pk/' 
  },
  { 
    id: 5, 
    title: 'EasyGoLive Tech', 
    category: 'Technology', 
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=600', 
    link: 'https://easygolive.com/' 
  },
  { 
    id: 6, 
    title: 'The Daily Grind Cafe', 
    category: 'Local Business', 
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800&h=600', 
    link: '#' 
  },
];

// Structural placeholders for 'Others' (Long website screenshots / PDF files)
const otherProjects: OtherProject[] = [
  {
    id: 'other-1',
    title: 'Nova Cloud Platform — Full Architecture',
    category: 'SaaS & Web App',
    description: 'Comprehensive full-length homepage screenshot with interactive product tour, feature breakdown, and pricing tiers.',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=1400',
    longScreenshotImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=3200',
  },
  {
    id: 'other-2',
    title: 'Aura Luxury Real Estate — Full Showcase',
    category: 'Real Estate & Living',
    description: 'Full-length architectural landing page with property walkthroughs, floorplan grids, and VIP inquiry module.',
    previewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=1400',
    longScreenshotImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200&h=3200',
  },
  {
    id: 'other-3',
    title: 'Kinetix Athletic Fitness — Complete Funnel',
    category: 'Health & Fitness',
    description: 'End-to-end conversion funnel page featuring trainer profiles, class timetables, and integrated checkout.',
    previewImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800&h=1400',
    longScreenshotImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200&h=3200',
  },
  {
    id: 'other-4',
    title: 'Vanguard Global Consulting — Corporate Story',
    category: 'Corporate & Finance',
    description: 'Full-length annual corporate presentation page with data visualization, methodology, and leadership matrix.',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=1400',
    longScreenshotImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=3200',
  },
];

// Structural placeholders for 'Samples' (Websites with multiple images, 4 images each)
const sampleProjects: SampleProject[] = [
  {
    id: 'sample-1',
    title: 'Prestige Luxury Real Estate',
    category: 'Real Estate & Architecture',
    description: 'High-end real estate web portal featuring luxury property search, curated featured listings, multi-filter discovery, and consultation booking.',
    images: [
      { 
        url: '/assets/aistudio/prestige-real-estate1_f05fb446.jpeg', 
        caption: '1. Homepage Hero & Exclusive Property Search' 
      },
      { 
        url: '/assets/aistudio/prestige-real-estate2_b4d5bc1a.jpeg', 
        caption: '2. Featured Handpicked Luxury Properties' 
      },
      { 
        url: '/assets/aistudio/prestige-real-estate3_5d1180d2.png', 
        caption: '3. Property Search Filters & Grid Listings' 
      },
      { 
        url: '/assets/aistudio/prestige-real-estate4_95fbb298.png', 
        caption: '4. Contact, Office Details & Consultation Form' 
      }
    ]
  },
  {
    id: 'sample-2',
    title: 'Elena Rostova — Design & AI Portfolio',
    category: 'Portfolio & Creative',
    description: 'Modern minimalist product designer portfolio featuring interactive navigation cards, AI research case studies, and contact gateway.',
    images: [
      { 
        url: '/assets/aistudio/modern-portfolio1_83a92c05.jpeg', 
        caption: '1. Hero & Profile Introduction — Lead Product Designer' 
      },
      { 
        url: '/assets/aistudio/modern-portfolio2_3e3ea17c.jpeg', 
        caption: '2. Interactive Card Navigation — About, Work & Research' 
      },
      { 
        url: '/assets/aistudio/modern-portfolio3_a22c850e.png', 
        caption: '3. About & Case Studies — AI Design System & Fintech' 
      },
      { 
        url: '/assets/aistudio/modern-portfolio4_14b2f83e.jpeg', 
        caption: '4. Contact Gateway & Consultation Inquiry Form' 
      }
    ]
  },
  {
    id: 'sample-3',
    title: 'Electric EV — Next-Gen Automotive Platform',
    category: 'Automotive & Tech',
    description: 'Modern electric vehicle showcase platform featuring interactive vehicle specifications, powertrain performance, connected driving ecosystem, and instant test drive booking.',
    images: [
      { 
        url: '/assets/aistudio/electric-ev-website1_19bcf6aa.jpeg', 
        caption: '1. Experience the Future — Test Drive Hero' 
      },
      { 
        url: '/assets/aistudio/electric-ev-website2_e9f37d5d.jpeg', 
        caption: '2. All-Electric Performance & Adaptive Technology' 
      },
      { 
        url: '/assets/aistudio/electric-ev-website3_0a03b867.jpeg', 
        caption: '3. Drive Beyond — Pure Power Dynamics' 
      },
      { 
        url: '/assets/aistudio/electric-ev-website4_d91cc784.jpeg', 
        caption: '4. Connected Systems & Unified Ecosystem' 
      }
    ]
  },
  {
    id: 'sample-4',
    title: 'Lumière — Modern Restaurant & Cafe',
    category: 'Hospitality & Dining',
    description: 'Contemporary French dining and cocktail bar experience with curated seasonal dinner menus, interactive specials, craft drinks, and reservation bookings.',
    images: [
      { 
        url: '/assets/aistudio/restaurant-cafe1_0eb98051.jpeg', 
        caption: '1. Cocktail Bar & Culinary Atmosphere Hero' 
      },
      { 
        url: '/assets/aistudio/restaurant-cafe2_ca6a5b1c.png', 
        caption: '2. The Art of Fine Dining, Reimagined' 
      },
      { 
        url: '/assets/aistudio/restaurant-cafe3_20dd439e.png', 
        caption: '3. Curated Menu, Daily Specials & Dietary Filters' 
      },
      { 
        url: '/assets/aistudio/restaurant-cafe4_468b2442.png', 
        caption: '4. Location Map, Hours & Inquiries' 
      }
    ]
  },
  {
    id: 'sample-5',
    title: 'Paws & Care — Premium Pet Care & Services',
    category: 'Pet Care & Services',
    description: 'Trusted pet care service platform with dog walking, pet sitting, in-home grooming, transparent tiered pricing packages, and online scheduling.',
    images: [
      { 
        url: '/assets/aistudio/paws-care1_32bee67c.png', 
        caption: '1. Premium Care for Your Best Friend Hero' 
      },
      { 
        url: '/assets/aistudio/paws-care2_0b94cee0.png', 
        caption: '2. Comprehensive Pet Services Catalog' 
      },
      { 
        url: '/assets/aistudio/paws-care3_39d695f9.png', 
        caption: '3. Transparent Plans & Tiered Care Pricing' 
      },
      { 
        url: '/assets/aistudio/paws-care4_95f4f33f.png', 
        caption: '4. Schedule Meet & Greet Online Booking' 
      }
    ]
  },
  {
    id: 'sample-6',
    title: 'Luxe Dining — Elevated Dining & Lounge',
    category: 'Hospitality & Dining',
    description: 'Atmospheric lounge and refined restaurant web experience featuring seasonal culinary pairings, signature craft cocktail menus, and reservations.',
    images: [
      { 
        url: '/assets/aistudio/luxe-dining-1_75e6ee69.jpeg', 
        caption: '1. Elevated Dining & Crafted Experiences Hero' 
      },
      { 
        url: '/assets/aistudio/luxe-dining-2_4f92af90.jpeg', 
        caption: '2. Refined Seasonal Dining Menu' 
      },
      { 
        url: '/assets/aistudio/luxe-dining-3_e586183d.jpeg', 
        caption: '3. Signature Handcrafted Cocktails' 
      },
      { 
        url: '/assets/aistudio/luxe-dining-4_e031d387.jpeg', 
        caption: '4. Visit Details, Hours & Reservations' 
      }
    ]
  },
  {
    id: 'sample-7',
    title: 'Madison — Digital Product Designer',
    category: 'Portfolio & Creative',
    description: 'Vibrant design portfolio showcasing UX/UI case studies, interactive project modals with tech stack breakdowns, and consultation contact.',
    images: [
      { 
        url: '/assets/aistudio/minimal-personal-portfolio1_7e4566a7.jpeg', 
        caption: '1. Designer Profile & Introduction Hero' 
      },
      { 
        url: '/assets/aistudio/minimal-personal-portfolio2_300a685c.png', 
        caption: '2. Selected Works & Interactive Projects Grid' 
      },
      { 
        url: '/assets/aistudio/minimal-personal-portfolio3_290d5d59.png', 
        caption: '3. Project Case Study & Tech Stack Modal' 
      },
      { 
        url: '/assets/aistudio/minimal-personal-portfolio4_bc48b230.png', 
        caption: '4. Get in Touch & Project Inquiry Form' 
      }
    ]
  }
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Lightbox / Zoom modal state for 'Others' (Long Screenshots)
  const [selectedOther, setSelectedOther] = useState<OtherProject | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // Gallery / Slider modal state for 'Samples' (Multi-Image 4x)
  const [selectedSample, setSelectedSample] = useState<SampleProject | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  // Categories list with 'Others' and 'Samples' placed immediately next to 'All'
  const originalCategories = Array.from(new Set(projects.map(p => p.category)));
  const categories = ['All', 'Others', 'Samples', ...originalCategories];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Body scroll locking and keyboard navigation for modals
  useEffect(() => {
    if (selectedOther || selectedSample) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedOther(null);
        setSelectedSample(null);
      }
      if (selectedSample) {
        if (e.key === 'ArrowRight') {
          setActiveSlideIndex(prev => (prev + 1) % selectedSample.images.length);
        } else if (e.key === 'ArrowLeft') {
          setActiveSlideIndex(prev => (prev - 1 + selectedSample.images.length) % selectedSample.images.length);
        }
      }
      if (selectedOther) {
        if (e.key === '+' || e.key === '=') {
          setZoomLevel(prev => Math.min(250, prev + 25));
        } else if (e.key === '-' || e.key === '_') {
          setZoomLevel(prev => Math.max(50, prev - 25));
        } else if (e.key === '0') {
          setZoomLevel(100);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedOther, selectedSample]);

  // Open 'Others' modal
  const openOtherModal = (other: OtherProject) => {
    setSelectedOther(other);
    setZoomLevel(100);
  };

  // Open 'Samples' modal
  const openSampleModal = (sample: SampleProject) => {
    setSelectedSample(sample);
    setActiveSlideIndex(0);
  };

  return (
    <section id="portfolio" className="py-20 md:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sky-400 font-semibold tracking-wide uppercase mb-2 text-sm md:text-base">Recent Work</h2>
          <p className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</p>
          <p className="max-w-2xl mx-auto text-slate-400 mb-10 text-sm md:text-base">
            Take a look at some of the diverse WordPress projects I've delivered recently, ranging from healthcare and automotive events to complex e-commerce platforms.
          </p>
          
          {/* Filter Bar with 'Others' and 'Samples' placed right next to 'All' */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-12 scrollbar-hide overflow-x-auto pb-2">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30 scale-105' 
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. OTHERS SEGMENT VIEW (When 'Others' is active) */}
        {activeFilter === 'Others' && (
          <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {otherProjects.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openOtherModal(item)}
                  className="group rounded-3xl bg-slate-850 hover:bg-slate-800 border border-white/10 hover:border-sky-500/50 p-4 sm:p-5 cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 flex flex-col"
                >
                  {/* Website Image Container - Crisp 100% Opacity with Visible Rounded Corners */}
                  <div className="relative h-[420px] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-xl group-hover:border-sky-500/40 transition-colors">
                    <div className="w-full transform transition-transform duration-[4500ms] ease-in-out group-hover:-translate-y-[calc(100%-420px)] pointer-events-none">
                      <img
                        src={item.previewImage}
                        alt={item.title}
                        className="w-full h-auto object-cover opacity-100"
                        loading="lazy"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                        Zoom & View Full Screenshot
                      </span>
                    </div>
                  </div>

                  {/* Separate section for heading under the image */}
                  <div className="pt-5 pb-1 px-1.5 flex flex-col justify-between flex-grow">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-sky-400 text-xs md:text-sm font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        Long View
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-sky-600 group-hover:text-white transition-all shrink-0">
                        <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. SAMPLES SEGMENT VIEW (When 'Samples' is active) */}
        {activeFilter === 'Samples' && (
          <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {sampleProjects.map((sample) => (
                <div
                  key={sample.id}
                  onClick={() => openSampleModal(sample)}
                  className="group rounded-3xl bg-slate-850 hover:bg-slate-800 border border-white/10 hover:border-sky-500/50 p-4 sm:p-5 cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 flex flex-col"
                >
                  {/* Website Image Container - Crisp 100% Opacity with Visible Rounded Corners */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-xl group-hover:border-sky-500/40 transition-colors">
                    <img
                      src={sample.images[0].url}
                      alt={sample.title}
                      className="w-full h-full object-cover object-top opacity-100 transition-transform duration-500 group-hover:scale-102"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Open 4-Image Slider
                      </span>
                    </div>
                  </div>

                  {/* Separate section for heading under the images */}
                  <div className="pt-5 pb-1 px-1.5 flex flex-col justify-between flex-grow">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-sky-400 text-xs md:text-sm font-bold uppercase tracking-wider">
                        {sample.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        4 Screens
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4 mt-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                        {sample.title}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-sky-600 group-hover:text-white transition-all shrink-0">
                        <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. DEFAULT & CATEGORY VIEW (Preserves existing websites exactly as they are!) */}
        {activeFilter !== 'Others' && activeFilter !== 'Samples' && (
          <div>
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
                  <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/40 transition-all duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-sky-600 px-6 py-2 rounded-full font-bold text-sm shadow-xl">
                      View Live Site
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent pointer-events-none"></div>
                  
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full pointer-events-none">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-sky-400 text-xs font-bold mb-1 block uppercase tracking-widest">{project.category}</span>
                        <h3 className="text-xl md:text-2xl font-bold leading-tight">{project.title}</h3>
                      </div>
                      <div className="bg-white/10 p-2 rounded-full text-white/50 group-hover:text-white group-hover:bg-sky-500 transition-all">
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
        )}

        {/* 4. FULL-SCREEN LIGHTBOX MODAL WITH ZOOM FUNCTIONALITY ('Others' Segment) */}
        {selectedOther && (
          <div className="fixed inset-0 z-[120] bg-slate-950/95 backdrop-blur-md flex flex-col animate-in fade-in duration-300">
            {/* Top Lightbox Control Bar */}
            <div className="flex items-center justify-between px-4 md:px-8 py-3.5 bg-slate-900 border-b border-white/10 z-10 select-none shadow-xl">
              <div className="flex items-center gap-3 truncate max-w-[45%]">
                <span className="text-lg">📜</span>
                <div className="truncate">
                  <div className="text-sm font-bold text-white truncate">{selectedOther.title}</div>
                  <div className="text-xs text-sky-400 font-medium">{selectedOther.category} • Full-Length View</div>
                </div>
              </div>

              {/* Zoom Controls */}
              <div className="flex items-center gap-2 md:gap-3 bg-slate-950/80 px-3 py-1.5 rounded-full border border-white/10">
                <button
                  onClick={() => setZoomLevel(prev => Math.max(50, prev - 25))}
                  disabled={zoomLevel <= 50}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                  title="Zoom Out (-)"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-xs font-mono font-bold text-sky-300 min-w-[3.5rem] text-center">
                  {zoomLevel}%
                </span>
                <button
                  onClick={() => setZoomLevel(prev => Math.min(250, prev + 25))}
                  disabled={zoomLevel >= 250}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                  title="Zoom In (+)"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <div className="h-4 w-px bg-white/20 mx-1"></div>
                <button
                  onClick={() => setZoomLevel(100)}
                  className="text-[11px] font-semibold text-slate-300 hover:text-white px-2 py-0.5 rounded hover:bg-white/10 transition-colors"
                  title="Reset to 100%"
                >
                  Reset
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedOther(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-rose-600 text-white transition-colors"
                title="Close (Esc)"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable / Zoomable Lightbox Body */}
            <div className="flex-1 overflow-auto p-4 md:p-8 flex justify-center items-start">
              <div 
                className="transition-all duration-200 shadow-2xl rounded-2xl overflow-hidden bg-slate-900 border border-white/10"
                style={{ 
                  width: `${zoomLevel}%`,
                  maxWidth: zoomLevel <= 100 ? '920px' : `${Math.round(zoomLevel * 9.5)}px`,
                }}
              >
                {/* Long Screenshot Header Banner */}
                <div className="bg-slate-950 px-6 py-4 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">{selectedOther.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{selectedOther.description}</p>
                  </div>
                  <span className="text-[11px] font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 whitespace-nowrap">
                    Full-Length Screenshot Placeholder
                  </span>
                </div>

                {/* Long Form Vertical Preview */}
                <div className="bg-slate-950 flex flex-col items-center">
                  <img
                    src={selectedOther.longScreenshotImage}
                    alt={selectedOther.title}
                    className="w-full h-auto object-cover"
                  />
                  {/* Detailed structural mockup sections mimicking a full-page website */}
                  <div className="w-full p-8 space-y-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
                    <div className="p-6 rounded-2xl bg-slate-800/80 border border-white/10 text-center">
                      <div className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-2">Section 1: Hero & Architecture</div>
                      <div className="text-slate-300 font-medium text-sm">Responsive Header, Modern Typography, and Call to Action</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-800/80 border border-white/10 text-center">
                      <div className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-2">Section 2: Interactive Feature Showcase</div>
                      <div className="text-slate-300 font-medium text-sm">Service Grids, Technology Stacks, and Interactive Cards</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-800/80 border border-white/10 text-center">
                      <div className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-2">Section 3: Social Proof & Metrics</div>
                      <div className="text-slate-300 font-medium text-sm">Verified Client Testimonials, Conversion Numbers, and Ratings</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-800/80 border border-white/10 text-center">
                      <div className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-2">Section 4: Pricing Matrix & Booking Flow</div>
                      <div className="text-slate-300 font-medium text-sm">Scalable Packages, Comparison Table, and Contact Gateway</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-slate-800/80 border border-white/10 text-center">
                      <div className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-2">Section 5: Footer & Legal Credentials</div>
                      <div className="text-slate-300 font-medium text-sm">Multi-column Navigation, Brand Credentials, and Newsletter Integration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Hint Bar */}
            <div className="py-2.5 px-4 bg-slate-900/90 border-t border-white/5 text-center text-xs text-slate-400 flex items-center justify-center gap-4">
              <span>Use <strong>+</strong> and <strong>-</strong> to zoom</span>
              <span>•</span>
              <span>Scroll up and down to inspect full page</span>
              <span>•</span>
              <span>Press <strong>ESC</strong> to exit</span>
            </div>
          </div>
        )}

        {/* 5. MULTI-IMAGE GALLERY / SLIDER MODAL ('Samples' Segment) */}
        {selectedSample && (
          <div className="fixed inset-0 z-[120] bg-slate-950/95 backdrop-blur-md flex flex-col justify-between animate-in fade-in duration-300">
            {/* Gallery Header */}
            <div className="flex items-center justify-between px-4 md:px-8 py-3.5 bg-slate-900 border-b border-white/10 select-none z-10 shadow-xl">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base">🖼️</span>
                  <h3 className="text-base font-bold text-white">{selectedSample.title}</h3>
                </div>
                <div className="text-xs text-emerald-400 font-semibold mt-0.5">
                  Screen {activeSlideIndex + 1} of {selectedSample.images.length}: {selectedSample.images[activeSlideIndex].caption}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedSample(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-rose-600 text-white transition-colors"
                title="Close (Esc)"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Center Slider Display Area */}
            <div className="relative flex-1 flex items-center justify-center p-4 md:p-8 overflow-hidden">
              {/* Previous Slide Button */}
              <button
                onClick={() => setActiveSlideIndex(prev => (prev - 1 + selectedSample.images.length) % selectedSample.images.length)}
                className="absolute left-4 md:left-8 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white flex items-center justify-center transition-all border border-white/10 shadow-2xl backdrop-blur-sm hover:scale-110 active:scale-95"
                title="Previous Image (Left Arrow)"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Active Image with Caption */}
              <div className="relative max-w-5xl max-h-[70vh] w-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-200">
                <img
                  key={activeSlideIndex}
                  src={selectedSample.images[activeSlideIndex].url}
                  alt={selectedSample.images[activeSlideIndex].caption}
                  className="max-h-[64vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain border border-white/10"
                />
                <div className="mt-4 px-4 py-2 rounded-full bg-slate-900/90 border border-white/10 text-xs md:text-sm text-slate-200 font-semibold text-center shadow-lg">
                  {selectedSample.images[activeSlideIndex].caption}
                </div>
              </div>

              {/* Next Slide Button */}
              <button
                onClick={() => setActiveSlideIndex(prev => (prev + 1) % selectedSample.images.length)}
                className="absolute right-4 md:right-8 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white flex items-center justify-center transition-all border border-white/10 shadow-2xl backdrop-blur-sm hover:scale-110 active:scale-95"
                title="Next Image (Right Arrow)"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Bottom 4-Thumbnail Navigation Strip */}
            <div className="bg-slate-900 border-t border-white/10 p-4 select-none">
              <div className="max-w-xl mx-auto flex items-center justify-center gap-3">
                {selectedSample.images.map((img, idx) => {
                  const isActive = idx === activeSlideIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`relative aspect-[16/10] w-20 md:w-24 rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                        isActive 
                          ? 'border-sky-400 ring-4 ring-sky-500/30 scale-105' 
                          : 'border-white/10 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-slate-900/20"></div>
                      <div className={`absolute bottom-0 inset-x-0 text-[10px] font-bold text-center py-0.5 ${
                        isActive ? 'bg-sky-600 text-white' : 'bg-slate-900/80 text-slate-300'
                      }`}>
                        {idx + 1} / 4
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="text-center text-[11px] text-slate-400 mt-2">
                Use <strong>←</strong> and <strong>→</strong> keys or click thumbnails to switch views
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

