
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Calendar, BookOpen, Trophy, Clock } from 'lucide-react';

// لوحة تحكم الطالب
const Student = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // بيانات الطالب الوهمية
  const studentData = {
    name: 'أحمد محمد',
    level: 'متوسط',
    enrolledCourses: 3,
    completedLessons: 45,
    totalLessons: 60,
    currentSurah: 'سورة البقرة',
    memorizedPages: 85,
    attendance: 92
  };

  const recentActivities = [
    { date: '2024-01-15', activity: 'حضور درس التجويد', type: 'حضور' },
    { date: '2024-01-14', activity: 'اختبار سورة آل عمران', type: 'اختبار', score: 95 },
    { date: '2024-01-13', activity: 'حفظ صفحة جديدة', type: 'حفظ' },
    { date: '2024-01-12', activity: 'مراجعة الحفظ السابق', type: 'مراجعة' }
  ];

  const upcomingClasses = [
    { date: '2024-01-16', time: '16:00', subject: 'التجويد', instructor: 'الشيخ أحمد' },
    { date: '2024-01-17', time: '15:30', subject: 'التفسير', instructor: 'الأستاذ محمد' },
    { date: '2024-01-18', time: '17:00', subject: 'الحفظ', instructor: 'الشيخ عبدالله' }
  ];

  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      {/* عنوان الصفحة */}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-islamic-primary font-cairo mb-2">
            أهلاً وسهلاً، {studentData.name}
          </h1>
          <p className="text-islamic-light font-cairo">
            لوحة تحكم الطالب - تابع تقدمك في رحلة حفظ القرآن الكريم
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-islamic-light font-cairo">الدورات المسجلة</p>
                  <p className="text-2xl font-bold text-islamic-primary">{studentData.enrolledCourses}</p>
                </div>
                <BookOpen className="w-8 h-8 text-islamic-gold" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-islamic-light font-cairo">الصفحات المحفوظة</p>
                  <p className="text-2xl font-bold text-islamic-primary">{studentData.memorizedPages}</p>
                </div>
                <Trophy className="w-8 h-8 text-islamic-gold" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-islamic-light font-cairo">نسبة الحضور</p>
                  <p className="text-2xl font-bold text-islamic-primary">{studentData.attendance}%</p>
                </div>
                <Calendar className="w-8 h-8 text-islamic-gold" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-islamic-light font-cairo">الدروس المكتملة</p>
                  <p className="text-2xl font-bold text-islamic-primary">{studentData.completedLessons}/{studentData.totalLessons}</p>
                </div>
                <Clock className="w-8 h-8 text-islamic-gold" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* التبويبات */}
        <div className="mb-6">
          <div className="flex space-x-4 border-b">
            {[
              { id: 'overview', label: 'نظرة عامة' },
              { id: 'progress', label: 'التقدم' },
              { id: 'schedule', label: 'الجدول' },
              { id: 'activities', label: 'الأنشطة' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-4 font-cairo transition-colors ${
                  activeTab === tab.id
                    ? 'text-islamic-gold border-b-2 border-islamic-gold'
                    : 'text-islamic-light hover:text-islamic-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* محتوى التبويبات */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* العمود الرئيسي */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-cairo text-islamic-primary">تقدم الحفظ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-cairo text-islamic-light">السورة الحالية: {studentData.currentSurah}</span>
                          <span className="font-cairo text-islamic-primary">{Math.round((studentData.completedLessons / studentData.totalLessons) * 100)}%</span>
                        </div>
                        <Progress value={(studentData.completedLessons / studentData.totalLessons) * 100} className="h-3" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="text-center p-4 bg-islamic-cream rounded-lg">
                          <p className="text-2xl font-bold text-islamic-primary">{studentData.memorizedPages}</p>
                          <p className="text-sm text-islamic-light font-cairo">صفحة محفوظة</p>
                        </div>
                        <div className="text-center p-4 bg-islamic-cream rounded-lg">
                          <p className="text-2xl font-bold text-islamic-primary">{studentData.level}</p>
                          <p className="text-sm text-islamic-light font-cairo">المستوى الحالي</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-cairo text-islamic-primary">الأنشطة الأخيرة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-islamic-cream rounded-lg">
                          <div>
                            <p className="font-cairo text-islamic-primary">{activity.activity}</p>
                            <p className="text-sm text-islamic-light font-cairo">{activity.date}</p>
                          </div>
                          <Badge variant={activity.type === 'اختبار' ? 'default' : 'secondary'}>
                            {activity.type}
                            {activity.score && ` - ${activity.score}%`}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'schedule' && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-cairo text-islamic-primary">الحصص القادمة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingClasses.map((class_, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-islamic-cream rounded-lg">
                        <div>
                          <h3 className="font-cairo font-medium text-islamic-primary">{class_.subject}</h3>
                          <p className="text-sm text-islamic-light font-cairo">المدرس: {class_.instructor}</p>
                        </div>
                        <div className="text-left">
                          <p className="font-cairo text-islamic-primary">{class_.date}</p>
                          <p className="text-sm text-islamic-light font-cairo">{class_.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* العمود الجانبي */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-cairo text-islamic-primary">الإنجازات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-islamic-gold rounded-full flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-cairo font-medium text-islamic-primary">حافظ متميز</p>
                      <p className="text-xs text-islamic-light font-cairo">حفظ 50+ صفحة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-islamic-light rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-cairo font-medium text-islamic-primary">منتظم في الحضور</p>
                      <p className="text-xs text-islamic-light font-cairo">حضور 90%+</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-cairo text-islamic-primary">نصائح للتحفيظ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm font-cairo text-islamic-light">
                  <p>• اقرأ الآيات بتدبر قبل الحفظ</p>
                  <p>• كرر الحفظ في أوقات مختلفة</p>
                  <p>• اربط الآيات بمعانيها</p>
                  <p>• احرص على المراجعة اليومية</p>
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
