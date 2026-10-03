import React, { useState, useEffect, useRef } from 'react';

const Icons = {
  Bolt: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Microchip: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  Wave: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12s3-7 7-7 7 14 12 7" />
    </svg>
  ),
  Calculator: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  GraduationCap: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  School: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Code: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Envelope: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Github: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Linkedin: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  ),
  ExternalLink: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  Moon: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  Sun: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Menu: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  X: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  ArrowUp: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  ),
  Check: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  ),
  FileText: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  DraftingCompass: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a2 2 0 100 4 2 2 0 000-4zM12 6v14m-7 2l7-10 7 10" />
    </svg>
  )
};

const PROJECTS_DATA = [
  {
    id: 'p1',
    title: 'IoT Smart Power & Grid Meter',
    category: 'Microcontroller & IoT',
    badge: 'ESP32 + Multisim',
    description: 'Designed an ESP32 microcontroller power monitoring system with real-time AC current/voltage sensors (PZEM-004T), simulated in Multisim and LTspice before hardware assembly.',
    specs: ['ESP32', 'Multisim', 'LTspice', 'Embedded C', 'PZEM Sensor'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    details: 'Features high-speed RMS current sampling, OLED display driver via I2C, over-current relay tripping protection, and HTTP telemetry transmission.'
  },
  {
    id: 'p2',
    title: 'STM32 Signal Synthesizer & FFT',
    category: 'Microcontroller & DSP',
    badge: 'ARM Cortex + MATLAB',
    description: 'Generates sine, square, and triangular waveforms using STM32 DAC and DMA. Integrated MATLAB algorithms for FFT signal spectrum analysis and low-pass filter design.',
    specs: ['STM32F4', 'MATLAB', 'Keil uVision', 'DAC / DMA', 'Simulink'],
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    details: 'Achieved sub-10ns pulse resolution with direct memory access (DMA) double-buffering and dynamic lookup table frequency scaling.'
  },
  {
    id: 'p3',
    title: 'PID Speed Controller & Drive',
    category: 'Control & Simulation',
    badge: 'Simulink + LTspice',
    description: 'Closed-loop speed control of DC motors using optical encoder feedback and a tuned PID algorithm. Simulated closed-loop step response in MATLAB Simulink and tested with LTspice PWM drivers.',
    specs: ['MATLAB Simulink', 'LTspice', 'Arduino/PIC', 'Optocoupler', 'H-Bridge'],
    img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    details: 'Tested under step loads with 1.2% overshoot using Zieger-Nichols manual tuning, verifying anti-windup integrator algorithms in C++.'
  },
  {
    id: 'p4',
    title: 'AutoCAD Smart Relay Panel',
    category: 'CAD & Circuit Design',
    badge: 'AutoCAD Electrical',
    description: 'Comprehensive single-line diagrams and panel schematics designed in AutoCAD Electrical with microcontroller-driven relay switching logic and optocoupler isolation circuits.',
    specs: ['AutoCAD Electrical', 'Proteus', 'Relay Switching', 'ISO Schematics'],
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    details: 'Includes wire schedule numbering, terminal block connection tables, contactor interlocks, and full 2D cabinet layout modeling.'
  },
  {
    id: 'p5',
    title: 'Autonomous Line & Obstacle Bot',
    category: 'Robotics & Hardware',
    badge: 'ATmega328P + C',
    description: 'Microcontroller-driven autonomous robot using IR sensor arrays and Ultrasonic range sensors with custom interrupt-driven C code for real-time obstacle avoidance.',
    specs: ['ATmega328P', 'Embedded C', 'L298N Driver', 'Ultrasonic HC-SR04'],
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    details: 'Implemented timer-interrupt PWM differential steering for fast path tracking and dynamic obstacle re-routing algorithms.'
  },
  {
    id: 'p6',
    title: 'DC-DC Boost Converter Simulation',
    category: 'Power Electronics',
    badge: 'LTspice & Multisim',
    description: 'DC-DC Boost Converter design with switching frequency optimizations and ripple voltage minimization. Conducted parameter sweeps in LTspice and Multisim.',
    specs: ['LTspice', 'NI Multisim', 'MOSFET Gate Driver', 'LC Filter'],
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    details: 'Designed 12V to 24V step-up converter with continuous conduction mode (CCM) verification and efficiency analysis over 91% efficiency.'
  }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<(typeof PROJECTS_DATA)[number] | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState(false);

  // EEE Calculator state
  const [calcTab, setCalcTab] = useState('ohms');
  const [ohmsV, setOhmsV] = useState(5);
  const [ohmsR, setOhmsR] = useState(220);
  const [rcR, setRcR] = useState(10000);
  const [rcC, setRcC] = useState(0.1); // uF
  const [ledVcc, setLedVcc] = useState(5);
  const [ledVf, setLedVf] = useState(2.0);
  const [ledIf, setLedIf] = useState(15); // mA

  // Custom Cursor Tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Back to top helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculations
  const currentI = ohmsR > 0 ? (ohmsV / ohmsR) : 0;
  const powerW = ohmsV * currentI;
  const rcFc = (rcR > 0 && rcC > 0) ? (1 / (2 * Math.PI * rcR * (rcC * 1e-6))) : 0;
  const ledR = (ledVcc > ledVf && ledIf > 0) ? ((ledVcc - ledVf) / (ledIf / 1000)) : 0;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#1C1917] text-gray-100' : 'bg-[#FAF8F5] text-gray-900'} font-sans relative overflow-x-hidden selection:bg-amber-500 selection:text-black`}>

      {/* Custom Retro Amber Cursor Follower */}
      <div 
        className={`fixed top-0 left-0 pointer-events-none rounded-full z-50 transition-transform duration-75 ease-out border ${darkMode ? 'border-amber-400 bg-amber-500/20' : 'border-amber-600 bg-amber-600/20'} ${cursorHover ? 'w-12 h-12 -ml-6 -mt-6' : 'w-6 h-6 -ml-3 -mt-3'}`}
        style={{ transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)` }}
      />

      {/* Retro Grid Background Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* Navigation Bar */}
      <header className={`fixed top-0 left-0 w-full z-40 backdrop-blur-md border-b ${darkMode ? 'bg-[#1C1917]/90 border-amber-900/30' : 'bg-[#FAF8F5]/90 border-amber-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => { setActiveTab('home'); scrollToTop(); }}
            onMouseEnter={() => setCursorHover(true)}
            onMouseLeave={() => setCursorHover(false)}
            className="flex items-center space-x-2 font-mono font-bold text-lg sm:text-xl tracking-wider text-amber-500"
          >
            <span className="text-amber-500">&lt;</span>
            <span className={darkMode ? 'text-white' : 'text-stone-900'}>SHADMAN</span>
            <span className="text-amber-500">.EEE/&gt;</span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-mono tracking-wide">
            {[
              { id: 'home', label: '01. Home' },
              { id: 'about', label: '02. About' },
              { id: 'skills', label: '03. Skills & Software' },
              { id: 'projects', label: '04. Projects' },
              { id: 'workbench', label: '05. EEE Workbench' },
              { id: 'contact', label: '06. Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); scrollToTop(); }}
                onMouseEnter={() => setCursorHover(true)}
                onMouseLeave={() => setCursorHover(false)}
                className={`transition-colors py-1 ${activeTab === item.id ? 'text-amber-500 font-semibold border-b-2 border-amber-500' : darkMode ? 'text-gray-300 hover:text-amber-400' : 'text-gray-700 hover:text-amber-600'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-lg border transition-all ${darkMode ? 'border-amber-900/40 bg-stone-900 text-amber-400 hover:bg-stone-800' : 'border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100'}`}
              title="Toggle Theme"
            >
              {darkMode ? <Icons.Sun /> : <Icons.Moon />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-lg border ${darkMode ? 'border-stone-800 bg-stone-900 text-white' : 'border-amber-200 bg-white text-stone-900'}`}
            >
              {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-4 py-6 space-y-3 font-mono text-sm ${darkMode ? 'bg-stone-900 border-amber-900/40' : 'bg-white border-amber-200'}`}>
            {[
              { id: 'home', label: '01. Home' },
              { id: 'about', label: '02. About & Education' },
              { id: 'skills', label: '03. Skills & Software' },
              { id: 'projects', label: '04. Engineering Projects' },
              { id: 'workbench', label: '05. EEE Workbench' },
              { id: 'contact', label: '06. Get in Touch' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); scrollToTop(); }}
                className={`block w-full text-left px-3 py-2.5 rounded-md ${activeTab === item.id ? 'bg-amber-500/10 text-amber-500 font-bold' : darkMode ? 'text-gray-300 hover:bg-stone-800' : 'text-gray-800 hover:bg-amber-50'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Sections Container */}
      <main className="pt-28 pb-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* PAGE 1: HOME SECTION */}
        {activeTab === 'home' && (
          <div className="space-y-24">
            {/* Split Hero Section */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
              
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-500 font-mono text-xs font-semibold tracking-wider">
                  <Icons.Bolt className="w-4 h-4 mr-2 animate-pulse" />
                  ELECTRICAL & ELECTRONIC ENGINEERING
                </div>

                <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight leading-tight">
                  Hello, I'm <span className="text-amber-500 underline decoration-amber-500/30 underline-offset-8">Shadman</span>
                </h1>

                <p className="text-lg sm:text-xl font-mono text-amber-500/90 font-medium">
                  Embedded Systems & Microcontrollers • Circuit Simulation & Hardware
                </p>

                <p className={`text-base leading-relaxed max-w-2xl ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                  Undergraduate EEE student at <span className="font-semibold text-amber-500">Jamalpur Science and Technology University</span> (Session 2024-2025, 2nd Year 1st Semester). Specialized in microcontrollers (STM32, ESP32, Arduino, PIC), analog & digital circuit simulation using <span className="font-semibold text-amber-500">NI Multisim, LTspice, MATLAB / Simulink, and AutoCAD Electrical</span>.
                </p>

                {/* Microcontroller Pills */}
                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                  <span className={`px-3 py-1.5 rounded border ${darkMode ? 'bg-stone-900/80 border-stone-800 text-stone-300' : 'bg-amber-100/60 border-amber-200 text-stone-800'}`}>
                    <Icons.Microchip className="w-3.5 h-3.5 inline mr-1 text-amber-500" /> Microcontrollers
                  </span>
                  <span className={`px-3 py-1.5 rounded border ${darkMode ? 'bg-stone-900/80 border-stone-800 text-stone-300' : 'bg-amber-100/60 border-amber-200 text-stone-800'}`}>
                    <Icons.Wave className="w-3.5 h-3.5 inline mr-1 text-amber-500" /> LTspice & Multisim
                  </span>
                  <span className={`px-3 py-1.5 rounded border ${darkMode ? 'bg-stone-900/80 border-stone-800 text-stone-300' : 'bg-amber-100/60 border-amber-200 text-stone-800'}`}>
                    <Icons.Code className="w-3.5 h-3.5 inline mr-1 text-amber-500" /> MATLAB & C/C++
                  </span>
                  <span className={`px-3 py-1.5 rounded border ${darkMode ? 'bg-stone-900/80 border-stone-800 text-stone-300' : 'bg-amber-100/60 border-amber-200 text-stone-800'}`}>
                    <Icons.DraftingCompass className="w-3.5 h-3.5 inline mr-1 text-amber-500" /> AutoCAD Electrical
                  </span>
                </div>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 font-mono text-sm">
                  <button
                    onClick={() => { setActiveTab('projects'); scrollToTop(); }}
                    className="px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-black font-bold transition-all shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Explore EEE Projects</span>
                    <Icons.ExternalLink />
                  </button>
                  <button
                    onClick={() => setCvModalOpen(true)}
                    className={`px-6 py-3.5 rounded-lg border font-semibold transition-all flex items-center justify-center space-x-2 ${darkMode ? 'border-amber-500/40 bg-stone-900 hover:border-amber-500 text-amber-400' : 'border-amber-300 bg-white hover:bg-amber-50 text-stone-900'}`}
                  >
                    <Icons.FileText />
                    <span>View Academic CV</span>
                  </button>
                </div>
              </div>

              {/* Photo Frame Right Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-700 blur opacity-40 group-hover:opacity-75 transition duration-500" />
                  <div className={`relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-amber-500/50 ${darkMode ? 'bg-stone-900' : 'bg-amber-50'} shadow-2xl flex flex-col justify-between p-2`}>
                    <img 
                      src="shadman.jpeg" 
                      alt="Shadman" 
                      className="w-full h-72 sm:h-80 object-cover object-top rounded-xl border border-amber-500/20"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = "shadman.jpeg"; // Fallback image
                      }}
                    />
                    <div className={`p-2.5 rounded-lg border ${darkMode ? 'bg-stone-950/90 border-stone-800' : 'bg-white/90 border-amber-200'} text-xs font-mono flex items-center justify-between`}>
                      <div>
                        <span className="font-bold text-amber-500">JSTU EEE</span>
                        <span className={`block text-[11px] ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>Session 2024-2025 (2-1)</span>
                      </div>
                      <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-500 font-bold border border-amber-500/30">
                        Tangail, BD
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </section>

            {/* Core Stats Counter */}
            <section className={`grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border ${darkMode ? 'bg-stone-900/50 border-amber-900/30' : 'bg-amber-50/80 border-amber-200'} font-mono`}>
              <div className="text-center space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold text-amber-500">2-1</p>
                <p className={`text-xs ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>Current Semester (JSTU)</p>
              </div>
              <div className="text-center space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold text-amber-500">6+</p>
                <p className={`text-xs ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>Embedded & Sim Projects</p>
              </div>
              <div className="text-center space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold text-amber-500">4+</p>
                <p className={`text-xs ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>Microcontroller Platforms</p>
              </div>
              <div className="text-center space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold text-amber-500">100%</p>
                <p className={`text-xs ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>Dedicated Engineering</p>
              </div>
            </section>

            {/* Quick Featured Projects Teaser */}
            <section className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b pb-4 border-amber-500/20">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold">Featured Hardware & Simulations</h2>
                  <p className={`text-sm font-mono mt-1 ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>Microcontrollers, EDA Tools & Signal Analysis</p>
                </div>
                <button 
                  onClick={() => { setActiveTab('projects'); scrollToTop(); }}
                  className="mt-4 md:mt-0 font-mono text-xs text-amber-500 hover:text-amber-400 font-bold flex items-center space-x-1"
                >
                  <span>View All Projects</span>
                  <Icons.ExternalLink />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PROJECTS_DATA.slice(0, 3).map((item) => (
                  <div key={item.id} className={`rounded-xl border overflow-hidden hover:border-amber-500 transition-all flex flex-col justify-between ${darkMode ? 'bg-stone-900/70 border-stone-800' : 'bg-white border-amber-200'}`}>
                    <img src={item.img} alt={item.title} className="w-full h-48 object-cover border-b border-amber-500/20" />
                    <div className="p-5 space-y-3">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        {item.badge}
                      </span>
                      <h3 className="text-lg font-bold font-serif">{item.title}</h3>
                      <p className={`text-xs leading-relaxed line-clamp-3 ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>{item.description}</p>
                    </div>
                    <div className={`p-4 border-t font-mono text-xs flex justify-between items-center ${darkMode ? 'bg-stone-950/40 border-stone-800' : 'bg-amber-50/50 border-amber-100'}`}>
                      <span className="text-amber-500 font-semibold">{item.category}</span>
                      <button 
                        onClick={() => setSelectedImage(item)}
                        className="text-stone-400 hover:text-white"
                      >
                        Inspect
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* PAGE 2: ABOUT & EDUCATION */}
        {activeTab === 'about' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-mono text-xs text-amber-500 tracking-widest uppercase font-semibold">Background & Qualifications</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold">Academic Journey</h1>
              <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
            </div>

            {/* Academic Timeline Cards */}
            <div className="max-w-4xl mx-auto space-y-8 relative">
              <div className={`p-6 sm:p-8 rounded-2xl border ${darkMode ? 'bg-stone-900 border-amber-900/40' : 'bg-white border-amber-200'} shadow-xl space-y-4`}>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/30">
                      <Icons.GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-500 font-semibold">Undergraduate Studies</span>
                      <h3 className="text-xl font-bold font-serif mt-1">Jamalpur Science and Technology University</h3>
                    </div>
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded bg-stone-800 text-amber-400 border border-amber-500/30">Session 2024-2025</span>
                </div>
                <p className="text-amber-500 font-mono text-sm font-semibold">
                  B.Sc. in Electrical & Electronic Engineering (EEE) • Currently in 2nd Year 1st Semester (2-1)
                </p>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                  Deepening core expertise in microprocessors, electromagnetic field theory, analog and digital integrated circuits, matrix signal processing, and numerical analysis. Hands-on practical experimentation in university laboratories utilizing NI Multisim, LTspice, and MATLAB.
                </p>
              </div>

              {/* HSC */}
              <div className={`p-6 sm:p-8 rounded-2xl border ${darkMode ? 'bg-stone-900 border-amber-900/40' : 'bg-white border-amber-200'} shadow-xl space-y-4`}>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/30">
                      <Icons.School className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-500 font-semibold">Higher Secondary</span>
                      <h3 className="text-xl font-bold font-serif mt-1">Higher Secondary Certificate (HSC)</h3>
                    </div>
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded bg-stone-800 text-amber-400 border border-amber-500/30">Tangail, Bangladesh</span>
                </div>
                <p className="text-amber-500 font-mono text-sm font-semibold">Science Discipline</p>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                  Specialized in advanced physics, calculus, matrix vector mathematics, and chemistry as core foundational prerequisites for electrical engineering.
                </p>
              </div>

              {/* SSC */}
              <div className={`p-6 sm:p-8 rounded-2xl border ${darkMode ? 'bg-stone-900 border-amber-900/40' : 'bg-white border-amber-200'} shadow-xl space-y-4`}>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/30">
                      <Icons.School className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-500 font-semibold">Secondary Education</span>
                      <h3 className="text-xl font-bold font-serif mt-1">Bindu Bashini Government Boys' High School</h3>
                    </div>
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded bg-stone-800 text-amber-400 border border-amber-500/30">Tangail, Bangladesh</span>
                </div>
                <p className="text-amber-500 font-mono text-sm font-semibold">Secondary School Certificate (SSC) • Science Group</p>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                  Earned early academic distinction with a strong passion for physics, electronics kits, mathematical problem solving, and introductory computer logic.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 3: SKILLS & SOFTWARE */}
        {activeTab === 'skills' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-mono text-xs text-amber-500 tracking-widest uppercase font-semibold">Technical Arsenal</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold">Skills, Hardware & EDA Software</h1>
              <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1: Microcontrollers */}
              <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-amber-200'} space-y-4 shadow-lg hover:border-amber-500 transition-all`}>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/30">
                  <Icons.Microchip className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif">Microcontrollers & Hardware</h3>
                <ul className="space-y-3 font-mono text-xs">
                  <li className="flex justify-between items-center pb-2 border-b border-amber-500/10">
                    <span>STM32 & ARM Cortex</span>
                    <span className="text-amber-500 font-bold">Advanced</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-amber-500/10">
                    <span>ESP32 / ESP8266 (IoT)</span>
                    <span className="text-amber-500 font-bold">Proficient</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-amber-500/10">
                    <span>Arduino UNO/Mega/Nano</span>
                    <span className="text-amber-500 font-bold">Expert</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-amber-500/10">
                    <span>PIC & ATmega Microcontrollers</span>
                    <span className="text-amber-500 font-bold">Intermediate</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Sensor Protocols (I2C, SPI, UART, ADC)</span>
                    <span className="text-amber-500 font-bold">Proficient</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Simulation */}
              <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-amber-200'} space-y-4 shadow-lg hover:border-amber-500 transition-all`}>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/30">
                  <Icons.Wave className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif">Simulation & CAD EDA</h3>
                <ul className="space-y-3 font-mono text-xs">
                  <li className="flex justify-between items-center pb-2 border-b border-amber-500/10">
                    <span>NI Multisim</span>
                    <span className="text-amber-500 font-bold">Analog/Digital</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-amber-500/10">
                    <span>LTspice</span>
                    <span className="text-amber-500 font-bold">Transient/AC</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-amber-500/10">
                    <span>MATLAB & Simulink</span>
                    <span className="text-amber-500 font-bold">Signals & DSP</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-amber-500/10">
                    <span>AutoCAD Electrical</span>
                    <span className="text-amber-500 font-bold">Schematics</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Proteus VSM</span>
                    <span className="text-amber-500 font-bold">MCU Simulation</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Programming */}
              <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-amber-200'} space-y-4 shadow-lg hover:border-amber-500 transition-all`}>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/30">
                  <Icons.Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif">Programming & Domain</h3>
                <ul className="space-y-3 font-mono text-xs">
                  <li className="flex justify-between items-center pb-2 border-b border-amber-500/10">
                    <span>Embedded C / C++</span>
                    <span className="text-amber-500 font-bold">Primary Language</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-amber-500/10">
                    <span>MATLAB Scripting</span>
                    <span className="text-amber-500 font-bold">Data & Analysis</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-amber-500/10">
                    <span>Circuit Laws & Theorems</span>
                    <span className="text-amber-500 font-bold">Core Knowledge</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-amber-500/10">
                    <span>Digital Logic Design</span>
                    <span className="text-amber-500 font-bold">Combinational Logic</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Power Electronics Basics</span>
                    <span className="text-amber-500 font-bold">PWM & Conversion</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* PAGE 4: ENGINEERING PROJECTS */}
        {activeTab === 'projects' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-mono text-xs text-amber-500 tracking-widest uppercase font-semibold">Hardware & Simulation Works</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold">Engineering Projects</h1>
              <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:border-amber-500 shadow-xl flex flex-col justify-between ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-amber-200'}`}>
                  <div className="relative group">
                    <img src={proj.img} alt={proj.title} className="w-full h-52 object-cover border-b border-amber-500/20" />
                    <button
                      onClick={() => setSelectedImage(proj)}
                      className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-mono text-xs text-amber-400 font-bold space-x-2"
                    >
                      <Icons.ExternalLink />
                      <span>Inspect Project Details</span>
                    </button>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-amber-500/10 text-amber-500 font-bold border border-amber-500/30">
                        {proj.badge}
                      </span>
                      <span className="text-xs font-mono text-stone-500">{proj.category}</span>
                    </div>

                    <h3 className="text-xl font-bold font-serif">{proj.title}</h3>
                    <p className={`text-xs leading-relaxed ${darkMode ? 'text-stone-300' : 'text-stone-600'}`}>{proj.description}</p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.specs.map((spec, i) => (
                        <span key={i} className={`text-[10px] font-mono px-2 py-0.5 rounded border ${darkMode ? 'bg-stone-950/80 border-stone-800 text-stone-400' : 'bg-amber-50 border-amber-200 text-stone-700'}`}>
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`p-4 border-t font-mono text-xs flex justify-between items-center ${darkMode ? 'bg-stone-950/60 border-stone-800' : 'bg-amber-50/60 border-amber-100'}`}>
                    <span className="text-amber-500 flex items-center">
                      <Icons.Check className="mr-1" /> Tested & Verified
                    </span>
                    <button
                      onClick={() => setSelectedImage(proj)}
                      className="hover:underline font-bold text-amber-400"
                    >
                      View Specs →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 5: EEE WORKBENCH & CALCULATORS */}
        {activeTab === 'workbench' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-mono text-xs text-amber-500 tracking-widest uppercase font-semibold">Interactive Circuit Workbench</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold">EEE Calculator Suite</h1>
              <p className={`text-xs font-mono ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                Test interactive circuit equations directly on this workbench.
              </p>
              <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
            </div>

            <div className={`max-w-4xl mx-auto rounded-2xl border p-6 sm:p-8 ${darkMode ? 'bg-stone-900 border-amber-900/40' : 'bg-white border-amber-200'} shadow-2xl`}>
              
              {/* Tab Selector */}
              <div className="flex flex-wrap border-b border-amber-500/20 mb-8 font-mono text-xs sm:text-sm gap-2">
                <button
                  onClick={() => setCalcTab('ohms')}
                  className={`py-2.5 px-4 rounded-t-lg font-bold transition-all ${calcTab === 'ohms' ? 'bg-amber-500 text-black' : 'text-stone-400 hover:text-amber-400'}`}
                >
                  Ohm's Law & Power
                </button>
                <button
                  onClick={() => setCalcTab('rc')}
                  className={`py-2.5 px-4 rounded-t-lg font-bold transition-all ${calcTab === 'rc' ? 'bg-amber-500 text-black' : 'text-stone-400 hover:text-amber-400'}`}
                >
                  RC Filter Cutoff (fc)
                </button>
                <button
                  onClick={() => setCalcTab('led')}
                  className={`py-2.5 px-4 rounded-t-lg font-bold transition-all ${calcTab === 'led' ? 'bg-amber-500 text-black' : 'text-stone-400 hover:text-amber-400'}`}
                >
                  MCU LED Resistor
                </button>
              </div>

              {/* Ohm's Law Calculator */}
              {calcTab === 'ohms' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
                    <div>
                      <label className="block text-amber-500 font-bold mb-2">Voltage V (Volts)</label>
                      <input
                        type="number"
                        value={ohmsV}
                        onChange={(e) => setOhmsV(parseFloat(e.target.value) || 0)}
                        className={`w-full p-3 rounded-lg border font-mono ${darkMode ? 'bg-stone-950 border-stone-800 text-white' : 'bg-amber-50 border-amber-200 text-stone-900'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-amber-500 font-bold mb-2">Resistance R (Ohms Ω)</label>
                      <input
                        type="number"
                        value={ohmsR}
                        onChange={(e) => setOhmsR(parseFloat(e.target.value) || 0.001)}
                        className={`w-full p-3 rounded-lg border font-mono ${darkMode ? 'bg-stone-950 border-stone-800 text-white' : 'bg-amber-50 border-amber-200 text-stone-900'}`}
                      />
                    </div>
                  </div>

                  <div className={`p-6 rounded-xl border font-mono ${darkMode ? 'bg-stone-950 border-amber-900/40' : 'bg-amber-50/80 border-amber-200'} space-y-3`}>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-stone-400">Calculated Current (I = V / R):</span>
                      <span className="text-amber-500 font-bold text-base sm:text-lg">{currentI.toFixed(4)} A ({(currentI * 1000).toFixed(2)} mA)</span>
                    </div>
                    <div className="flex justify-between items-center text-sm pt-2 border-t border-amber-500/20">
                      <span className="text-stone-400">Power Dissipation (P = V × I):</span>
                      <span className="text-amber-500 font-bold text-base sm:text-lg">{powerW.toFixed(3)} W ({(powerW * 1000).toFixed(1)} mW)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* RC Cutoff Calculator */}
              {calcTab === 'rc' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
                    <div>
                      <label className="block text-amber-500 font-bold mb-2">Resistance R (Ohms Ω)</label>
                      <input
                        type="number"
                        value={rcR}
                        onChange={(e) => setRcR(parseFloat(e.target.value) || 0)}
                        className={`w-full p-3 rounded-lg border font-mono ${darkMode ? 'bg-stone-950 border-stone-800 text-white' : 'bg-amber-50 border-amber-200 text-stone-900'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-amber-500 font-bold mb-2">Capacitance C (Microfarads µF)</label>
                      <input
                        type="number"
                        value={rcC}
                        step="0.01"
                        onChange={(e) => setRcC(parseFloat(e.target.value) || 0)}
                        className={`w-full p-3 rounded-lg border font-mono ${darkMode ? 'bg-stone-950 border-stone-800 text-white' : 'bg-amber-50 border-amber-200 text-stone-900'}`}
                      />
                    </div>
                  </div>

                  <div className={`p-6 rounded-xl border font-mono ${darkMode ? 'bg-stone-950 border-amber-900/40' : 'bg-amber-50/80 border-amber-200'}`}>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-stone-400">Cutoff Frequency fc = 1 / (2π · R · C):</span>
                      <span className="text-amber-500 font-bold text-base sm:text-lg">
                        {rcFc > 1000 ? `${(rcFc / 1000).toFixed(2)} kHz` : `${rcFc.toFixed(2)} Hz`}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* LED Current Limiting Calculator */}
              {calcTab === 'led' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                    <div>
                      <label className="block text-amber-500 font-bold mb-2">Supply Vcc (V)</label>
                      <input
                        type="number"
                        value={ledVcc}
                        onChange={(e) => setLedVcc(parseFloat(e.target.value) || 0)}
                        className={`w-full p-3 rounded-lg border font-mono ${darkMode ? 'bg-stone-950 border-stone-800 text-white' : 'bg-amber-50 border-amber-200 text-stone-900'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-amber-500 font-bold mb-2">LED Forward Vf (V)</label>
                      <input
                        type="number"
                        value={ledVf}
                        step="0.1"
                        onChange={(e) => setLedVf(parseFloat(e.target.value) || 0)}
                        className={`w-full p-3 rounded-lg border font-mono ${darkMode ? 'bg-stone-950 border-stone-800 text-white' : 'bg-amber-50 border-amber-200 text-stone-900'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-amber-500 font-bold mb-2">Desired Current (mA)</label>
                      <input
                        type="number"
                        value={ledIf}
                        onChange={(e) => setLedIf(parseFloat(e.target.value) || 0)}
                        className={`w-full p-3 rounded-lg border font-mono ${darkMode ? 'bg-stone-950 border-stone-800 text-white' : 'bg-amber-50 border-amber-200 text-stone-900'}`}
                      />
                    </div>
                  </div>

                  <div className={`p-6 rounded-xl border font-mono ${darkMode ? 'bg-stone-950 border-amber-900/40' : 'bg-amber-50/80 border-amber-200'}`}>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-stone-400">Required Series Resistor:</span>
                      <span className="text-amber-500 font-bold text-base sm:text-lg">
                        {ledR > 0 ? `${ledR.toFixed(1)} Ω (Nearest standard: 220 Ω)` : 'Invalid Voltages'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* PAGE 6: CONTACT */}
        {activeTab === 'contact' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-mono text-xs text-amber-500 tracking-widest uppercase font-semibold">Get in Touch</span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold">Contact & Collaboration</h1>
              <p className={`text-xs font-mono ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                Open for microcontroller project inquiries, circuit simulation advice, and academic discussions.
              </p>
              <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
              
              <div className="lg:col-span-5 space-y-6">
                <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-amber-200'} space-y-2`}>
                  <p className="text-xs font-mono text-amber-500 uppercase font-bold">University Address</p>
                  <p className="font-bold text-base font-serif">Jamalpur Science and Technology University</p>
                  <p className="text-xs text-stone-400 font-mono">Department of EEE • Session 2024-2025 (2-1)</p>
                </div>

                <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-amber-200'} space-y-2`}>
                  <p className="text-xs font-mono text-amber-500 uppercase font-bold">Hometown</p>
                  <p className="font-bold text-base font-serif">Tangail / Jamalpur, Bangladesh</p>
                  <p className="text-xs text-stone-400 font-mono">Bindu Bashini Govt Boys' High School Alumni</p>
                </div>

                <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-stone-900 border-stone-800' : 'bg-white border-amber-200'} space-y-2`}>
                  <p className="text-xs font-mono text-amber-500 uppercase font-bold">Direct Communication</p>
                  <p className="font-bold text-base font-mono text-amber-400">shadman.eee@jstu.edu.bd</p>
                </div>
              </div>

              {/* Terminal Form */}
              <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border ${darkMode ? 'bg-stone-900 border-amber-900/40' : 'bg-white border-amber-200'} shadow-2xl space-y-6`}>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                    setTimeout(() => setFormSubmitted(false), 5000);
                  }}
                  className="space-y-4 font-mono text-xs"
                >
                  <div>
                    <label className="block text-amber-500 font-bold mb-1">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Alex Mercer" 
                      className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-stone-950 border-stone-800 text-white' : 'bg-amber-50 border-amber-200 text-stone-900'}`}
                    />
                  </div>

                  <div>
                    <label className="block text-amber-500 font-bold mb-1">Your Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="alex@example.com" 
                      className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-stone-950 border-stone-800 text-white' : 'bg-amber-50 border-amber-200 text-stone-900'}`}
                    />
                  </div>

                  <div>
                    <label className="block text-amber-500 font-bold mb-1">Message Subject</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Microcontroller / Simulation Collaboration" 
                      className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-stone-950 border-stone-800 text-white' : 'bg-amber-50 border-amber-200 text-stone-900'}`}
                    />
                  </div>

                  <div>
                    <label className="block text-amber-500 font-bold mb-1">Your Message</label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="Describe your inquiry or hardware topic..." 
                      className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-stone-950 border-stone-800 text-white' : 'bg-amber-50 border-amber-200 text-stone-900'}`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-black font-bold transition-all flex items-center justify-center space-x-2 text-sm"
                  >
                    <Icons.Envelope />
                    <span>Send Engineering Message</span>
                  </button>

                  {formSubmitted && (
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center font-bold">
                      Message transmitted successfully!
                    </div>
                  )}
                </form>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* Lightbox Inspector Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`max-w-2xl w-full rounded-2xl border p-6 space-y-4 ${darkMode ? 'bg-stone-900 border-amber-900/50' : 'bg-white border-amber-200'} shadow-2xl relative`}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-stone-800 text-white hover:bg-amber-500 hover:text-black transition-colors"
            >
              <Icons.X />
            </button>

            <img src={selectedImage.img} alt={selectedImage.title} className="w-full h-64 object-cover rounded-xl border border-amber-500/20" />
            <span className="inline-block text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 font-bold">{selectedImage.badge}</span>
            <h3 className="text-2xl font-serif font-bold">{selectedImage.title}</h3>
            <p className={`text-xs leading-relaxed ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}>{selectedImage.details}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {selectedImage.specs.map((s, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Academic CV Preview Modal */}
      {cvModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`max-w-xl w-full rounded-2xl border p-6 space-y-6 ${darkMode ? 'bg-stone-900 border-amber-900/50' : 'bg-white border-amber-200'} shadow-2xl relative font-mono text-xs`}>
            <button
              onClick={() => setCvModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-stone-800 text-white hover:bg-amber-500 hover:text-black transition-colors"
            >
              <Icons.X />
            </button>

            <div className="border-b border-amber-500/20 pb-3">
              <h3 className="text-lg font-serif font-bold text-amber-500">Academic & Technical Summary</h3>
              <p className="text-stone-400">Shadman • EEE Student at JSTU</p>
            </div>

            <div className="space-y-3 text-stone-300">
              <p><strong className="text-amber-500">University:</strong> Jamalpur Science and Technology University (Session 2024-2025, 2-1)</p>
              <p><strong className="text-amber-500">High School:</strong> Bindu Bashini Government Boys' High School, Tangail</p>
              <p><strong className="text-amber-500">Key Tools:</strong> STM32, ESP32, Arduino, NI Multisim, LTspice, MATLAB, AutoCAD Electrical</p>
              <p><strong className="text-amber-500">Languages:</strong> Embedded C, C++, MATLAB Scripting</p>
            </div>

            <button
              onClick={() => setCvModalOpen(false)}
              className="w-full py-3 rounded-lg bg-amber-500 text-black font-bold hover:bg-amber-600 transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}

      {/* Minimal Footer */}
      <footer className={`border-t py-8 text-center font-mono text-xs ${darkMode ? 'bg-stone-950 border-amber-900/20 text-stone-500' : 'bg-amber-50 border-amber-200 text-stone-600'}`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Shadman • Electrical & Electronic Engineering • JSTU (2-1)</p>
          <div className="flex space-x-4 text-amber-500">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-amber-400"><Icons.Github /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-amber-400"><Icons.Linkedin /></a>
          </div>
        </div>
      </footer>

      {/* Floating Back-To-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-amber-500 text-black hover:bg-amber-600 shadow-xl z-40 transition-transform active:scale-95"
        title="Back to Top"
      >
        <Icons.ArrowUp />
      </button>

    </div>
  );
}