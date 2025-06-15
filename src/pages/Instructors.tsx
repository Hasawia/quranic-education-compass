
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, User } from 'lucide-react';
import { mockInstructors } from '@/data/mockData';

// صفحة المدرسين
const Instructors = () => {
  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* العنوان */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-islamic-gold font-cairo mb-4">
              المدرسون
            </h1>
            <p className="text-xl text-islamic-light font-cairo">
              تعرف على نخبة من المعلمين المتخصصين في تعليم القرآن الكريم
            </p>
          </div>

          {/* قائمة المدرسين */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mockInstructors.map((instructor) => (
              <Card key={instructor.id} className="shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    {/* صورة المدرس */}
                    <div className="relative">
                      <img 
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-islamic-gold"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-islamic-gold rounded-full p-2">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* معلومات المدرس */}
                    <div className="flex-1 text-center md:text-right">
                      <CardTitle className="text-2xl font-cairo text-islamic-primary mb-2">
                        {instructor.name}
                      </CardTitle>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                          <Mail className="w-4 h-4 text-islamic-light" />
                          <span className="text-sm text-islamic-light font-cairo">
                            {instructor.email}
                          </span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                          <Phone className="w-4 h-4 text-islamic-light" />
                          <span className="text-sm text-islamic-light font-cairo">
                            {instructor.phone}
                          </span>
                        </div>
                      </div>

                      {/* التخصصات */}
                      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                        {instructor.specializations.map((spec, index) => (
                          <span 
                            key={index}
                            className="bg-islamic-gold/20 text-islamic-primary px-3 py-1 rounded-full text-sm font-cairo"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* السيرة الذاتية */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-islamic-primary font-cairo mb-2">
                      السيرة الذاتية
                    </h3>
                    <p className="text-islamic-light font-cairo leading-relaxed">
                      {instructor.bio}
                    </p>
                  </div>

                  {/* الدورات التي يدرسها */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-islamic-primary font-cairo mb-3">
                      الدورات التي يدرسها
                    </h3>
                    <div className="space-y-2">
                      {instructor.courses.map((course, index) => (
                        <div 
                          key={index}
                          className="bg-islamic-cream p-3 rounded-lg border-r-4 border-islamic-gold"
                        >
                          <span className="font-cairo text-islamic-primary">
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* أزرار الإجراءات */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="flex-1 bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo"
                      onClick={() => window.location.href = '/instructor-page'}
                    >
                      عرض الملف الكامل
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-islamic-primary text-islamic-primary hover:bg-islamic-primary hover:text-white font-cairo"
                    >
                      التواصل مع المدرس
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* دعوة للانضمام */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-islamic-primary to-islamic-light text-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold font-cairo mb-4">
                  هل تريد الانضمام لفريق التدريس؟
                </h2>
                <p className="font-cairo text-lg mb-6 opacity-90">
                  نحن نبحث دائماً عن معلمين مؤهلين للانضمام إلى فريقنا التعليمي
                </p>
                <Button 
                  className="bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo px-8 py-3"
                  onClick={() => window.location.href = '/contact'}
                >
                  تواصل معنا
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Instructors;
