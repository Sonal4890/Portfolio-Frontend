import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, Github, Linkedin, X, Gamepad } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [notice, setNotice] = useState('');

  const handleChange = (e) => setFormData(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/send-email`, formData);
      setStatus('success');
      setNotice('Message sent!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => { setStatus(null); setNotice(''); }, 4000);
    } catch (err) {
      setStatus('error');
      setNotice('Failed to send message.');
      console.error(err);
    }
  };

  return (
    <section id="contact" className="lg:min-h-screen py-20 flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24">
        <h2 className="text-4xl font-display text-neo-cyan mb-16 tracking-tight">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column - Contact Info */}
          <div className="bg-neo-surface rounded-sm p-8 sm:p-10 flex flex-col">
            <h3 className="text-xl font-display text-white mb-8">Let's connect</h3>

            {/* Contact Items */}
            <div className="space-y-8 flex-1">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-neo-cyan rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-neo-gray font-mono tracking-widest mb-1">Email</div>
                  <div className="text-white font-medium break-all">sonal.saini4890@proton.me</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 bg-neo-cyan rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="text-xs uppercase text-neo-gray font-mono tracking-wider mb-0.5">Phone</div>
                  <div className="text-white font-medium">+91 94266 46335</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 bg-neo-cyan rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="text-xs uppercase text-neo-gray font-mono tracking-wider mb-0.5">Based in</div>
                  <div className="text-white font-medium">Palanpur Jakatnaka, Surat</div>
                </div>
              </div>
            </div>

            <div className="my-8 border-t border-white/10" />

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Sonal4890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neo-cyan/10 rounded-full hover:bg-neo-cyan transition-colors group"
              >
                <Github className="h-5 w-5 text-neo-cyan group-hover:text-black transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/sonal-saini-993b06340/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neo-cyan/10 rounded-full hover:bg-neo-cyan transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-neo-cyan group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form onSubmit={handleSubmit} className="bg-neo-surface rounded-sm p-8 sm:p-10 flex flex-col">
            <h3 className="text-xl font-display text-white mb-8">Send a message</h3>

            <div className="space-y-6 flex-1">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase text-neo-gray font-mono tracking-wider">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-black/20 rounded-sm px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-neo-cyan transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase text-neo-gray font-mono tracking-wider">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-black/20 rounded-sm px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-neo-cyan transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase text-neo-gray font-mono tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write Your Feedback Or Oppurtunity..."
                  className="w-full bg-black/20 rounded-sm px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-neo-cyan transition-all resize-none"
                  required
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-neo-lime/10 rounded-sm">
                  <CheckCircle className="h-4 w-4 text-neo-lime flex-shrink-0" />
                  <span className="text-sm text-neo-lime">{notice}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-neo-magenta/10 rounded-sm">
                  <AlertCircle className="h-4 w-4 text-neo-magenta flex-shrink-0" />
                  <span className="text-sm text-neo-magenta">{notice}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center gap-2 bg-neo-cyan text-black font-bold px-6 py-3 rounded-sm hover:bg-neo-magenta transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full mt-6"
            >
              {status === 'loading' ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;