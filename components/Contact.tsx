
import React, { useState } from 'react';
import { getWhatsAppLink } from '../constants.ts';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Website Design & Development',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    const lines = [
      'Hi Anas, I would like to start a project with you.',
      '',
      `Name: ${formData.name.trim()}`,
      `Phone / WhatsApp: ${formData.phone.trim()}`,
      ...(formData.email.trim() ? [`Email: ${formData.email.trim()}`] : []),
      `Service: ${formData.subject}`,
      ...(formData.details.trim() ? [`Project Details: ${formData.details.trim()}`] : []),
    ];

    const whatsappUrl = getWhatsAppLink(lines.join('\n'));
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-600 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-16 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">Ready to start your project?</h2>
            <p className="text-xl text-sky-100 mb-12 opacity-90">
              Whether you need a full site build or specialized optimization, I'm here to help. Drop me a line and let's talk about your goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div className="text-sm text-sky-200">Email Me</div>
                  <div className="font-bold">anaskhanhosting@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div className="text-sm text-sky-200">Call/WhatsApp Me</div>
                  <div className="font-bold">+923446972446</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-8 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none" 
                    placeholder="Your full name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    minLength={7}
                    pattern="[+0-9\s()-]{7,20}"
                    title="Please enter a valid phone or WhatsApp number (7-20 digits)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none" 
                    placeholder="+92 300 1234567" 
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none" 
                    placeholder="you@example.com (optional)" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject / Service
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none bg-white"
                  >
                    <option value="Website Design & Development">Website Design &amp; Development</option>
                    <option value="WordPress Design & Development">WordPress Design &amp; Development</option>
                    <option value="Landing Pages & Website Redesign">Landing Pages &amp; Website Redesign</option>
                    <option value="Speed, Hosting & Domain Setup">Speed, Hosting &amp; Domain Setup</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Details
                </label>
                <textarea 
                  name="details"
                  rows={4} 
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none" 
                  placeholder="Tell me about your requirements (optional)..."
                ></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-sky-600 text-white rounded-xl font-bold text-lg hover:bg-sky-700 transition-all shadow-lg shadow-sky-500/20">
                Continue to WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
