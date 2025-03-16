'use client';

import { useState } from 'react';
import TourCard from '@/components/TourCard';

// Временные данные для демонстрации
const tours = [
  {
    id: 1,
    title: 'Золотое кольцо России',
    description: 'Путешествие по древним городам России с богатой историей',
    image: '/images/tours/golden-ring.jpg',
    duration: '7 дней',
    price: 89900,
    category: 'Культурный',
    region: 'Центральная Россия',
  },
  {
    id: 2,
    title: 'Байкал: Жемчужина Сибири',
    description: 'Незабываемое путешествие к самому глубокому озеру мира',
    image: '/images/tours/baikal.jpg',
    duration: '10 дней',
    price: 129900,
    category: 'Природный',
    region: 'Сибирь',
  },
  {
    id: 3,
    title: 'Камчатка: Край вулканов',
    description: 'Экспедиция к действующим вулканам и гейзерам',
    image: '/images/tours/kamchatka.jpg',
    duration: '12 дней',
    price: 199900,
    category: 'Экстрим',
    region: 'Дальний Восток',
  },
];

const categories = ['Все', 'Культурный', 'Природный', 'Экстрим'];
const regions = ['Все', 'Центральная Россия', 'Сибирь', 'Дальний Восток'];
const priceRanges = [
  { label: 'Все', min: 0, max: Infinity },
  { label: 'До 100,000 ₽', min: 0, max: 100000 },
  { label: '100,000 ₽ - 150,000 ₽', min: 100000, max: 150000 },
  { label: 'Более 150,000 ₽', min: 150000, max: Infinity },
];

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedRegion, setSelectedRegion] = useState('Все');
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);

  const filteredTours = tours.filter(tour => {
    const categoryMatch = selectedCategory === 'Все' || tour.category === selectedCategory;
    const regionMatch = selectedRegion === 'Все' || tour.region === selectedRegion;
    const priceMatch = tour.price >= selectedPriceRange.min && tour.price <= selectedPriceRange.max;
    return categoryMatch && regionMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Наши туры</h1>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Категория
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Регион
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ценовой диапазон
              </label>
              <select
                value={selectedPriceRange.label}
                onChange={(e) => {
                  const range = priceRanges.find(range => range.label === e.target.value);
                  setSelectedPriceRange(range || priceRanges[0]);
                }}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary"
              >
                {priceRanges.map((range) => (
                  <option key={range.label} value={range.label}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <TourCard
              key={tour.id}
              id={tour.id}
              title={tour.title}
              description={tour.description}
              image={tour.image}
              duration={tour.duration}
              price={`${tour.price.toLocaleString()} ₽`}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600">
              По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
} 