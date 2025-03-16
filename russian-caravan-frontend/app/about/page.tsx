import Image from 'next/image';

const teamMembers = [
  {
    name: 'Анна Петрова',
    position: 'CEO',
    image: '/images/team/ceo.jpg',
    description: 'Основатель компании с 15-летним опытом в туристической индустрии.',
  },
  {
    name: 'Михаил Иванов',
    position: 'Руководитель направления',
    image: '/images/team/head.jpg',
    description: 'Эксперт по внутреннему туризму, организатор уникальных маршрутов.',
  },
  {
    name: 'Елена Смирнова',
    position: 'Дизайнер туров',
    image: '/images/team/designer.jpg',
    description: 'Создает незабываемые путешествия с учетом всех пожеланий клиентов.',
  },
  {
    name: 'Дмитрий Козлов',
    position: 'Служба поддержки',
    image: '/images/team/support.jpg',
    description: 'Обеспечивает комфорт и безопасность во время путешествий.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            О компании Russian Caravan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создаем уникальные путешествия по России, открывая для наших клиентов 
            красоту и многообразие нашей страны.
          </p>
        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/images/about-history.jpg"
              alt="История компании"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Наша история
            </h2>
            <p className="text-gray-600 mb-4">
              Russian Caravan начала свой путь в 2010 году с небольшой команды энтузиастов, 
              влюбленных в путешествия по России. Мы поставили перед собой цель показать 
              людям настоящую Россию - не только её известные достопримечательности, но и 
              уникальные места, до которых редко доходят обычные туристы.
            </p>
            <p className="text-gray-600 mb-4">
              За годы работы мы организовали тысячи успешных туров, разработали десятки 
              уникальных маршрутов и собрали команду профессионалов, которые знают и любят 
              своё дело.
            </p>
            <p className="text-gray-600">
              Сегодня Russian Caravan - это современная туристическая компания, 
              предлагающая премиальный сервис и индивидуальный подход к каждому клиенту.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-primary">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-gray-600">
                Безопасность наших клиентов - наш главный приоритет во всех путешествиях
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-primary">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-gray-600">
                Мы предоставляем только высококачественный сервис на всех этапах
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-primary">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Надежность</h3>
              <p className="text-gray-600">
                Мы всегда выполняем свои обещания и заботимся о каждом клиенте
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 