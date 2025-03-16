'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            Russian Caravan
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/tours" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Туры
            </Link>
            <Link 
              href="/services" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Услуги
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              О нас
            </Link>
            <Link 
              href="/contacts" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Контакты
            </Link>
          </nav>

          {/* Language Selector - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-primary">
              RU
            </button>
            <button className="px-3 py-1 text-sm font-medium text-gray-500 hover:text-primary">
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen}
      />
    </header>
  );
} 