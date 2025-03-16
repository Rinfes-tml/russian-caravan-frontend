'use client';

import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div 
      className={`
        fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Menu content */}
      <div className="absolute right-0 h-full w-64 bg-white shadow-xl">
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="px-4">
          <ul className="space-y-4">
            <li>
              <Link 
                href="/tours"
                className="block py-2 text-lg text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Туры
              </Link>
            </li>
            <li>
              <Link 
                href="/services"
                className="block py-2 text-lg text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                className="block py-2 text-lg text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                О нас
              </Link>
            </li>
            <li>
              <Link 
                href="/contacts"
                className="block py-2 text-lg text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary">
              RU
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-primary">
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 