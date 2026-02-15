
import React from 'react';

const Hero: React.FC = () => {
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 pt-32 md:pt-48 pb-16">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Intro Text */}
          <div className="text-left animate-in slide-in-from-left-8 duration-700">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs md:text-sm font-semibold tracking-wider uppercase">
              3+ Years of Experience
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
              Hi, I'm <span className="text-indigo-500">Anas</span> <br />
              <span className="text-slate-200">A Professional </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                WordPress Developer
              </span>
            </h1>
            <p className="max-w-xl text-base md:text-xl text-slate-300 mb-10 leading-relaxed">
              I specialize in crafting high-performance digital experiences using Elementor, GeneratePress, and Astra. From custom theme builds to speed optimization, I help brands grow with scalable WP solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-indigo-500/20 text-center"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 rounded-xl font-bold text-lg transition-all text-center"
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-1000">
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[3rem] overflow-hidden group border-4 border-white/5 shadow-2xl">
              <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
              <img
                src="https://image2url.com/r2/default/images/1771154808022-bbfebd62-a280-4e91-ad90-401385bb855d.jpg"
                alt="Anas - WordPress Developer"
                className="w-full h-full object-cover grayscale-[5%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>
            {/* Floating Element - Modern Availability Badge */}
            <div className="absolute bottom-8 right-8 lg:-right-6 bg-white p-4 md:p-6 rounded-2xl shadow-2xl animate-bounce duration-[3000ms] z-20 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Status</div>
                  <div className="text-sm font-bold text-slate-900">Open for Work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
