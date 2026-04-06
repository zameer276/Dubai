/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scissors, 
  MapPin, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  Star, 
  Menu, 
  X, 
  Instagram, 
  Facebook,
  Clock,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

// --- Constants & Data ---

const SERVICES = [
  { name: "Haircut", price: "AED 120", desc: "Precision cut tailored to your face shape and style." },
  { name: "Beard Styling", price: "AED 80", desc: "Expert shaping, trimming, and hot towel finish." },
  { name: "Hair + Beard Combo", price: "AED 180", desc: "The ultimate grooming package for the modern man." },
  { name: "Fade & Styling", price: "AED 140", desc: "Sharp skin fades and contemporary styling." },
  { name: "Kids Haircut", price: "AED 90", desc: "Gentle and stylish cuts for the younger gentlemen." },
];

const TESTIMONIALS = [
  { name: "James Wilson", text: "Best haircut I've had in Dubai. The attention to detail is unmatched. Truly a premium experience.", rating: 5 },
  { name: "Ahmed Al-Maktoum", text: "Professional staff and a very clean environment. The beard styling is top-notch. Highly recommended!", rating: 5 },
  { name: "David Miller", text: "London Base is my go-to spot now. Great vibe, expert barbers, and easy booking via WhatsApp.", rating: 5 },
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1621605815841-2941a5811288?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1599351431247-f5793383899d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
];

