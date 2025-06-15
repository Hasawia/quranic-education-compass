
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { User, BookOpen, Users, Award, Edit3, Eye } from 'lucide-react';

const InstructorPage = () => {
  // بيانات وهمية للمدرس
  const instructorData = {
    name: 'الشيخ أحمد محمد السعيد',
    id: 'INS-2024-001',
    email: 'sheikh.ahmed@mosque.com',
    phone: '+966 555 123 456',
    bio: 'حاصل على الماجستير في علوم القرآن والتفسير، خبرة 15 عام في تدريس القرآن الكريم',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    isQuranTeacher: true, // مدرس تحفيظ
    teachesOptionalCourses: true, // يدرس دورات اختيارية أيضاً
    // طلاب التحفيظ المسؤول عنهم
    quranStudents: [
      {
        id: 1,
        name: 'محمد عبدالله أحمد',
        progress: 65,
        currentSurah: 'سورة البقرة',
        memorizedSurahs: 25,
        lastUpdate: '2024-01-15'
      },
      {
        id: 2,
        name: 'عبدالله محمد حسن',
        progress: 45,
        currentSurah: 'سورة آل عمران',
        memorizedSurahs: 18,
        lastUpdate: '2024-01-14'
      },
      {
        id: 3,
        name: 'يوسف أحمد علي',
        progress: 80,
        currentSurah: 'سورة النساء',
        memorizedSurahs: 35,
        lastUpdate: '2024-01-16'
      }
    ],
    // الدورات الاختيارية التي يدرسها
    optionalCourses: [
      {
        id: 1,
        name: 'دورة التجويد المتقدم',
        students: 15,
        schedule: 'الثلاثاء والخميس 6:00 مساءً'
      },
      {
        id: 2,
        name: 'دورة التفسير',
        students: 12,
        schedule: 'السبت 4:00 مساءً'
      }
    ]
  };

  // دالة لتحديث تقدم طالب في حفظ القرآن
  const updateStudentProgress = (studentId, newProgress) => {
    console.log(`تحديث تقدم الطالب ${studentId} إلى ${newProgress}%`);
    // منطق التحديث هنا
  };

  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      {/* قسم الترحيب */}
      <div className="py-12 bg-gradient-to-br from-islamic-primary to-islamic-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-cairo mb-4">
              مرحباً {instructorData.name}
            </h1>
            <p className="text-xl font-cairo opacity-90">
              لوحة تحكم المدرس - إدارة الطلاب والدورات
            </p>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* معلومات المدرس الأساسية */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* معلومات المدرس */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-islamic-primary font-cairo">
                  ملف المدرس
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <img 
                    src={instructorData.image} 
                    alt={instructorData.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-islamic-gold"
                  />
                  <div className="flex-1">
                    <h3 className="font-cairo font-bold text-islamic-primary text-xl mb-2">
                      {instructorData.name}
                    </h3>
                    <p className="text-islamic-light font-cairo mb-2">
                      {instructorData.email}
                    </p>
                    <p className="text-islamic-light font-cairo mb-4">
                      {instructorData.phone}
                    </p>
                    <p className="text-sm text-islamic-primary font-cairo leading-relaxed">
                      {instructorData.bio}
                    </p>
                    
                    {/* شارات التخصص */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {instructorData.isQuranTeacher && (
                        <span className="bg-islamic-gold text-white px-3 py-1 rounded-full text-sm font-cairo">
                          مدرس تحفيظ
                        </span>
                      )}
                      {instructorData.teachesOptionalCourses && (
                        <span className="bg-islamic-primary text-white px-3 py-1 rounded-full text-sm font-cairo">
                          دورات اختيارية
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* إحصائيات سريعة */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-islamic-gold mx-auto mb-3" />
                  <h3 className="font-cairo font-bold text-islamic-primary mb-1">طلاب التحفيظ</h3>
                  <p className="text-2xl font-bold text-islamic-gold">{instructorData.quranStudents.length}</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 text-islamic-gold mx-auto mb-3" />
                  <h3 className="font-cairo font-bold text-islamic-primary mb-1">الدورات الاختيارية</h3>
                  <p className="text-2xl font-bold text-islamic-gold">{instructorData.optionalCourses.length}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* إدارة طلاب التحفيظ */}
          {instructorData.isQuranTeacher && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-islamic-primary font-cairo mb-6 text-center">
                إدارة طلاب التحفيظ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instructorData.quranStudents.map((student) => (
                  <Card key={student.id} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-islamic-primary font-cairo text-lg">
                        {student.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* تقدم الطالب */}
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-cairo text-islamic-light">تقدم الحفظ</span>
                            <span className="text-sm font-cairo text-islamic-primary font-bold">
                              {student.progress}%
                            </span>
                          </div>
                          <Progress value={student.progress} className="h-2" />
                        </div>

                        {/* السورة الحالية */}
                        <div>
                          <p className="text-sm text-islamic-light font-cairo mb-1">السورة الحالية</p>
                          <p className="font-cairo text-islamic-primary font-medium">{student.currentSurah}</p>
                        </div>

                        {/* عدد السور المحفوظة */}
                        <div>
                          <p className="text-sm text-islamic-light font-cairo mb-1">السور المحفوظة</p>
                          <p className="font-cairo text-islamic-primary font-bold">{student.memorizedSurahs} سورة</p>
                        </div>

                        {/* آخر تحديث */}
                        <div>
                          <p className="text-xs text-islamic-light font-cairo">
                            آخر تحديث: {student.lastUpdate}
                          </p>
                        </div>

                        {/* أزرار الإدارة */}
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-islamic-primary hover:bg-islamic-primary/90 text-white font-cairo"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            عرض الملف
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="flex-1 border-islamic-gold text-islamic-gold hover:bg-islamic-gold hover:text-white font-cairo"
                            onClick={() => updateStudentProgress(student.id, student.progress + 5)}
                          >
                            <Edit3 className="w-4 h-4 mr-1" />
                            تحديث التقدم
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* الدورات الاختيارية */}
          {instructorData.teachesOptionalCourses && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-islamic-primary font-cairo mb-6 text-center">
                الدورات الاختيارية
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {instructorData.optionalCourses.map((course) => (
                  <Card key={course.id} className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-islamic-primary font-cairo">
                        {course.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-cairo text-islamic-light">عدد الطلاب</span>
                          <span className="font-cairo text-islamic-primary font-bold">{course.students}</span>
                        </div>
                        <div>
                          <p className="text-sm text-islamic-light font-cairo mb-1">مواعيد الدروس</p>
                          <p className="font-cairo text-islamic-primary">{course.schedule}</p>
                        </div>
                        <Button className="w-full bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo">
                          إدارة الدورة
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InstructorPage;
