import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
  Users,
  TrendingUp,
  Zap,
  Menu,
  X as CloseIcon,
  ChevronRight,
  Sparkles,
  Globe,
  Rocket,
  PenTool
} from 'lucide-react';
import { Logo, LogoWithText } from './components/Logo';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-4",
      isScrolled ? "bg-brand-dark/80 backdrop-blur-2xl border-b border-black/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex justify-start items-center">
          <LogoWithText />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-12">
          {['Services', 'Tools', 'Testimonials', 'Blog', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-medium text-[var(--text)] opacity-40 hover:opacity-100 hover:text-brand-accent transition-all duration-300 tracking-[0.18em] uppercase font-sans"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center gap-6">
          <a
            href="#contact"
            className="bg-brand-primary text-white px-10 py-3 rounded-full text-xl font-black hover:bg-brand-accent transition-all duration-300 shadow-xl shadow-brand-primary/30 hover:scale-105 active:scale-95"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-[var(--text)] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark border-b border-black/10 p-8 flex flex-col gap-6 md:hidden"
          >
            {['Services', 'Tools', 'Testimonials', 'Blog', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-bold text-[var(--text)] opacity-70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-primary text-white px-6 py-4 rounded-xl font-black text-xl text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-40 pb-24">


      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-brand-dark" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="flex flex-col items-center"
        >
          <h1 className="font-display text-[14vw] sm:text-[11vw] md:text-[13vw] lg:text-[15vw] tracking-tighter leading-[0.72] uppercase flex flex-col items-center">
            <motion.div
              variants={{
                hidden: { y: 100, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="text-black"
            >
              WE TURN
            </motion.div>
            <motion.div
              variants={{
                hidden: { y: 100, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 } }
              }}
              className="text-brand-accent"
            >
              FOUNDERS
            </motion.div>
            <motion.div
              variants={{
                hidden: { y: 100, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 } }
              }}
              className="text-black"
            >
              INTO ICONS
            </motion.div>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, platforms }: { icon: any, title: string, description: string, platforms: string[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -15, scale: 1.02 }}
    transition={{ duration: 0.5 }}
    className="glass p-10 rounded-[2.5rem] group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-brand-primary/20 transition-colors duration-500" />

    <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500 group-hover:rotate-6">
      <Icon className="w-8 h-8 text-brand-accent group-hover:text-white transition-colors duration-500" />
    </div>
    <h3 className="font-display text-4xl mb-5 tracking-wide text-[var(--text)] uppercase">{title}</h3>
    <p className="text-[var(--text)] opacity-60 text-lg mb-8 leading-relaxed font-light">
      {description}
    </p>
    <div className="flex flex-wrap gap-3">
      {platforms.map(p => (
        <span key={p} className="text-xs uppercase font-medium tracking-[0.15em] px-4 py-1.5 bg-black/5 rounded-full border border-black/10 group-hover:border-brand-primary/30 transition-colors text-[var(--text)] font-sans">
          {p}
        </span>
      ))}
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-brand-dark relative overflow-hidden -mt-1 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-5xl md:text-9xl tracking-wide mb-10 leading-[0.92] text-[var(--text)] uppercase">
              OUR <span className="text-brand-accent">SERVICE</span> <br />MODELS
            </h2>
            <p className="text-[var(--text)] opacity-60 text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
              From self-serve tools to full account mastery. We build the systems that turn your work into words.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          <div className="glass p-12 rounded-[3rem] border-black/5">
            <h3 className="font-display text-4xl mb-6 uppercase tracking-wide">Self-Manage Tools</h3>
            <p className="text-lg font-light opacity-60 mb-8 leading-relaxed">
              For founders who want to keep their hands on the wheel but need the engine to run smoother. Access our proprietary toolkit to schedule, optimize, and track.
            </p>
            <ul className="space-y-4 mb-10">
              {['AI Content Optimizer', 'Drag-drop Scheduler', 'Engagement Analytics', 'Profile Health Scan'].map(item => (
                <li key={item} className="flex items-center gap-3 text-lg font-light">
                  <Zap size={18} className="text-brand-accent" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-primary text-white p-12 rounded-[3rem] shadow-2xl shadow-brand-primary/20">
            <h3 className="font-display text-4xl mb-6 uppercase tracking-wide">Full Account Handover</h3>
            <p className="text-lg font-light opacity-80 mb-8 leading-relaxed">
              The ultimate leverage. We sit with you, notice the stories, and handle everything from ghostwriting to posting. You just do the work; we make it visible.
            </p>
            <ul className="space-y-4 mb-10">
              {['Dedicated Story Strategist', 'Full Ghostwriting & Posting', 'Network Growth Management', 'Bi-weekly Strategy Syncs'].map(item => (
                <li key={item} className="flex items-center gap-3 text-lg font-light">
                  <Sparkles size={18} className="text-white" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Packages Table */}
        <div className="mt-32">
          <h3 className="font-display text-4xl mb-12 uppercase tracking-wide text-center">Breakout Packages</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="py-6 font-display text-2xl uppercase tracking-wider">Tier</th>
                  <th className="py-6 font-display text-2xl uppercase tracking-wider">Features</th>
                  <th className="py-6 font-display text-2xl uppercase tracking-wider">Best For</th>
                </tr>
              </thead>
              <tbody className="font-light text-lg">
                <tr className="border-b border-black/5">
                  <td className="py-8 font-medium">Starter Tools</td>
                  <td className="py-8 opacity-60">Scheduler + basic analytics</td>
                  <td className="py-8 opacity-60">Solo creators</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="py-8 font-medium">Pro Managed</td>
                  <td className="py-8 opacity-60">Full posting + strategy</td>
                  <td className="py-8 opacity-60">Busy brands</td>
                </tr>
                <tr className="border-b border-black/5">
                  <td className="py-8 font-medium">Enterprise</td>
                  <td className="py-8 opacity-60">Custom + dedicated manager</td>
                  <td className="py-8 opacity-60">Agencies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tools = () => {
  return (
    <section id="tools" className="py-24 px-6 bg-brand-dark/30 relative overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-display text-6xl md:text-9xl tracking-wide mb-8 leading-[0.92] text-[var(--text)] uppercase">
            SELF-SERVE <span className="text-brand-accent">TOOLKIT</span>
          </h2>
          <p className="text-[var(--text)] opacity-50 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Everything you need for LinkedIn & X mastery. Built by operators, for operators.
          </p>
        </div>

        {/* Interactive Demo Mockup */}
        <div className="glass rounded-[3rem] p-12 mb-32 border-black/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary" />
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="font-display text-4xl mb-6 uppercase tracking-wide">Interactive Scheduler</h3>
              <p className="text-lg font-light opacity-60 mb-8 leading-relaxed">
                Experience the ease of drag-and-drop content management. Plan your week in minutes, not hours.
              </p>
              <button className="bg-brand-primary text-white px-8 py-3 rounded-full font-display tracking-wider uppercase hover:bg-brand-accent transition-all">
                Try Live Demo
              </button>
            </div>
            <div className="flex-1 w-full aspect-video bg-black/5 rounded-2xl border border-black/10 flex items-center justify-center relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Scheduler Mockup"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl transform rotate-2 group-hover:rotate-0 transition-all duration-500">
                  <p className="font-display text-xl uppercase text-white">Drag to Schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'X-Post', desc: 'Auto-post to LinkedIn/X with templates', benefit: 'Save 10h/week' },
            { name: 'Engagement Hub', desc: 'Track engagement, growth metrics', benefit: 'Data-driven decisions' },
            { name: 'Profile Scan', desc: 'Free scan of your profiles', benefit: 'Instant insights' },
            { name: 'Content Optimizer', desc: 'AI suggestions for viral posts', benefit: 'Boost reach 30%' }
          ].map((tool) => (
            <div key={tool.name} className="glass p-8 rounded-3xl border-black/5 hover:border-brand-primary/30 transition-all group">
              <h4 className="font-display text-2xl mb-4 uppercase tracking-wide text-brand-accent">{tool.name}</h4>
              <p className="text-lg font-light opacity-60 mb-6 leading-snug">{tool.desc}</p>
              <div className="pt-6 border-t border-black/5">
                <p className="text-xs uppercase tracking-widest opacity-40 mb-2">Key Benefit</p>
                <p className="font-medium text-brand-primary">{tool.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#F9F7FF] text-[var(--text)] border-y border-black/5 relative overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-display text-6xl md:text-9xl tracking-wide leading-[0.92] mb-16 text-[var(--text)] uppercase">
              MEET THE <br /> <span className="text-brand-accent underline decoration-brand-accent/20 underline-offset-[12px]">DRIVING FORCE.</span>
            </h2>
            <p className="text-2xl font-light opacity-60 leading-relaxed mb-12">
              Namma Socials was born from a simple observation: the most brilliant founders are often the quietest online. We built this agency to bridge the gap between brand potential and creator reality.
            </p>
            <div className="space-y-10">
              {[
                { num: '01', title: 'OUR MISSION', desc: "To democratize influence by providing founders with the tools and talent needed to dominate the Gen Z attention economy." },
                { num: '02', title: 'BRAND-CREATOR SYNERGY', desc: "We don't just post; we grow ecosystems. Our approach ensures that every piece of content serves a larger strategic goal." }
              ].map((item) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: parseInt(item.num) * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-black/5 text-[var(--text)] border border-black/10 rounded-2xl flex items-center justify-center font-display text-3xl group-hover:bg-brand-primary transition-colors duration-300">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="text-2xl font-display mb-3 tracking-wide text-[var(--text)] uppercase">{item.title}</h4>
                    <p className="text-[var(--text)] opacity-60 text-lg font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-10 relative">
            {[
              { name: 'Shivkamni Devi', role: 'Founder', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=2000&auto=format&fit=crop' },
              { name: 'Muthu Kumar Mariappan', role: 'Marketing Strategist', img: 'https://media.licdn.com/dms/image/v2/C5603AQH_QfJbTLDq_g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628463163476?e=1775088000&v=beta&t=2I9BB-NLTUGduLNldtoumbZelUkPxu9x6EfAaclUGY4' },
              { name: 'Arun Gupta', role: 'Developer', img: 'https://media.licdn.com/dms/image/v2/D5603AQFHtrDW4cPy3g/profile-displayphoto-crop_800_800/B56ZhP6YcUHMAM-/0/1753687366428?e=1775088000&v=beta&t=PI8Q-agegj5QxJJNwzmw-kdj1IoZMQ-UorDd8lCaDtE' }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-black/5 shadow-xl mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-center">
                  <h4 className="font-display text-2xl uppercase tracking-wide text-[var(--text)] mb-1">{member.name}</h4>
                  <p className="text-brand-accent font-medium uppercase tracking-widest text-xs">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-brand-dark relative overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-5xl md:text-9xl tracking-wide mb-10 leading-[0.92] text-[var(--text)] uppercase">
              INSIGHTS & <br /><span className="text-brand-accent">STRATEGY</span>
            </h2>
            <p className="text-[var(--text)] opacity-60 text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
              SEO-driven content on social growth, case studies, and the future of attention.
            </p>
          </motion.div>
          <button className="text-brand-accent font-display text-2xl uppercase tracking-wider flex items-center gap-3 group">
            View All Posts <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "The Gen Z Attention Span: How to Win in 3 Seconds",
              category: "Social Tips",
              date: "MAR 10, 2026",
              img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
            },
            {
              title: "Case Study: Scaling a SaaS Founder to 100k on LinkedIn",
              category: "Case Studies",
              date: "FEB 25, 2026",
              img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            },
            {
              title: "Why Silence is the Most Expensive Strategy in 2026",
              category: "Strategy",
              date: "FEB 12, 2026",
              img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop"
            }
          ].map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-black/5 rounded-[2rem] mb-8 overflow-hidden border border-black/5 group-hover:border-brand-primary/30 transition-all">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-xs uppercase tracking-widest text-brand-accent mb-4 font-medium">{post.category}</p>
              <h3 className="font-display text-3xl mb-6 uppercase tracking-wide group-hover:text-brand-primary transition-colors leading-tight">{post.title}</h3>
              <p className="text-xs opacity-40 font-medium uppercase tracking-widest">{post.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    setFormStatus('sending');
  };

  const handleIframeLoad = () => {
    if (formStatus === 'sending') {
      setFormStatus('success');
      formRef.current?.reset();
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 text-center relative overflow-hidden scroll-mt-28">
      {/* Hidden iframe for form submission */}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
        onLoad={handleIframeLoad}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-6xl md:text-[10rem] tracking-wide mb-16 leading-[0.92] text-[var(--text)] uppercase">
            READY TO BE <br /> <span className="text-brand-accent">UNSTOPPABLE</span>
          </h2>
          <p className="text-2xl md:text-3xl text-[var(--text)] opacity-60 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Join the elite circle of founders and influencers who are scaling their impact with Namma Socials.
          </p>

          <form
            ref={formRef}
            action="https://docs.google.com/forms/d/e/1FAIpQLSckTXjwCRCivl-nY__XlRJfYMIJgmYWdrOWOsINhX0fHKP_DA/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto mt-24 text-left space-y-10 glass p-12 rounded-[3rem] border-black/5 relative"
          >
            <div className="mb-8">
              <h3 className="font-display text-4xl mb-2 text-[var(--text)] opacity-80 uppercase tracking-wide">Get in touch</h3>
              <p className="text-lg font-light opacity-50">Fill in your details and we will get back to you within 24 hours.</p>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium opacity-40 uppercase tracking-widest ml-4">Full name</label>
              <input
                type="text"
                name="entry.747901820"
                required
                placeholder="Arun Kumar"
                className="w-full bg-[#2d2d2d] text-white border border-black/10 rounded-2xl px-6 py-5 outline-none focus:border-brand-primary/50 transition-all font-light text-lg placeholder:opacity-30"
              />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium opacity-40 uppercase tracking-widest ml-4">Contact number</label>
              <input
                type="tel"
                name="entry.641282988"
                required
                placeholder="+91 98765 43210"
                className="w-full bg-[#2d2d2d] text-white border border-black/10 rounded-2xl px-6 py-5 outline-none focus:border-brand-primary/50 transition-all font-light text-lg placeholder:opacity-30"
              />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium opacity-40 uppercase tracking-widest ml-4">Email address</label>
              <input
                type="email"
                name="entry.169231119"
                required
                placeholder="you@company.com"
                className="w-full bg-[#2d2d2d] text-white border border-black/10 rounded-2xl px-6 py-5 outline-none focus:border-brand-primary/50 transition-all font-light text-lg placeholder:opacity-30"
              />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium opacity-40 uppercase tracking-widest ml-4">Company or brand name</label>
              <input
                type="text"
                name="entry.713119553"
                required
                placeholder="Namma Socials"
                className="w-full bg-[#2d2d2d] text-white border border-black/10 rounded-2xl px-6 py-5 outline-none focus:border-brand-primary/50 transition-all font-light text-lg placeholder:opacity-30"
              />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium opacity-40 uppercase tracking-widest ml-4">How can we help you?</label>
              <textarea
                name="entry.570049765"
                required
                rows={4}
                placeholder="Tell us a little about what you are looking for..."
                className="w-full bg-[#2d2d2d] text-white border border-black/10 rounded-2xl px-6 py-5 outline-none focus:border-brand-primary/50 transition-all font-light text-lg resize-none placeholder:opacity-30"
              />
            </div>

            <motion.button
              type="submit"
              disabled={formStatus === 'sending'}
              whileHover={{ scale: 1.02, boxShadow: "0 0 60px rgba(128,0,128,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "w-full py-6 rounded-2xl font-display text-2xl uppercase tracking-wider transition-all duration-300 shadow-xl",
                formStatus === 'success' ? "bg-green-600 text-white" : "bg-brand-primary text-white shadow-brand-primary/20",
                formStatus === 'sending' && "opacity-70 cursor-not-allowed"
              )}
            >
              {formStatus === 'idle' && "Book Your Strategy Call"}
              {formStatus === 'sending' && "Sending..."}
              {formStatus === 'success' && "Thank You! We'll talk soon."}
              {formStatus === 'error' && "Error! Please try again."}
            </motion.button>

            <AnimatePresence>
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-16 left-0 right-0 text-center text-green-600 font-medium"
                >
                  Your message has been received!
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-6 border-t border-black/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <LogoWithText className="h-20 w-auto mb-8" />
          <p className="text-[var(--text)] opacity-40 text-lg max-w-sm mb-10 font-medium leading-snug">
            The ultimate visibility partner for the modern founder. Scaling influence, one post at a time.
          </p>
          <div className="flex gap-5">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-brand-primary transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-[var(--text)]" />
              </motion.a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-2xl mb-8 tracking-wide text-[var(--text)] uppercase">Company</h4>
          <ul className="space-y-5 text-[var(--text)] opacity-50 font-light text-lg">
            <li><a href="#" className="hover:text-brand-accent transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Our Team</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-2xl mb-8 tracking-wide text-[var(--text)] uppercase">Legal</h4>
          <ul className="space-y-5 text-[var(--text)] opacity-50 font-light text-lg">
            <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-black/5 text-center text-[var(--text)] opacity-20 text-sm font-medium tracking-[0.18em] uppercase">
        © {new Date().getFullYear()} Namma Socials. All rights reserved.
      </div>
    </footer>
  );
};

const TweetCard = ({ name, handle, content, date }: { name: string, handle: string, content: string, date: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.02, rotate: 1 }}
    className="glass p-8 rounded-[2rem] flex flex-col gap-4 border-black/5 hover:border-brand-primary/30 transition-all duration-300"
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center font-black text-brand-accent">
          {name[0]}
        </div>
        <div>
          <p className="font-display text-xl leading-none text-[var(--text)] uppercase tracking-wide">{name}</p>
          <p className="text-[var(--text)] opacity-40 text-sm font-light">@{handle}</p>
        </div>
      </div>
      <Twitter className="w-5 h-5 text-brand-accent" />
    </div>
    <p className="text-lg font-light leading-relaxed text-[var(--text)] opacity-80">
      {content}
    </p>
    <p className="text-[10px] text-[var(--text)] opacity-20 font-medium uppercase tracking-[0.15em]">
      {date}
    </p>
  </motion.div>
);

const WallOfLove = () => {
  return (
    <section id="testimonials" className="pb-24 px-6 relative overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-6xl md:text-9xl tracking-wide mb-8 leading-[0.92] text-[var(--text)] uppercase">
            THE <span className="text-brand-accent">WALL</span> OF LOVE
          </h2>
          <p className="text-[var(--text)] opacity-50 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            See what the world's most ambitious founders are saying about their journey with Namma Socials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TweetCard
            name="Alex Rivera"
            handle="arivera_builds"
            content="Working with @NammaSocials was the best decision I made this year. My LinkedIn reach went from 2k to 150k in just 3 months. Authority is the new currency. 🚀"
            date="MAR 12, 2026"
          />
          <TweetCard
            name="Sarah Chen"
            handle="sarah_designs"
            content="The ghostwriting team at Namma is insane. They captured my voice perfectly. I'm getting inbound leads I never thought possible. Absolute game changer."
            date="FEB 28, 2026"
          />
          <TweetCard
            name="Jordan Smith"
            handle="jsmith_v"
            content="If you're a founder and you're not building a personal brand, you're leaving money on the table. Namma Socials makes it effortless. Highly recommend! 💎"
            date="JAN 15, 2026"
          />
        </div>
      </div>
    </section>
  );
};

const ProblemSpace = () => {
  return (
    <section className="py-24 px-6 bg-brand-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-24"
        >
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wide leading-tight">
              Most founders don’t run out of ideas. <br />
              <span className="text-brand-accent">They run out of certainty.</span>
            </h2>
            <p className="text-xl md:text-2xl font-light opacity-60 leading-relaxed">
              So they save half-written notes. They overthink one LinkedIn post for three days. They sound confident in meetings, then freeze when it’s time to explain their own work online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              "“I’ll post when it’s clearer.”",
              "“Once this settles, I’ll talk about it.”",
              "“Others say it better anyway.”"
            ].map((quote, i) => (
              <div key={i} className="glass p-8 rounded-3xl font-light text-lg opacity-60 border-black/5">
                {quote}
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <p className="text-xl md:text-2xl font-light opacity-60 leading-relaxed">
              But weeks pass. Good work keeps happening. <br />
              And none of it turns into words.
            </p>
            <p className="font-display text-4xl md:text-6xl uppercase tracking-wide text-brand-primary">
              That gap, between lived work and visible work. <br />
              That’s where things get heavy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Methodology = () => {
  const roadmapSteps = [
    { title: "Discovery", desc: "We listen first. No templates, just deep diving into your last week.", icon: "01" },
    { title: "Structuring", desc: "We turn your raw thoughts into a cohesive brand narrative.", icon: "02" },
    { title: "System Building", desc: "We build the engine so you're not dependent on motivation.", icon: "03" },
    { title: "Calm Execution", desc: "Posting without dread. Systems over motivation.", icon: "04" }
  ];

  return (
    <section className="py-24 px-6 bg-brand-dark/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="relative mb-16">
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1 } }
              }}
              className="font-display text-5xl md:text-8xl tracking-tight leading-[0.85] mb-12 uppercase"
            >
              WE DON'T <span className="lowercase text-brand-accent">extract</span> STORIES. <br />
              WE <span className="lowercase text-brand-accent">notice</span> THEM <br /> WITH YOU.
            </motion.h2>
          </div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="text-xl md:text-2xl font-light opacity-60 leading-relaxed mb-12 max-w-xl"
          >
            Namma Socials exists inside that gap. Not to make you louder. Not to give you a persona. Not to turn you into a content machine.
          </motion.p>
          <div className="space-y-6">
            {[
              "Your last week matters more than a content calendar.",
              "Your doubts are data, not weaknesses.",
              "Your quiet moments are usually the ones worth sharing."
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
                className="flex items-center gap-4 text-lg font-light"
              >
                <div className="w-2 h-2 bg-brand-accent rounded-full" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative pl-12 md:pl-20">
          {/* Curved Roadmap Line */}
          <svg className="absolute left-0 top-0 w-24 h-full pointer-events-none opacity-20" viewBox="0 0 100 800" preserveAspectRatio="none">
            <path
              d="M 50 0 Q 100 200 50 400 T 50 800"
              fill="none"
              stroke="url(#roadmap-gradient)"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            <defs>
              <linearGradient id="roadmap-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--brand-primary)" />
                <stop offset="50%" stopColor="var(--brand-accent)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-16 relative z-10">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-display text-4xl uppercase tracking-wider mb-12 text-brand-accent"
            >
              Our Goal
            </motion.h3>

            {roadmapSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="relative group"
              >
                {/* Roadmap Dot */}
                <div className="absolute -left-12 md:-left-20 top-2 w-6 h-6 rounded-full bg-brand-dark border-2 border-brand-primary group-hover:bg-brand-primary transition-all duration-300 z-10 shadow-[0_0_15px_rgba(128,0,128,0.5)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-accent group-hover:bg-white transition-colors" />
                </div>

                <div className="glass p-8 rounded-3xl border-black/5 hover:border-brand-primary/30 transition-all duration-500 hover:translate-x-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-display text-xl text-brand-primary opacity-40">{step.icon}</span>
                    <h4 className="font-display text-2xl uppercase tracking-wide">{step.title}</h4>
                  </div>
                  <p className="text-lg font-light opacity-60 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />
      <Hero />
      <ProblemSpace />
      <Methodology />
      <Services />
      <Tools />
      <AboutSection />
      <WallOfLove />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}
