'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`
  };

  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Градиентный фон вместо видео */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black">
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMzBoMnYyaC0ydi0yem0wLTEwaDJ2MmgtMnYtMnptMCAyMGgydjJoLTJ2LTJ6bTEwLTEwaDJ2MmgtMnYtMnptMC0xMGgydjJoLTJ2LTJ6bTAgMjBoMnYyaC0ydi0yem0xMC0xMGgydjJoLTJ2LTJ6bTAtMTBoMnYyaC0ydi0yem0wIDIwaDJ2MmgtMnYtMnptLTMwLTEwaDJ2MmgtMnYtMnptMC0xMGgydjJoLTJ2LTJ6bTAgMjBoMnYyaC0ydi0yem0tMTAtMTBoMnYyaC0ydi0yem0wLTEwaDJ2MmgtMnYtMnptMCAyMGgydjJoLTJ2LTJ6bS0xMC0xMGgydjJoLTJ2LTJ6bTAtMTBoMnYyaC0ydi0yem0wIDIwaDJ2MmgtMnYtMnoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==')]"></div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-playfair mb-6"
          >
            Russian Caravan
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto"
          >
            Откройте для себя величие России через уникальные путешествия
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/tours"
              className="inline-block px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-lg"
            >
              Исследовать туры
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Featured Destinations */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair text-white text-center mb-16"
          >
            Популярные направления
          </motion.h2>
          
          <div className="flex overflow-x-auto pb-8 space-x-6 snap-x">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex-none w-80 md:w-96 snap-center"
              >
                <div className="relative h-[500px] group cursor-pointer bg-gray-800">
                  {/* Скелетон-заглушка */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-playfair mb-2">{dest.title}</h3>
                    <p className="text-sm opacity-80 mb-4">{dest.description}</p>
                    <span className="inline-block px-4 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300">
                      Подробнее
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Offers */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-playfair mb-8">Эксклюзивные предложения</h2>
            <p className="text-xl opacity-80 mb-12">Забронируйте путешествие в течение 24 часов и получите персонального гида</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-playfair mb-4">Зимний тур</h3>
                <p className="opacity-80 mb-6">Байкал и термальные источники</p>
                <div className="text-3xl font-light mb-6">от 89,900 ₽</div>
                <button className="w-full py-3 px-6 bg-white text-black hover:bg-opacity-90 transition-all duration-300">
                  Забронировать
                </button>
              </div>
              
              <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-playfair mb-4">Летний тур</h3>
                <p className="opacity-80 mb-6">Камчатка: вулканы и океан</p>
                <div className="text-3xl font-light mb-6">от 129,900 ₽</div>
                <button className="w-full py-3 px-6 bg-white text-black hover:bg-opacity-90 transition-all duration-300">
                  Забронировать
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair text-white text-center mb-16"
          >
            Истории путешественников
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden group cursor-pointer bg-gray-800"
              >
                {/* Скелетон-заглушка */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                </div>
                
                {/* Текстовая заглушка */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                  <span className="text-sm opacity-70">Фото {index + 1}</span>
                  <span className="text-xs opacity-50 mt-2">Загружается...</span>
                </div>
                
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-playfair mb-8">Будьте в курсе новых маршрутов</h2>
            <p className="text-xl opacity-80 mb-12">Подпишитесь на нашу рассылку и получайте эксклюзивные предложения</p>
            
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-6 py-4 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-opacity-50"
              />
              <button className="px-8 py-4 bg-white text-black hover:bg-opacity-90 transition-all duration-300 rounded-lg">
                Подписаться
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const destinations = [
  {
    id: 1,
    title: 'Золотое кольцо',
    description: 'Путешествие по древним городам России с богатой историей',
    image: '/images/tours/golden-ring.jpg'
  },
  {
    id: 2,
    title: 'Байкал',
    description: 'Незабываемое путешествие к самому глубокому озеру мира',
    image: '/images/tours/baikal.jpg'
  },
  {
    id: 3,
    title: 'Камчатка',
    description: 'Экспедиция к действующим вулканам и гейзерам',
    image: '/images/tours/kamchatka.jpg'
  }
];
