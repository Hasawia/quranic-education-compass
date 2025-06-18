
import { useState } from 'react';

// بطاقات المواضيع الإسلامية
const TopicsCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const topics = [
    {
      title: 'العقيدة',
      description: 'دراسة أصول العقيدة الإسلامية والتوحيد',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop'
    },
    {
      title: 'التفسير',
      description: 'تفسير آيات القرآن الكريم وفهم معانيها',
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=300&fit=crop'
    },
    {
      title: 'الفقه',
      description: 'تعلم أحكام الشريعة الإسلامية والعبادات',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop'
    },
    {
      title: 'التجويد',
      description: 'إتقان تلاوة القرآن الكريم بالأحكام الصحيحة',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop'
    },
    {
      title: 'السيرة',
      description: 'دراسة سيرة النبي محمد صلى الله عليه وسلم',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-16 bg-islamic-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-islamic-primary font-cairo mb-4">
            المواضيع التعليمية
          </h2>
          <p className="text-islamic-light font-cairo text-lg">
            تعلم أساسيات الدين الإسلامي من خلال منهج شامل ومتكامل
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
              style={{
                backgroundImage: `url(${topic.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* طبقة التدرج */}
              <div className="absolute inset-0 bg-gradient-to-t from-islamic-primary/90 via-islamic-primary/50 to-transparent"></div>
              
              {/* المحتوى */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold font-cairo mb-2 text-islamic-gold">
                  {topic.title}
                </h3>
                
                {/* الوصف يظهر عند التمرير */}
                <div className={`transition-all duration-300 ${
                  hoveredCard === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}>
                  <p className="font-cairo text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>

              {/* زخرفة إسلامية */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-islamic-gold rounded-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsCards;
