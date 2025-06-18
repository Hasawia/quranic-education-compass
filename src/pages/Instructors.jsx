
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Star, Mail, Phone } from 'lucide-react';

// صفحة المدرسين
const Instructors = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  // بيانات المدرسين الوهمية
  const instructors = [
    {
      id: 1,
      name: 'الشيخ أحمد محمد',
      specialization: 'تحفيظ القرآن الكريم',
      experience: '15 سنة',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      email: 'ahmed@mosque.com',
      phone: '+966 123 456 789',
      bio: 'حافظ للقرآن الكريم مع إجازة في القراءات العشر، متخصص في تعليم التجويد والتحفيظ'
    },
    {
      id: 2,
      name: 'الأستاذ محمد علي',
      specialization: 'التفسير والفقه',
      experience: '12 سنة',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      email: 'mohammed@mosque.com',
      phone: '+966 123 456 790',
      bio: 'دكتور في الشريعة الإسلامية، متخصص في تفسير القرآن والفقه الإسلامي'
    },
    {
      id: 3,
      name: 'الشيخ عبدالله أحمد',
      specialization: 'السيرة النبوية',
      experience: '10 سنوات',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop',
      email: 'abdullah@mosque.com',
      phone: '+966 123 456 791',
      bio: 'باحث في السيرة النبوية والتاريخ الإسلامي، حاصل على الماجستير من الأزهر الشريف'
    }
  ];

  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      {/* عنوان الصفحة */}
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-islamic-primary font-cairo mb-4">
            المدرسون
          </h1>
          <p className="text-xl text-islamic-light font-cairo">
            نخبة من المعلمين المتخصصين في تعليم القرآن الكريم والعلوم الإسلامية
          </p>
        </div>
      </div>

      {/* قائمة المدرسين */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <Card 
              key={instructor.id} 
              className="group hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedInstructor(instructor)}
            >
              <div className="relative">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-islamic-gold text-white">
                    <Star className="w-3 h-3 ml-1" />
                    {instructor.rating}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-islamic-primary font-cairo mb-2">
                  {instructor.name}
                </h3>
                <p className="text-islamic-gold font-cairo font-medium mb-2">
                  {instructor.specialization}
                </p>
                <p className="text-islamic-light font-cairo mb-4">
                  خبرة: {instructor.experience}
                </p>
                <p className="text-sm text-gray-600 font-cairo">
                  {instructor.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* نافذة تفاصيل المدرس */}
      {selectedInstructor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedInstructor(null)}
                className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
              >
                ✕
              </button>
              <img 
                src={selectedInstructor.image} 
                alt={selectedInstructor.name}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-islamic-primary font-cairo">
                  {selectedInstructor.name}
                </h2>
                <Badge className="bg-islamic-gold text-white">
                  <Star className="w-4 h-4 ml-1" />
                  {selectedInstructor.rating}
                </Badge>
              </div>
              
              <p className="text-islamic-gold font-cairo font-medium text-lg mb-2">
                {selectedInstructor.specialization}
              </p>
              
              <p className="text-islamic-light font-cairo mb-4">
                خبرة: {selectedInstructor.experience}
              </p>
              
              <p className="text-gray-700 font-cairo mb-6 leading-relaxed">
                {selectedInstructor.bio}
              </p>
              
              {/* معلومات الاتصال */}
              <div className="border-t pt-4">
                <h3 className="font-bold text-islamic-primary font-cairo mb-3">
                  معلومات الاتصال
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-islamic-gold" />
                    <span className="font-cairo">{selectedInstructor.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-islamic-gold" />
                    <span className="font-cairo">{selectedInstructor.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Instructors;
