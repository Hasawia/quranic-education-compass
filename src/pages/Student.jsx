import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Calendar, Award, User, Clock, CheckCircle, FileText, GraduationCap, Download } from 'lucide-react';

// صفحة الطلاب - بوابة الطالب الشاملة
const Student = () => {
  // بيانات وهمية للطالب مع إضافة تتبع حفظ القرآن
  const studentData = {
    name: 'محمد عبدالله أحمد',
    id: 'ST-2024-001',
    level: 'متوسط',
    joinDate: '2023-09-01',
    totalHours: 120,
    completedCourses: 3,
    // إضافة بيانات تقدم حفظ القرآن
    quranProgress: {
      totalSurahs: 114,
      memorizedSurahs: 25,
      currentSurah: 'سورة البقرة',
      memorizedAjzaa: 8,
      totalAjzaa: 30,
      percentage: 65,
      assignedTeacher: 'الشيخ أحمد محمد',
      lastUpdate: '2024-01-15'
    },
    currentCourses: [
      {
        id: 1,
        name: 'تحفيظ القرآن الكريم',
        instructor: 'الشيخ أحمد محمد',
        progress: 75,
        nextClass: 'الأحد 4:00 مساءً',
        currentSurah: 'سورة البقرة',
        grade: 'A',
        isMandatory: true
      },
      {
        id: 2,
        name: 'دورة التجويد المتقدم',
        instructor: 'الشيخ محمد حسن',
        progress: 60,
        nextClass: 'الثلاثاء 6:00 مساءً',
        currentSurah: 'أحكام النون الساكنة',
        grade: 'B+',
        isMandatory: false
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
    ],
    weeklySchedule: [
      { day: 'الأحد', course: 'تحفيظ القرآن الكريم', time: '4:00 - 5:30 مساءً' },
      { day: 'الإثنين', course: 'دورة التجويد المتقدم', time: '6:00 - 7:30 مساءً' },
      { day: 'الثلاثاء', course: 'تحفيظ القرآن الكريم', time: '4:00 - 5:30 مساءً' },
      { day: 'الأربعاء', course: 'دورة التجويد المتقدم', time: '6:00 - 7:30 مساءً' },
      { day: 'الخميس', course: 'تحفيظ القرآن الكريم', time: '4:00 - 5:30 مساءً' }
    ],
    courseMaterials: [
      { name: 'كتاب التجويد المصور', type: 'PDF', size: '2.5 MB' },
      { name: 'مصحف برواية حفص', type: 'PDF', size: '15 MB' },
      { name: 'تسجيلات صوتية للسور', type: 'Audio', size: '45 MB' },
      { name: 'دليل أحكام التجويد', type: 'PDF', size: '1.8 MB' }
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

          {/* قسم تتبع حفظ القرآن الكريم */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-islamic-primary font-cairo mb-6 text-center">
              تتبع حفظ القرآن الكريم
            </h2>
            <Card className="shadow-lg bg-gradient-to-br from-islamic-gold/10 to-islamic-light/10">
              <CardHeader>
                <CardTitle className="text-islamic-primary font-cairo flex items-center justify-between">
                  <span>إحصائيات الحفظ</span>
                  <span className="text-2xl font-bold text-islamic-gold">
                    {studentData.quranProgress.percentage}%
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* السور المحفوظة */}
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl font-bold text-islamic-gold mb-2">
                      {studentData.quranProgress.memorizedSurahs}
                    </div>
                    <div className="text-sm text-islamic-light font-cairo">
                      من {studentData.quranProgress.totalSurahs} سورة
                    </div>
                    <div className="text-xs text-islamic-primary font-cairo mt-1">
                      السور المحفوظة
                    </div>
                  </div>

                  {/* الأجزاء المحفوظة */}
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="text-3xl font-bold text-islamic-gold mb-2">
                      {studentData.quranProgress.memorizedAjzaa}
                    </div>
                    <div className="text-sm text-islamic-light font-cairo">
                      من {studentData.quranProgress.totalAjzaa} جزء
                    </div>
                    <div className="text-xs text-islamic-primary font-cairo mt-1">
                      الأجزاء المحفوظة
                    </div>
                  </div>

                  {/* السورة الحالية */}
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="text-lg font-bold text-islamic-primary mb-2 font-cairo">
                      {studentData.quranProgress.currentSurah}
                    </div>
                    <div className="text-xs text-islamic-light font-cairo">
                      السورة قيد الحفظ
                    </div>
                  </div>

                  {/* المدرس المسؤول */}
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="text-lg font-bold text-islamic-primary mb-2 font-cairo">
                      {studentData.quranProgress.assignedTeacher}
                    </div>
                    <div className="text-xs text-islamic-light font-cairo">
                      مدرس التحفيظ
                    </div>
                  </div>
                </div>

                {/* شريط التقدم العام */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-cairo text-islamic-primary">التقدم العام في الحفظ</span>
                    <span className="text-sm font-cairo text-islamic-gold font-bold">
                      {studentData.quranProgress.percentage}%
                    </span>
                  </div>
                  <Progress value={studentData.quranProgress.percentage} className="h-3 bg-islamic-cream" />
                  <p className="text-xs text-islamic-light font-cairo mt-2">
                    آخر تحديث: {studentData.quranProgress.lastUpdate}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* الدورات الحالية مع التمييز بين الإجبارية والاختيارية */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-islamic-primary font-cairo mb-6 text-center">
              الدورات الحالية
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {studentData.currentCourses.map((course) => (
                <Card key={course.id} className={`shadow-lg ${course.isMandatory ? 'border-2 border-islamic-gold' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-islamic-primary font-cairo flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span>{course.name}</span>
                        {course.isMandatory && (
                          <span className="bg-islamic-gold text-white px-2 py-1 rounded-full text-xs">
                            إجباري
                          </span>
                        )}
                      </div>
                      <span className="bg-islamic-gold text-white px-3 py-1 rounded-full text-sm">
                        {course.grade}
                      </span>
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

          {/* الجدول الأسبوعي والمواد الدراسية */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* الجدول الأسبوعي */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-islamic-primary font-cairo flex items-center">
                  <Calendar className="w-6 h-6 text-islamic-gold mr-2" />
                  الجدول الأسبوعي
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {studentData.weeklySchedule.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-islamic-cream rounded-lg">
                      <div>
                        <p className="font-cairo text-islamic-primary font-medium">{schedule.day}</p>
                        <p className="text-sm text-islamic-light font-cairo">{schedule.course}</p>
                      </div>
                      <p className="text-sm text-islamic-primary font-cairo">{schedule.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* المواد الدراسية */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-islamic-primary font-cairo flex items-center">
                  <FileText className="w-6 h-6 text-islamic-gold mr-2" />
                  المواد الدراسية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {studentData.courseMaterials.map((material, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-islamic-gold/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-islamic-gold/20 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-islamic-gold" />
                        </div>
                        <div>
                          <p className="font-cairo text-islamic-primary font-medium">{material.name}</p>
                          <p className="text-sm text-islamic-light font-cairo">{material.type} - {material.size}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="border-islamic-primary text-islamic-primary hover:bg-islamic-primary hover:text-white">
                        <Download className="w-4 h-4 mr-1" />
                        تحميل
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
                  <GraduationCap className="w-6 h-6 text-islamic-gold mr-2" />
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
