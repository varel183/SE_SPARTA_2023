"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Varel</h1>
        <button 
          className="text-white md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        
        <ul className="hidden md:flex space-x-4 text-white">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/skills" className="hover:underline">Skills</Link></li>
          <li><Link href="/projects" className="hover:underline">Projects</Link></li>
          <li><Link href="/achievements" className="hover:underline">Achievements</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
      
      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-700 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50 md:hidden`}>
        <div className="p-4">
          <div className='flex justify-between'>
            <h2 className="text-white text-xl font-bold mb-4">Menu</h2>
            <button 
              className="text-white mb-4" 
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
          <ul className="space-y-4 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/achievements">Achievements</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 md:hidden z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
