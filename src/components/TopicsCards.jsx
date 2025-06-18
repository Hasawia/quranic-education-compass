
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

// مكون بطاقات المواضيع
const TopicsCards = () => {
  const topics = [
    {
      title: "تحفيظ القرآن الكريم",
      description: "برامج متخصصة لحفظ القرآن الكريم بطرق علمية حديثة",
      icon: "📖",
      link: "/tahfeez-course",
      color: "from-emerald-600 to-emerald-800"
    },
    {
      title: "تعلم التجويد",
      description: "دورات شاملة لتعلم أحكام التجويد وتحسين التلاوة",
      icon: "🎵",
      link: "/courses",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "الدروس والمحاضرات",
      description: "محاضرات دينية ودروس علمية في العلوم الشرعية",
      icon: "🎓",
      link: "/activities",
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "البرامج التفاعلية",
      description: "أنشطة وبرامج تفاعلية لجميع الأعمار",
      icon: "🤝",
      link: "/activities", 
      color: "from-orange-600 to-orange-800"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 font-cairo mb-6">
            برامجنا التعليمية
          </h2>
          <p className="text-xl text-gray-600 font-cairo max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة متنوعة من البرامج التعليمية والتربوية المصممة لخدمة جميع أفراد المجتمع
          </p>
        </div>

        {/* بطاقات المواضيع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic, index) => (
            <Link key={index} to={topic.link} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${topic.color}`}></div>
                
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {topic.icon}
                  </div>
                  <CardTitle className="text-xl font-cairo text-emerald-800 group-hover:text-emerald-600 transition-colors">
                    {topic.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-gray-600 font-cairo leading-relaxed">
                    {topic.description}
                  </p>
                  
                  <div className="mt-6">
                    <span className="inline-flex items-center text-emerald-600 font-cairo font-medium group-hover:text-emerald-800 transition-colors">
                      اكتشف المزيد ←
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* دعوة للعمل */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-800 to-emerald-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold font-cairo mb-4">
                ابدأ رحلتك التعليمية اليوم
              </h3>
              <p className="font-cairo text-lg mb-6 opacity-90">
                انضم إلينا واكتشف عالم التعلم والتطوير الروحي
              </p>
              <Link 
                to="/courses"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-cairo font-medium px-8 py-3 rounded-lg transition-colors"
              >
                استكشف الدورات
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TopicsCards;