const WHATSAPP_LINK = "https://wa.me/971501501499";
const PHONE_NUMBER = "+971 50 150 1499";

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center">
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[11px] uppercase tracking-[0.3em] text-[#C5A059] font-medium block mb-3"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-light tracking-tight text-white"
    >
      {children}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      className="h-[1px] bg-[#C5A059] mx-auto mt-6"
    />
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#C5A059] selection:text-black">
      
      {/* --- Sticky Header --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Scissors className="text-[#C5A059] w-8 h-8" />
            <span className="text-xl font-light tracking-[0.2em] uppercase">
              London <span className="text-[#C5A059] font-medium">Base</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-[#C5A059] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-[#C5A059] text-[#C5A059] text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-[#C5A059] hover:text-black transition-all duration-300"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-32 px-10 md:hidden"
          >
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-widest uppercase"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-8 py-4 bg-[#C5A059] text-black text-sm uppercase tracking-[0.2em] font-bold rounded-full"
              >
                Book on WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1920" 
            alt="Barbershop Interior"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[12px] md:text-[14px] uppercase tracking-[0.5em] text-[#C5A059] font-medium mb-6 block"
          >
            Est. 2024 | Dubai Business Bay
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight mb-8 leading-[1.1]"
          >
            Premium Grooming <br />
            <span className="italic font-serif text-[#C5A059]">Experience</span> in Dubai
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide"
          >
            Expert Barbers | Modern Styles | Luxury Experience. <br className="hidden md:block" />
            Elevate your style at London Base Barbershop.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-[#C5A059] text-black text-sm uppercase tracking-[0.2em] font-bold rounded-full overflow-hidden transition-all hover:pr-14"
            >
              <span className="relative z-10">Book on WhatsApp</span>
              <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
            </a>
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="px-10 py-5 border border-white/20 text-white text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white hover:text-black transition-all"
            >
              Call Us Now
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden lg:flex"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#C5A059] to-transparent" />
        </motion.div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Our Expertise">Premium Services</SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 border border-white/5 bg-white/[0.02] rounded-2xl hover:border-[#C5A059]/30 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-light tracking-wide group-hover:text-[#C5A059] transition-colors">{service.name}</h3>
                  <span className="text-[#C5A059] font-medium">{service.price}</span>
                </div>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="h-[1px] w-full bg-white/5 group-hover:bg-[#C5A059]/20 transition-all" />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/40 text-sm italic mb-8">* Prices are subject to change based on specific styling requirements.</p>
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 text-[#C5A059] uppercase tracking-[0.2em] text-xs font-bold hover:gap-4 transition-all">
              View Full Menu <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-32 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Barber at work"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-[#C5A059] p-8 rounded-2xl hidden md:block">
                <span className="text-black text-5xl font-light block mb-1">10+</span>
                <span className="text-black/70 text-[10px] uppercase tracking-widest font-bold">Years of Mastery</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A059] font-medium block mb-4">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
                Crafting Confidence <br />
                <span className="italic font-serif text-[#C5A059]">Since 2024</span>
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                London Base Barbershop brings the sophisticated essence of British grooming to the heart of Dubai's Business Bay. We believe that a haircut is more than just a service—it's a ritual of self-care and a statement of identity.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  "Master barbers with international experience",
                  "Strict hygiene protocols and premium tools",
                  "Luxury atmosphere in the heart of Business Bay",
                  "Personalized consultation for every client"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#C5A059]/10 flex items-center justify-center">
                      <CheckCircle className="text-[#C5A059] w-3 h-3" />
                    </div>
                    <span className="text-white/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
              <a 
                href={WHATSAPP_LINK}
                className="inline-block px-8 py-4 border border-[#C5A059] text-[#C5A059] text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-[#C5A059] hover:text-black transition-all"
              >
                Learn More About Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="The Portfolio">Masterpieces</SectionHeading>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden group relative"
              >
                <img 
                  src={img} 
                  alt={`Haircut ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-light"
            >
              Follow us on Instagram for more <Instagram size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Scissors, title: "Skilled Barbers", desc: "Our team consists of industry veterans with a passion for precision." },
              { icon: CheckCircle, title: "Clean & Hygienic", desc: "We maintain the highest standards of cleanliness for your safety." },
              { icon: Star, title: "Premium Experience", desc: "From hot towels to premium products, every detail is curated." },
              { icon: MessageSquare, title: "Easy Booking", desc: "Book your slot in seconds through our seamless WhatsApp integration." },
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group hover:bg-[#C5A059] transition-all duration-500">
                  <item.icon className="text-[#C5A059] group-hover:text-black transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-light mb-4 tracking-wide">{item.title}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Client Voices">What They Say</SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 border border-white/5 bg-white/[0.02] rounded-3xl relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>
                <p className="text-lg font-light italic text-white/80 mb-8 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C5A059] to-[#8A6D3B] flex items-center justify-center text-black font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <span className="text-sm font-medium tracking-widest uppercase">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Location Section --- */}
      <section id="location" className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading subtitle="Find Us" >Our Studio</SectionHeading>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#C5A059]/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2 uppercase tracking-widest">Address</h4>
                    <p className="text-white/60 font-light leading-relaxed">
                      Al Asayel St - Business Bay - Bay Square <br />
                      Dubai - United Arab Emirates
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#C5A059]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2 uppercase tracking-widest">Hours</h4>
                    <p className="text-white/60 font-light leading-relaxed">
                      Monday - Sunday: 10:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#C5A059]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2 uppercase tracking-widest">Contact</h4>
                    <p className="text-white/60 font-light leading-relaxed">
                      {PHONE_NUMBER}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex gap-4">
                <a 
                  href="https://maps.google.com/?q=Al+Asayel+St+-+Business+Bay+-+Bay+Square+-+Dubai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-[#C5A059] transition-all"
                >
                  Get Directions <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[500px] rounded-3xl overflow-hidden grayscale contrast-125 border border-white/10"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178653924467!2d55.28189437538165!3d25.19554317771239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f68307062406f%3A0x633831410161!2sBay%20Square!5e0!3m2!1sen!2sae!4v1712395000000!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-2">
              <Scissors className="text-[#C5A059] w-8 h-8" />
              <span className="text-2xl font-light tracking-[0.2em] uppercase">
                London <span className="text-[#C5A059] font-medium">Base</span>
              </span>
            </div>
            
            <div className="flex gap-8">
              <a href="#" className="text-white/40 hover:text-[#C5A059] transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-white/40 hover:text-[#C5A059] transition-colors"><Facebook size={24} /></a>
              <a href={WHATSAPP_LINK} className="text-white/40 hover:text-[#C5A059] transition-colors"><MessageSquare size={24} /></a>
            </div>

            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">
              &copy; 2026 London Base Barbershop. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* --- Floating WhatsApp Button --- */}
      <motion.a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/20 group"
      >
        <MessageSquare className="text-white fill-white" size={32} />
        <span className="absolute right-20 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Book Appointment
        </span>
      </motion.a>

      {/* --- Mobile Call Button (Fixed Bottom) --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-black to-transparent">
        <a 
          href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
          className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs shadow-xl"
        >
          <Phone size={18} /> Call Now
        </a>
      </div>

    </div>
  );
}
