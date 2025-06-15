
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Calendar, Award, User, Clock, CheckCircle } from 'lucide-react';

// صفحة الطلاب - بوابة الطالب الشاملة
const Student = () => {
  // بيانات وهمية للطالب
  const studentData = {
    name: 'محمد عبدالله أحمد',
    id: 'ST-2024-001',
    level: 'متوسط',
    joinDate: '2023-09-01',
    totalHours: 120,
    completedCourses: 3,
    currentCourses: [
      {
        id: 1,
        name: 'تحفيظ القرآن الكريم',
        instructor: 'الشيخ أحمد محمد',
        progress: 75,
        nextClass: 'الأحد 4:00 مساءً',
        currentSurah: 'سورة البقرة'
      },
      {
        id: 2,
        name: 'دورة التجويد المتقدم',
        instructor: 'الشيخ محمد حسن',
        progress: 60,
        nextClass: 'الثلاثاء 6:00 مساءً',
        currentSurah: 'أحكام النون الساكنة'
      }
    ],
    recentAchievements: [
      { title: 'إتمام حفظ جزء عم', date: '2024-01-10' },
      { title: 'إتقان أحكام التجويد الأساسية', date: '2024-01-05' },
      { title: 'حضور 95% من الدروس', date: '2023-12-20' }
    ],
    upcomingExams: [
      { subject: 'اختبار التجويد', date: '2024-01-25', time: '5:00 مساءً' },
      { subject: 'مراجعة حفظ الجزء 30', date: '2024-01-30', time: '4:00 مساءً' }
    ]
  };

  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      {/* قسم الترحيب */}
      <div className="py-12 bg-gradient-to-br from-islamic-primary to-islamic-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-cairo mb-4">
              مرحباً {studentData.name}
            </h1>
            <p className="text-xl font-cairo opacity-90">
              بوابة الطالب - تابع تقدمك في رحلة تعلم القرآن الكريم
            </p>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* معلومات الطالب الأساسية */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <User className="w-12 h-12 text-islamic-gold mx-auto mb-3" />
                <h3 className="font-cairo font-bold text-islamic-primary mb-1">رقم الطالب</h3>
                <p className="text-islamic-light font-cairo">{studentData.id}</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-islamic-gold mx-auto mb-3" />
                <h3 className="font-cairo font-bold text-islamic-primary mb-1">المستوى</h3>
                <p className="text-islamic-light font-cairo">{studentData.level}</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-islamic-gold mx-auto mb-3" />
                <h3 className="font-cairo font-bold text-islamic-primary mb-1">ساعات التعلم</h3>
                <p className="text-islamic-light font-cairo">{studentData.totalHours} ساعة</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-islamic-gold mx-auto mb-3" />
                <h3 className="font-cairo font-bold text-islamic-primary mb-1">الدورات المكتملة</h3>
                <p className="text-islamic-light font-cairo">{studentData.completedCourses} دورات</p>
              </CardContent>
            </Card>
          </div>

          {/* الدورات الحالية */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-islamic-primary font-cairo mb-6 text-center">
              الدورات الحالية
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {studentData.currentCourses.map((course) => (
                <Card key={course.id} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-islamic-primary font-cairo">
                      {course.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-islamic-light font-cairo mb-1">المدرس</p>
                        <p className="font-cairo text-islamic-primary">{course.instructor}</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-cairo text-islamic-light">التقدم</span>
                          <span className="text-sm font-cairo text-islamic-primary">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div>
                        <p className="text-sm text-islamic-light font-cairo mb-1">الدرس القادم</p>
                        <p className="font-cairo text-islamic-primary">{course.nextClass}</p>
                      </div>

                      <div>
                        <p className="text-sm text-islamic-light font-cairo mb-1">الموضوع الحالي</p>
                        <p className="font-cairo text-islamic-primary">{course.currentSurah}</p>
                      </div>

                      <Button className="w-full bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo">
                        عرض تفاصيل الدورة
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* الإنجازات الأخيرة والامتحانات القادمة */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* الإنجازات الأخيرة */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-islamic-primary font-cairo flex items-center">
                  <Award className="w-6 h-6 text-islamic-gold mr-2" />
                  الإنجازات الأخيرة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.recentAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-islamic-cream rounded-lg">
                      <CheckCircle className="w-5 h-5 text-islamic-gold mt-1" />
                      <div>
                        <p className="font-cairo text-islamic-primary font-medium">{achievement.title}</p>
                        <p className="text-sm text-islamic-light font-cairo">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* الامتحانات القادمة */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-islamic-primary font-cairo flex items-center">
                  <Calendar className="w-6 h-6 text-islamic-gold mr-2" />
                  الامتحانات القادمة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.upcomingExams.map((exam, index) => (
                    <div key={index} className="p-4 border border-islamic-gold/30 rounded-lg">
                      <h3 className="font-cairo text-islamic-primary font-medium mb-2">
                        {exam.subject}
                      </h3>
                      <div className="text-sm text-islamic-light font-cairo">
                        <p>التاريخ: {exam.date}</p>
                        <p>الوقت: {exam.time}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2 border-islamic-primary text-islamic-primary hover:bg-islamic-primary hover:text-white font-cairo"
                      >
                        استعد للامتحان
                      </Button>
                    </div>
                  ))}
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

export default Student;
