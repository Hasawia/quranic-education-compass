
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// صفحة دورات التحفيظ
const TahfeezCourse = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  // بيانات وهمية للمجموعات
  const groups = [
    {
      id: 1,
      name: 'مجموعة الفجر',
      instructor: 'الشيخ أحمد محمد',
      instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      students: [
        { name: 'محمد علي', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
        { name: 'عبدالله أحمد', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
        { name: 'يوسف محمد', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face' },
        { name: 'عمر حسن', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face' }
      ],
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'مجموعة الضحى',
      instructor: 'الشيخ محمد حسن',
      instructorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
      students: [
        { name: 'سعد عبدالله', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face' },
        { name: 'خالد أحمد', image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=100&h=100&fit=crop&crop=face' },
        { name: 'فيصل محمد', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
      ],
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'مجموعة العصر',
      instructor: 'الشيخ عبدالرحمن علي',
      instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      students: [
        { name: 'ناصر سعد', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
        { name: 'إبراهيم محمد', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face' },
        { name: 'حسام أحمد', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face' },
        { name: 'طارق عبدالله', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face' },
        { name: 'سلمان حسن', image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=100&h=100&fit=crop&crop=face' }
      ],
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&h=200&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* العنوان الرئيسي */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-islamic-gold font-cairo mb-4">
              Tahfeez Course Page
            </h1>
            <p className="text-xl text-islamic-light font-cairo">
              اختر المجموعة لعرض تفاصيلها
            </p>
          </div>

          {/* دوران المجموعات */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-islamic-primary font-cairo mb-6 text-center">
              مجموعات التحفيظ
            </h2>
            <div className="flex overflow-x-auto space-x-6 pb-4">
              {groups.map((group) => (
                <Card 
                  key={group.id}
                  className={`min-w-72 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedGroup === group.id ? 'ring-2 ring-islamic-gold' : ''
                  }`}
                  onClick={() => setSelectedGroup(group.id)}
                >
                  <CardHeader className="pb-2">
                    <img 
                      src={group.image}
                      alt={group.name}
                      className="w-full h-32 object-cover rounded-md mb-3"
                    />
                    <CardTitle className="text-lg font-cairo text-islamic-primary">
                      {group.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-islamic-light font-cairo">
                      المعلم: {group.instructor}
                    </p>
                    <p className="text-sm text-gray-600 font-cairo mt-1">
                      {group.students.length} طالب
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* معلومات المجموعة المختارة */}
          {selectedGroup && (
            <div className="animate-fade-in">
              {(() => {
                const group = groups.find(g => g.id === selectedGroup);
                if (!group) return null;

                return (
                  <Card className="shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-2xl font-cairo text-islamic-primary text-center">
                        معلومات {group.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* معلومات المعلم */}
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-islamic-gold font-cairo mb-4">
                            المعلم المشرف
                          </h3>
                          <div className="flex flex-col items-center">
                            <img 
                              src={group.instructorImage}
                              alt={group.instructor}
                              className="w-32 h-32 rounded-full object-cover border-4 border-islamic-gold mb-4"
                            />
                            <h4 className="text-lg font-bold text-islamic-primary font-cairo">
                              {group.instructor}
                            </h4>
                          </div>
                        </div>

                        {/* الطلاب المسجلون */}
                        <div>
                          <h3 className="text-xl font-bold text-islamic-gold font-cairo mb-4 text-center">
                            الطلاب المسجلون
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {group.students.map((student, index) => (
                              <div key={index} className="flex items-center space-x-3 p-3 bg-islamic-cream rounded-lg">
                                <img 
                                  src={student.image}
                                  alt={student.name}
                                  className="w-12 h-12 rounded-full object-cover"
                                />
                                <span className="font-cairo text-islamic-primary">
                                  {student.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* أزرار الإجراءات */}
                      <div className="mt-8 text-center space-x-4">
                        <Button 
                          className="bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo"
                          onClick={() => window.location.href = '/course-attendance'}
                        >
                          عرض الحضور
                        </Button>
                        <Button 
                          variant="outline"
                          className="border-islamic-primary text-islamic-primary hover:bg-islamic-primary hover:text-white font-cairo"
                        >
                          تفاصيل المجموعة
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })()}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TahfeezCourse;
