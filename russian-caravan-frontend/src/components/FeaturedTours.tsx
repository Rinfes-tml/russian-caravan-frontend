import Image from 'next/image';
import Link from 'next/link';

const featuredTours = [
  {
    id: 1,
    title: 'Золотое кольцо России',
    description: 'Путешествие по древним городам России с богатой историей',
    image: '/images/tours/golden-ring.jpg',
    duration: '7 дней',
    price: '89,900 ₽',
  },
  {
    id: 2,
    title: 'Байкал: Жемчужина Сибири',
    description: 'Незабываемое путешествие к самому глубокому озеру мира',
    image: '/images/tours/baikal.jpg',
    duration: '10 дней',
    price: '129,900 ₽',
  },
  {
    id: 3,
    title: 'Камчатка: Край вулканов',
    description: 'Экспедиция к действующим вулканам и гейзерам',
    image: '/images/tours/kamchatka.jpg',
    duration: '12 дней',
    price: '199,900 ₽',
  },
];

export default function FeaturedTours() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredTours.map((tour) => (
        <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64">
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
            <p className="text-gray-600 mb-4">{tour.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500">
                <svg className="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {tour.duration}
              </span>
              <span className="text-primary font-semibold">{tour.price}</span>
            </div>
            <Link
              href={`/tours/${tour.id}`}
              className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-semibold py-2 rounded-lg transition-colors duration-200"
            >
              Подробнее
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
} 