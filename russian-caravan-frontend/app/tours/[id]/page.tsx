import Image from 'next/image';
import Link from 'next/link';

// Временные данные для демонстрации
const tours = [
  {
    id: 1,
    title: 'Золотое кольцо России',
    description: 'Путешествие по древним городам России с богатой историей',
    fullDescription: `
      Отправьтесь в увлекательное путешествие по древним городам России, где каждый камень хранит историю веков. 
      Наш тур по Золотому кольцу познакомит вас с уникальными памятниками архитектуры, древними монастырями и 
      красивейшими храмами России.

      Маршрут включает:
      - Сергиев Посад: Троице-Сергиева лавра
      - Переславль-Залесский: Красная площадь и Плещеево озеро
      - Ростов Великий: Ростовский кремль
      - Ярославль: исторический центр города
      - Кострома: Ипатьевский монастырь
      - Суздаль: Суздальский кремль
      - Владимир: Успенский собор
    `,
    image: '/images/tours/golden-ring.jpg',
    duration: '7 дней',
    price: '89,900 ₽',
    included: [
      'Проживание в отелях 4*',
      'Завтраки и ужины',
      'Трансфер на комфортабельном автобусе',
      'Услуги профессионального гида',
      'Входные билеты в музеи и достопримечательности',
      'Экскурсионное обслуживание',
    ],
    notIncluded: [
      'Авиабилеты до Москвы и обратно',
      'Обеды',
      'Личные расходы',
      'Дополнительные экскурсии',
    ],
  },
  {
    id: 2,
    title: 'Байкал: Жемчужина Сибири',
    description: 'Незабываемое путешествие к самому глубокому озеру мира',
    fullDescription: `
      Озеро Байкал - уникальное место на планете, где можно увидеть кристально чистую воду, 
      величественные горы и нетронутую природу. Наш тур позволит вам познакомиться с этим 
      удивительным местом во всей его красе.

      Программа тура:
      - Иркутск: обзорная экскурсия
      - Листвянка: Байкальский музей
      - Остров Ольхон: мыс Бурхан
      - Малое море: экскурсия на катере
      - Бухта Песчаная: треккинг
      - Кругобайкальская железная дорога
    `,
    image: '/images/tours/baikal.jpg',
    duration: '10 дней',
    price: '129,900 ₽',
    included: [
      'Проживание в отелях и на турбазах',
      'Трехразовое питание',
      'Все трансферы по программе',
      'Экскурсии с гидом',
      'Входные билеты',
      'Прогулка на катере',
    ],
    notIncluded: [
      'Авиабилеты до Иркутска и обратно',
      'Алкогольные напитки',
      'Личные расходы',
      'Сувениры',
    ],
  },
  {
    id: 3,
    title: 'Камчатка: Край вулканов',
    description: 'Экспедиция к действующим вулканам и гейзерам',
    fullDescription: `
      Камчатка - это край действующих вулканов, горячих источников и нетронутой природы. 
      Наш тур предлагает уникальную возможность увидеть все природные чудеса полуострова 
      и получить незабываемые впечатления.

      В программе:
      - Восхождение на вулкан Авачинский
      - Долина гейзеров
      - Вертолетная экскурсия
      - Купание в термальных источниках
      - Морская прогулка по Авачинской бухте
      - Посещение этнической деревни
    `,
    image: '/images/tours/kamchatka.jpg',
    duration: '12 дней',
    price: '199,900 ₽',
    included: [
      'Проживание в отелях и глэмпингах',
      'Трехразовое питание',
      'Все трансферы',
      'Вертолетные экскурсии',
      'Услуги гида-проводника',
      'Аренда снаряжения',
    ],
    notIncluded: [
      'Авиабилеты до Петропавловска-Камчатского',
      'Дополнительные активности',
      'Личные расходы',
      'Страховка',
    ],
  },
];

interface Props {
  params: {
    id: string;
  };
}

export default function TourPage({ params }: Props) {
  const tour = tours.find(t => t.id === parseInt(params.id));

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Тур не найден
          </h1>
          <p className="text-gray-600 mb-8">
            К сожалению, запрашиваемый тур не существует.
          </p>
          <Link
            href="/tours"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Вернуться к списку туров
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              {tour.title}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Описание тура</h2>
              <p className="text-gray-600 whitespace-pre-line">
                {tour.fullDescription}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Что включено</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">В стоимость входит:</h3>
                  <ul className="space-y-2">
                    {tour.included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">В стоимость не входит:</h3>
                  <ul className="space-y-2">
                    {tour.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {tour.price}
                </div>
                <div className="text-gray-600">
                  <svg className="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {tour.duration}
                </div>
              </div>
              <button
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
              >
                Забронировать
              </button>
              <button
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 