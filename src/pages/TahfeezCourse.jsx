
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { BookOpen, Users, Calendar, Star, Clock } from 'lucide-react';

// صفحة دورة التحفيظ
const TahfeezCourse = () => {
  const [enrollmentStatus, setEnrollmentStatus] = useState('not-enrolled'); // 'not-enrolled', 'enrolled', 'completed'

  const courseData = {
    title: 'دورة تحفيظ القرآن الكريم',
    description: 'دورة شاملة لتحفيظ القرآن الكريم بأحكام التجويد الصحيحة',
    duration: '24 شهر',
    level: 'جميع المستويات',
    students: 150,
    rating: 4.9,
    instructor: 'الشيخ أحمد محمد',
    price: 'مجاني',
    schedule: [
      { day: 'السبت', time: '16:00 - 18:00' },
      { day: 'الاثنين', time: '16:00 - 18:00' },
      { day: 'الأربعاء', time: '16:00 - 18:00' }
    ],
    modules: [
      {
        title: 'أساسيات التلاوة',
        lessons: 8,
        duration: '2 أسابيع',
        completed: enrollmentStatus === 'enrolled' ? 6 : 0
      },
      {
        title: 'أحكام التجويد',
        lessons: 12,
        duration: '3 أسابيع',
        completed: enrollmentStatus === 'enrolled' ? 8 : 0
      },
      {
        title: 'حفظ جزء عم',
        lessons: 16,
        duration: '4 أسابيع',
        completed: enrollmentStatus === 'enrolled' ? 12 : 0
      },
      {
        title: 'حفظ جزء تبارك',
        lessons: 20,
        duration: '5 أسابيع',
        completed: enrollmentStatus === 'enrolled' ? 5 : 0
      }
    ]
  };

  const handleEnrollment = () => {
    setEnrollmentStatus('enrolled');
  };

  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      {/* رأس الصفحة */}
      <div className="pt-20 pb-12 bg-gradient-to-r from-islamic-primary to-islamic-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold font-cairo mb-4">
                {courseData.title}
              </h1>
              <p className="text-lg font-cairo mb-6 opacity-90">
                {courseData.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Badge className="bg-islamic-gold text-white">
                  <Clock className="w-4 h-4 ml-1" />
                  {courseData.duration}
                </Badge>
                <Badge className="bg-islamic-gold text-white">
                  <Users className="w-4 h-4 ml-1" />
                  {courseData.students} طالب
                </Badge>
                <Badge className="bg-islamic-gold text-white">
                  <Star className="w-4 h-4 ml-1" />
                  {courseData.rating}
                </Badge>
              </div>

              <div className="space-y-2 text-islamic-cream">
                <p className="font-cairo">المدرس: {courseData.instructor}</p>
                <p className="font-cairo">المستوى: {courseData.level}</p>
                <p className="font-cairo text-xl font-bold text-islamic-gold">
                  السعر: {courseData.price}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=500&h=300&fit=crop"
                alt="Quran Learning"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              
              {enrollmentStatus === 'not-enrolled' && (
                <Button 
                  onClick={handleEnrollment}
                  className="w-full bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo text-lg py-3"
                >
                  التسجيل في الدورة
                </Button>
              )}

              {enrollmentStatus === 'enrolled' && (
                <div className="space-y-3">
                  <Badge className="w-full justify-center bg-green-500 text-white py-2">
                    مسجل في الدورة
                  </Badge>
                  <Button 
                    className="w-full bg-islamic-primary hover:bg-islamic-primary/90 text-white font-cairo"
                  >
                    متابعة التعلم
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* المحتوى الرئيسي */}
          <div className="lg:col-span-2 space-y-8">
            {/* وصف الدورة */}
            <Card>
              <CardHeader>
                <CardTitle className="font-cairo text-islamic-primary">عن الدورة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-cairo text-islamic-light leading-relaxed">
                  دورة تحفيظ القرآن الكريم هي رحلة روحانية وتعليمية شاملة تهدف إلى تعليم الطلاب 
                  حفظ كتاب الله تعالى بالطريقة الصحيحة. تتضمن الدورة تعليم أحكام التجويد، 
                  وطرق الحفظ الفعالة، والتدبر في معاني الآيات.
                </p>
                <p className="font-cairo text-islamic-light leading-relaxed">
                  نستخدم منهجاً تدريجياً يبدأ من الأساسيات وينتهي بحفظ أجزاء كاملة من القرآن، 
                  مع التركيز على الجودة والإتقان بدلاً من السرعة فقط.
                </p>
              </CardContent>
            </Card>

            {/* محتوى الدورة */}
            <Card>
              <CardHeader>
                <CardTitle className="font-cairo text-islamic-primary">محتوى الدورة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseData.modules.map((module, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-cairo font-medium text-islamic-primary">
                            {module.title}
                          </h3>
                          <p className="text-sm text-islamic-light font-cairo">
                            {module.lessons} دروس • {module.duration}
                          </p>
                        </div>
                        {enrollmentStatus === 'enrolled' && (
                          <Badge variant="outline">
                            {module.completed}/{module.lessons}
                          </Badge>
                        )}
                      </div>
                      
                      {enrollmentStatus === 'enrolled' && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-cairo">التقدم</span>
                            <span className="font-cairo">
                              {Math.round((module.completed / module.lessons) * 100)}%
                            </span>
                          </div>
                          <Progress 
                            value={(module.completed / module.lessons) * 100} 
                            className="h-2"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* الشريط الجانبي */}
          <div className="space-y-6">
            {/* الجدول الزمني */}
            <Card>
              <CardHeader>
                <CardTitle className="font-cairo text-islamic-primary">مواعيد الحصص</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {courseData.schedule.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-islamic-cream rounded-lg">
                      <span className="font-cairo text-islamic-primary">{schedule.day}</span>
                      <span className="font-cairo text-islamic-light">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* متطلبات الدورة */}
            <Card>
              <CardHeader>
                <CardTitle className="font-cairo text-islamic-primary">ما تحتاجه</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm font-cairo text-islamic-light">
                  <li>• نية صادقة لحفظ القرآن</li>
                  <li>• مصحف شريف</li>
                  <li>• دفتر للملاحظات</li>
                  <li>• التزام بالحضور</li>
                  <li>• وقت يومي للمراجعة</li>
                </ul>
              </CardContent>
            </Card>

            {/* شهادة الإكمال */}
            <Card>
              <CardHeader>
                <CardTitle className="font-cairo text-islamic-primary">شهادة الإكمال</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-cairo text-islamic-light mb-4">
                  احصل على شهادة معتمدة عند إكمال الدورة بنجاح
                </p>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-islamic-gold" />
                  <span className="text-sm font-cairo text-islamic-primary">
                    شهادة معتمدة من المسجد
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TahfeezCourse;
