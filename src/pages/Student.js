
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Calendar, Download, User, Award, Clock } from 'lucide-react';

// صفحة الطالب
const Student = () => {
  const [quranProgress] = useState(75); // نسبة حفظ القرآن

  // بيانات وهمية للطالب
  const studentData = {
    name: 'أحمد محمد العلي',
    id: 'STU-2024-001',
    level: 'المستوى المتوسط',
    quranTeacher: 'الشيخ عبدالله أحمد',
    joinDate: '2024-01-15',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  };

  // الدورات المسجل فيها
  const enrolledCourses = [
    {
      id: 1,
      name: 'تحفيظ القرآن الكريم',
      instructor: 'الشيخ عبدالله أحمد',
      progress: 75,
      status: 'active',
      nextClass: '2024-01-20 10:00'
    },
    {
      id: 2,
      name: 'الفقه الإسلامي',
      instructor: 'الدكتور محمد حسن',
      progress: 45,
      status: 'active',
      nextClass: '2024-01-21 14:00'
    },
    {
      id: 3,
      name: 'السيرة النبوية',
      instructor: 'الأستاذ أحمد علي',
      progress: 90,
      status: 'completed',
      nextClass: null
    }
  ];

  // الجدول الأسبوعي
  const weeklySchedule = [
    { day: 'الأحد', course: 'تحفيظ القرآن', time: '10:00 - 11:30', instructor: 'الشيخ عبدالله' },
    { day: 'الاثنين', course: 'الفقه الإسلامي', time: '14:00 - 15:30', instructor: 'د. محمد حسن' },
    { day: 'الثلاثاء', course: 'تحفيظ القرآن', time: '10:00 - 11:30', instructor: 'الشيخ عبدالله' },
    { day: 'الأربعاء', course: 'السيرة النبوية', time: '16:00 - 17:30', instructor: 'أ. أحمد علي' },
    { day: 'الخميس', course: 'تحفيظ القرآن', time: '10:00 - 11:30', instructor: 'الشيخ عبدالله' }
  ];

  // المواد التعليمية
  const courseMaterials = [
    { name: 'كتاب التجويد المصور', type: 'PDF', size: '2.3 MB', downloadUrl: '#' },
    { name: 'أحكام التلاوة', type: 'PDF', size: '1.8 MB', downloadUrl: '#' },
    { name: 'مقاطع صوتية للتلاوة', type: 'Audio', size: '15.2 MB', downloadUrl: '#' },
    { name: 'شرح مخارج الحروف', type: 'Video', size: '45.6 MB', downloadUrl: '#' }
  ];

  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* عنوان الصفحة */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-islamic-gold font-cairo mb-4">
              ملف الطالب
            </h1>
            <p className="text-islamic-light font-cairo text-lg">
              تابع تقدمك الأكاديمي والروحي
            </p>
          </div>

          {/* معلومات الطالب الأساسية */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* بطاقة المعلومات الشخصية */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center text-islamic-primary font-cairo">
                  <User className="mr-3" />
                  المعلومات الشخصية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-islamic-light font-cairo">الاسم الكامل</label>
                      <p className="text-lg font-cairo text-islamic-primary">{studentData.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-islamic-light font-cairo">رقم الطالب</label>
                      <p className="text-lg font-cairo text-islamic-primary">{studentData.id}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-islamic-light font-cairo">المستوى</label>
                      <p className="text-lg font-cairo text-islamic-primary">{studentData.level}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-islamic-light font-cairo">تاريخ الانضمام</label>
                      <p className="text-lg font-cairo text-islamic-primary">{studentData.joinDate}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* صورة الطالب */}
            <Card>
              <CardHeader>
                <CardTitle className="text-islamic-primary font-cairo text-center">صورة الطالب</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <img 
                  src={studentData.avatar} 
                  alt="صورة الطالب"
                  className="w-32 h-32 rounded-full object-cover border-4 border-islamic-gold"
                />
              </CardContent>
            </Card>
          </div>

          {/* إحصائيات حفظ القرآن */}
          <Card className="mb-8 bg-gradient-to-r from-islamic-primary to-islamic-light text-white">
            <CardHeader>
              <CardTitle className="flex items-center font-cairo">
                <BookOpen className="mr-3" />
                تقدم حفظ القرآن الكريم
              </CardTitle>
              <CardDescription className="text-islamic-cream font-cairo">
                مدرس التحفيظ: {studentData.quranTeacher}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-cairo">نسبة الحفظ</span>
                  <span className="text-xl font-bold font-cairo">{quranProgress}%</span>
                </div>
                <Progress value={quranProgress} className="h-3" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold font-cairo">18</div>
                    <div className="text-sm font-cairo opacity-90">سورة محفوظة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold font-cairo">3</div>
                    <div className="text-sm font-cairo opacity-90">أجزاء مكتملة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold font-cairo">450</div>
                    <div className="text-sm font-cairo opacity-90">آية محفوظة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold font-cairo">95%</div>
                    <div className="text-sm font-cairo opacity-90">دقة التلاوة</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* الدورات المسجل فيها */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-islamic-primary font-cairo">
                <BookOpen className="mr-3" />
                الدورات المسجل فيها
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="border-2 border-islamic-gold/20 hover:border-islamic-gold/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg font-cairo text-islamic-primary">{course.name}</CardTitle>
                      <CardDescription className="font-cairo">المدرس: {course.instructor}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-cairo">التقدم</span>
                            <span className="text-sm font-bold font-cairo">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant={course.status === 'active' ? 'default' : 'secondary'} className="font-cairo">
                            {course.status === 'active' ? 'نشط' : 'مكتمل'}
                          </Badge>
                          {course.nextClass && (
                            <div className="text-xs text-islamic-light font-cairo">
                              <Clock className="inline w-3 h-3 mr-1" />
                              {course.nextClass}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* الجدول الأسبوعي */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-islamic-primary font-cairo">
                <Calendar className="mr-3" />
                الجدول الأسبوعي
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right py-3 px-4 font-cairo text-islamic-primary">اليوم</th>
                      <th className="text-right py-3 px-4 font-cairo text-islamic-primary">الدورة</th>
                      <th className="text-right py-3 px-4 font-cairo text-islamic-primary">الوقت</th>
                      <th className="text-right py-3 px-4 font-cairo text-islamic-primary">المدرس</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weeklySchedule.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-islamic-cream/50">
                        <td className="py-3 px-4 font-cairo text-islamic-primary">{item.day}</td>
                        <td className="py-3 px-4 font-cairo text-islamic-light">{item.course}</td>
                        <td className="py-3 px-4 font-cairo text-islamic-light">{item.time}</td>
                        <td className="py-3 px-4 font-cairo text-islamic-light">{item.instructor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* المواد التعليمية */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-islamic-primary font-cairo">
                <Download className="mr-3" />
                المواد التعليمية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseMaterials.map((material, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-islamic-cream/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-islamic-gold rounded-lg flex items-center justify-center">
                        <Download className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium font-cairo text-islamic-primary">{material.name}</p>
                        <p className="text-sm text-islamic-light font-cairo">{material.type} • {material.size}</p>
                      </div>
                    </div>
                    <button className="text-islamic-gold hover:text-islamic-primary transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Student;
