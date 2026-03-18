/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Headphones, Wind, Hand, ChevronRight } from 'lucide-react';

const COLORS = [
  { name: 'Sage Green', hex: '#9CA986', id: 'sage', image: '/vision-sage.png' },
  { name: 'Blush Pink', hex: '#E6B8B8', id: 'blush', image: '/vision-blush.png' },
  { name: 'Cream White', hex: '#F2E8DF', id: 'cream', image: '/vision-cream.png' },
];

const FEATURES = [
  {
    title: 'Micro-OLED Displays',
    description: 'Ultra-high-resolution visuals that bring every pixel to life with stunning clarity.',
    icon: Eye,
  },
  {
    title: 'Immersive Spatial Audio',
    description: 'Sound that surrounds you, perfectly synced with your environment.',
    icon: Headphones,
  },
  {
    title: 'Custom Breathable Light Seal',
    description: 'Soft-touch fabric designed for extended wear and maximum comfort.',
    icon: Wind,
  },
  {
    title: 'Seamless Hand/Eye Tracking',
    description: 'Intuitive control that feels like magic, responding to your every move.',
    icon: Hand,
  },
];

export default function App() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);

  return (
    <div className="min-h-screen selection:bg-pastel-pink">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-oat/80 backdrop-blur-lg">
        <div className="text-xl font-medium tracking-tight text-soft-black">
          Vision Aura
        </div>
        <button className="px-6 py-2.5 text-sm font-medium transition-all rounded-full bg-pastel-pink text-soft-black hover:shadow-lg hover:shadow-pastel-pink/20 active:scale-95">
          Pre-order
        </button>
      </nav>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container px-6 mx-auto text-center md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-soft-black mb-6">
              Spatial computing, <span className="italic font-serif">softened.</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg text-soft-black/60 mb-12 leading-relaxed">
              Seamlessly blend your digital and physical worlds with the new ultra-comfort Light Seal.
            </p>
          </motion.div>

          {/* Interactive Color Picker & Image Display */}
          <div className="relative flex flex-col items-center justify-center mb-24">
            <div className="relative w-full max-w-4xl aspect-[16/9] flex items-center justify-center">
              {/* Decorative background glow */}
              <motion.div 
                animate={{ backgroundColor: selectedColor.hex }}
                className="absolute w-64 h-64 rounded-full blur-[120px] opacity-20 transition-colors duration-1000"
              />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedColor.id}
                  initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  {/* Placeholder for the Vision Pro Image */}
                  <div className="relative group">
                    <img
                      src={selectedColor.image}
                      alt={`Apple Vision Pro in ${selectedColor.name}`}
                      className="object-contain w-full h-full max-h-[500px] drop-shadow-2xl rounded-2xl"
                      referrerPolicy="no-referrer"
                    />
                    {/* Stylized Overlay to simulate color tint */}
                    <div 
                      className="absolute inset-0 mix-blend-color opacity-30 rounded-2xl pointer-events-none"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Color Swatches */}
            <div className="flex items-center gap-6 mt-8">
              {COLORS.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color)}
                  className="group flex flex-col items-center gap-2"
                >
                  <div
                    className={`w-10 h-10 rounded-full transition-all duration-300 border-2 ${
                      selectedColor.id === color.id
                        ? 'border-soft-black scale-110 shadow-md'
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className={`text-[10px] uppercase tracking-widest font-medium transition-opacity duration-300 ${
                    selectedColor.id === color.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                  }`}>
                    {color.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="container px-6 mx-auto md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card p-8 group hover:bg-white/60 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-pastel-pink flex items-center justify-center mb-6 text-soft-black group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-soft-black/50 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-6 mx-auto mt-32 md:px-12 text-center">
          <div className="max-w-3xl mx-auto p-12 rounded-[3rem] bg-soft-black text-oat overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,white_0%,transparent_70%)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-6 relative z-10">Ready for a new perspective?</h2>
            <p className="text-oat/60 mb-10 relative z-10">Experience the future of spatial computing with Vision Aura.</p>
            <button className="px-8 py-4 bg-oat text-soft-black rounded-full font-medium flex items-center gap-2 mx-auto hover:scale-105 transition-transform relative z-10">
              Reserve Yours <ChevronRight size={18} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12 border-t border-soft-black/5 text-center">
        <p className="text-xs text-soft-black/30 uppercase tracking-[0.2em]">
          &copy; 2026 Vision Aura. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
