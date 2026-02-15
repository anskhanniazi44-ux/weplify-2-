
import React from 'react';

const HostingPlans: React.FC = () => {
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

  const plans = [
    {
      name: "Premium",
      price: "399",
      oldPrice: "1,999",
      discount: "80% OFF",
      period: "/mo",
      bonus: "+2 mo. free",
      tagline: "Everything you need to get started",
      features: [
        "Create up to 3 websites",
        "20 GB SSD Storage",
        "2 mailboxes per website - free 1yr",
        "Free domain for 1 year",
        "Managed WordPress",
        "AI Website Builder",
        "No Node.js web apps"
      ],
      cta: "Choose plan",
      highlight: false,
    },
    {
      name: "Business",
      price: "599",
      oldPrice: "2,499",
      discount: "76% OFF",
      period: "/mo",
      bonus: "+2 mo. free",
      tagline: "More tools and power for growth",
      features: [
        "Up to 50 websites",
        "50 GB NVMe storage",
        "5 mailboxes per website - free 1yr",
        "5 Node.js web apps",
        "Daily and on-demand backups",
        "Build ecommerce with AI",
        "AI Agent for WordPress",
        "Free CDN & WP Multisite"
      ],
      cta: "Choose plan",
      highlight: true,
    },
    {
      name: "Cloud Startup",
      price: "1,899",
      oldPrice: "5,699",
      discount: "67% OFF",
      period: "/mo",
      bonus: "+2 mo. free",
      tagline: "Handle complex business needs",
      features: [
        "Up to 100 websites",
        "100 GB NVMe storage",
        "10 mailboxes per website - free 1yr",
        "10 Node.js web apps",
        "Priority expert support 24/7",
        "Dedicated IP address",
        "100 PHP workers",
        "4 GB RAM performance"
      ],
      cta: "Choose plan",
      highlight: false,
    }
  ];

  return (
    <section id="hosting" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase mb-2 text-sm md:text-base">Hostinger Partner</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6">
            Official Hosting Plans
          </p>
          <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg">
            Get professional-grade hosting with my expert setup. Managed performance, security, and AI tools included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-[2.5rem] p-6 md:p-10 flex flex-col transition-all duration-300 border-2 ${
                plan.highlight 
                  ? 'bg-slate-900 text-white border-indigo-600 shadow-2xl md:scale-105 z-10' 
                  : 'bg-white text-slate-900 border-slate-100 hover:border-indigo-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold ${plan.highlight ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-700'}`}>
                    {plan.discount}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.tagline}</p>
                
                <div className="mb-2">
                  <span className={`text-sm line-through ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>Rs. {plan.oldPrice}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold">Rs.</span>
                  <span className="text-4xl md:text-5xl font-extrabold">{plan.price}</span>
                  <span className={`text-sm font-medium ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
                </div>
                <div className="mt-2 inline-block bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded">
                  {plan.bonus}
                </div>
              </div>

              <div className={`mb-8 p-3 rounded-xl border border-dashed ${plan.highlight ? 'border-slate-700 bg-slate-800/50' : 'border-slate-200 bg-slate-50'}`}>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1 opacity-70">Special Offer</p>
                <p className="text-[11px] md:text-xs leading-relaxed">Limited time deal - includes professional setup by Anas</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg 
                      className={`w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-indigo-400' : 'text-indigo-600'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={handleScrollToContact}
                className={`w-full py-4 rounded-2xl font-bold transition-all text-center ${
                plan.highlight 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-slate-400 text-[10px] md:text-xs max-w-2xl mx-auto">
          * Renews at regular prices. Free domain available for the first year. Professional setup included with all listed packages.
        </p>
      </div>
    </section>
  );
};

export default HostingPlans;
