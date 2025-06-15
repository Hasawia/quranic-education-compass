
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, User, Award, Calendar, Edit, Eye } from 'lucide-react';

// صفحة المدرس
const InstructorPage = () => {
  // بيانات وهمية للمدرس
  const instructorData = {
    name: 'الشيخ عبدالله أحمد المحمد',
    id: 'INS-2024-001',
    specialization: 'تحفيظ القرآن الكريم والتجويد',
    experience: '15 سنة',
    email: 'abdullah.ahmed@mosque.com',
    phone: '+966 50 123 4567',
    joinDate: '2020-09-01',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'حافظ للقرآن الكريم ومجاز في القراءات العشر، حاصل على إجازة في التجويد من الأزهر الشريف. لديه خبرة واسعة في تعليم وتحفيظ القرآن الكريم للجميع الأعمار.',
    isQuranTeacher: true
  };

  // طلاب التحفيظ المسؤول عنهم
  const quranStudents = [
    {
      id: 1,
      name: 'أحمد محمد العلي',
      level: 'المستوى المتوسط',
      progress: 75,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      lastSurah: 'سورة البقرة',
      accuracy: 95
    },
    {
      id: 2,
      name: 'عمر حسن الأحمد',
      level: 'المستوى المبتدئ',
      progress: 45,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      lastSurah: 'سورة آل عمران',
      accuracy: 88
    },
    {
      id: 3,
      name: 'يوسف أحمد سالم',
      level: 'المستوى المتقدم',
      progress: 90,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      lastSurah: 'سورة النساء',
      accuracy: 98
    }
  ];

  // الدورات التي يدرسها
  const teachingCourses = [
    {
      id: 1,
      name: 'تحفيظ القرآن الكريم',
      students: 25,
      type: 'quran',
      schedule: 'الأحد والثلاثاء والخميس',
      time: '10:00 - 11:30'
    },
    {
      id: 2,
      name: 'التجويد والتلاوة',
      students: 18,
      type: 'course',
      schedule: 'الاثنين والأربعاء',
      time: '14:00 - 15:30'
    }
  ];

  const [selectedStudent, setSelectedStudent] = useState(null);

  // دالة لتحديث تقدم الطالب
  const updateStudentProgress = (studentId, newProgress) => {
    console.log(`تحديث تقدم الطالب ${studentId} إلى ${newProgress}%`);
    // في التطبيق الحقيقي، سيتم إرسال طلب API هنا
  };

  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* عنوان الصفحة */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-islamic-gold font-cairo mb-4">
              لوحة تحكم المدرس
            </h1>
            <p className="text-islamic-light font-cairo text-lg">
              إدارة الطلاب والدورات التعليمية
            </p>
          </div>

          {/* معلومات المدرس */}
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
                      <p className="text-lg font-cairo text-islamic-primary">{instructorData.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-islamic-light font-cairo">رقم المدرس</label>
                      <p className="text-lg font-cairo text-islamic-primary">{instructorData.id}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-islamic-light font-cairo">التخصص</label>
                      <p className="text-lg font-cairo text-islamic-primary">{instructorData.specialization}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-islamic-light font-cairo">البريد الإلكتروني</label>
                      <p className="text-lg font-cairo text-islamic-primary">{instructorData.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-islamic-light font-cairo">الهاتف</label>
                      <p className="text-lg font-cairo text-islamic-primary">{instructorData.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-islamic-light font-cairo">سنوات الخبرة</label>
                      <p className="text-lg font-cairo text-islamic-primary">{instructorData.experience}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <label className="text-sm font-medium text-islamic-light font-cairo">نبذة تعريفية</label>
                  <p className="text-islamic-primary font-cairo mt-2 leading-relaxed">{instructorData.bio}</p>
                </div>
              </CardContent>
            </Card>

            {/* صورة المدرس */}
            <Card>
              <CardHeader>
                <CardTitle className="text-islamic-primary font-cairo text-center">صورة المدرس</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <img 
                  src={instructorData.avatar} 
                  alt="صورة المدرس"
                  className="w-32 h-32 rounded-full object-cover border-4 border-islamic-gold mb-4"
                />
                {instructorData.isQuranTeacher && (
                  <Badge className="bg-islamic-gold text-white font-cairo">
                    <Award className="w-4 h-4 mr-1" />
                    مدرس تحفيظ
                  </Badge>
                )}
              </CardContent>
            </Card>
          </div>

          {/* الدورات التي يدرسها */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-islamic-primary font-cairo">
                <BookOpen className="mr-3" />
                الدورات التي أدرسها
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teachingCourses.map((course) => (
                  <Card key={course.id} className="border-2 border-islamic-gold/20 hover:border-islamic-gold/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg font-cairo text-islamic-primary">{course.name}</CardTitle>
                      <CardDescription className="font-cairo">عدد الطلاب: {course.students}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-cairo text-islamic-light">الجدول:</span>
                          <span className="text-sm font-cairo text-islamic-primary">{course.schedule}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-cairo text-islamic-light">الوقت:</span>
                          <span className="text-sm font-cairo text-islamic-primary">{course.time}</span>
                        </div>
                        <Badge variant={course.type === 'quran' ? 'default' : 'secondary'} className="font-cairo">
                          {course.type === 'quran' ? 'تحفيظ قرآن' : 'دورة تعليمية'}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* طلاب التحفيظ */}
          {instructorData.isQuranTeacher && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-islamic-primary font-cairo">
                  <Users className="mr-3" />
                  طلاب التحفيظ المسؤول عنهم
                  <Badge className="mr-3 bg-islamic-gold text-white font-cairo">
                    {quranStudents.length} طالب
                  </Badge>
                </CardTitle>
                <CardDescription className="font-cairo">
                  يمكنك متابعة تقدم طلابك وتحديث إحصائيات الحفظ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {quranStudents.map((student) => (
                    <Card key={student.id} className="border-2 border-islamic-gold/20 hover:border-islamic-gold/40 transition-colors">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={student.avatar} 
                            alt={student.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-islamic-gold"
                          />
                          <div className="flex-1">
                            <CardTitle className="text-base font-cairo text-islamic-primary">{student.name}</CardTitle>
                            <CardDescription className="font-cairo">{student.level}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {/* تقدم الحفظ */}
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-cairo text-islamic-light">تقدم الحفظ</span>
                              <span className="text-sm font-bold font-cairo text-islamic-primary">{student.progress}%</span>
                            </div>
                            <Progress value={student.progress} className="h-2" />
                          </div>

                          {/* آخر سورة */}
                          <div className="flex justify-between">
                            <span className="text-sm font-cairo text-islamic-light">آخر سورة:</span>
                            <span className="text-sm font-cairo text-islamic-primary">{student.lastSurah}</span>
                          </div>

                          {/* دقة التلاوة */}
                          <div className="flex justify-between">
                            <span className="text-sm font-cairo text-islamic-light">دقة التلاوة:</span>
                            <span className="text-sm font-cairo text-islamic-primary">{student.accuracy}%</span>
                          </div>

                          {/* أزرار الإجراءات */}
                          <div className="flex space-x-2 pt-4">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="flex-1 font-cairo"
                              onClick={() => setSelectedStudent(student)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              عرض
                            </Button>
                            <Button 
                              size="sm" 
                              className="flex-1 bg-islamic-gold hover:bg-islamic-gold/90 font-cairo"
                              onClick={() => updateStudentProgress(student.id, student.progress + 5)}
                            >
                              <Edit className="w-4 h-4 mr-1" />
                              تحديث
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InstructorPage;
