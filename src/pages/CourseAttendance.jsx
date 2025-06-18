
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Calendar, CheckCircle, XCircle, Clock, Users } from 'lucide-react';

// صفحة حضور الدورة
const CourseAttendance = () => {
  const [selectedMonth, setSelectedMonth] = useState('2024-01');

  const attendanceData = {
    courseName: 'دورة تحفيظ القرآن الكريم',
    totalClasses: 24,
    attended: 22,
    absent: 2,
    attendanceRate: 92,
    currentStreak: 8
  };

  const monthlyAttendance = [
    { date: '2024-01-01', status: 'present', topic: 'مراجعة سورة الفاتحة' },
    { date: '2024-01-03', status: 'present', topic: 'حفظ آيات البقرة 1-5' },
    { date: '2024-01-06', status: 'absent', topic: 'مراجعة الحفظ السابق' },
    { date: '2024-01-08', status: 'present', topic: 'حفظ آيات البقرة 6-10' },
    { date: '2024-01-10', status: 'present', topic: 'أحكام التجويد - المد' },
    { date: '2024-01-13', status: 'present', topic: 'حفظ آيات البقرة 11-15' },
    { date: '2024-01-15', status: 'present', topic: 'مراجعة شاملة' },
    { date: '2024-01-17', status: 'absent', topic: 'حفظ آيات البقرة 16-20' },
    { date: '2024-01-20', status: 'present', topic: 'أحكام التجويد - الإدغام' },
    { date: '2024-01-22', status: 'present', topic: 'حفظ آيات البقرة 21-25' }
  ];

  const upcomingClasses = [
    { date: '2024-01-24', time: '16:00', topic: 'مراجعة الأسبوع', instructor: 'الشيخ أحمد' },
    { date: '2024-01-27', time: '16:00', topic: 'حفظ آيات جديدة', instructor: 'الشيخ أحمد' },
    { date: '2024-01-29', time: '16:00', topic: 'أحكام التجويد', instructor: 'الأستاذ محمد' }
  ];

  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      {/* عنوان الصفحة */}
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-islamic-primary font-cairo mb-2">
            سجل الحضور
          </h1>
          <p className="text-islamic-light font-cairo">
            {attendanceData.courseName}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* إحصائيات الحضور */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-islamic-light font-cairo">إجمالي الحصص</p>
                  <p className="text-2xl font-bold text-islamic-primary">{attendanceData.totalClasses}</p>
                </div>
                <Calendar className="w-8 h-8 text-islamic-gold" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-islamic-light font-cairo">حضور</p>
                  <p className="text-2xl font-bold text-green-600">{attendanceData.attended}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-islamic-light font-cairo">غياب</p>
                  <p className="text-2xl font-bold text-red-600">{attendanceData.absent}</p>
                </div>
                <XCircle className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-islamic-light font-cairo">نسبة الحضور</p>
                  <p className="text-2xl font-bold text-islamic-primary">{attendanceData.attendanceRate}%</p>
                </div>
                <Users className="w-8 h-8 text-islamic-gold" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* سجل الحضور الشهري */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="font-cairo text-islamic-primary">سجل الحضور الشهري</CardTitle>
                  <select 
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="border rounded-md px-3 py-1 font-cairo text-sm"
                  >
                    <option value="2024-01">يناير 2024</option>
                    <option value="2023-12">ديسمبر 2023</option>
                    <option value="2023-11">نوفمبر 2023</option>
                  </select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {monthlyAttendance.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-islamic-cream rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full">
                          {record.status === 'present' ? (
                            <CheckCircle className="w-6 h-6 text-green-500" />
                          ) : (
                            <XCircle className="w-6 h-6 text-red-500" />
                          )}
                        </div>
                        <div>
                          <p className="font-cairo font-medium text-islamic-primary">
                            {new Date(record.date).toLocaleDateString('ar-SA')}
                          </p>
                          <p className="text-sm text-islamic-light font-cairo">
                            {record.topic}
                          </p>
                        </div>
                      </div>
                      <Badge 
                        variant={record.status === 'present' ? 'default' : 'destructive'}
                        className="font-cairo"
                      >
                        {record.status === 'present' ? 'حضور' : 'غياب'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* الشريط الجانبي */}
          <div className="space-y-6">
            {/* الحصص القادمة */}
            <Card>
              <CardHeader>
                <CardTitle className="font-cairo text-islamic-primary">الحصص القادمة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingClasses.map((class_, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-cairo font-medium text-islamic-primary">
                          {class_.topic}
                        </p>
                        <Clock className="w-4 h-4 text-islamic-gold" />
                      </div>
                      <p className="text-sm text-islamic-light font-cairo">
                        {new Date(class_.date).toLocaleDateString('ar-SA')} - {class_.time}
                      </p>
                      <p className="text-sm text-islamic-light font-cairo">
                        المدرس: {class_.instructor}
                      </p>
                      <Button 
                        size="sm" 
                        className="w-full mt-2 bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo"
                      >
                        تأكيد الحضور
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* إحصائيات إضافية */}
            <Card>
              <CardHeader>
                <CardTitle className="font-cairo text-islamic-primary">إحصائيات إضافية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-cairo text-islamic-light">سلسلة الحضور الحالية</span>
                    <Badge className="bg-islamic-gold text-white">
                      {attendanceData.currentStreak} أيام
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-cairo text-islamic-light">أفضل شهر</span>
                    <span className="font-cairo text-islamic-primary">ديسمبر (100%)</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-cairo text-islamic-light">متوسط الحضور</span>
                    <span className="font-cairo text-islamic-primary">94%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* نصائح للحضور */}
            <Card>
              <CardHeader>
                <CardTitle className="font-cairo text-islamic-primary">نصائح للحضور المنتظم</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm font-cairo text-islamic-light">
                  <li>• ضع تذكيرات في هاتفك</li>
                  <li>• احضر مبكراً بـ 10 دقائق</li>
                  <li>• أحضر دفتر الملاحظات</li>
                  <li>• تواصل مع المدرس عند الغياب</li>
                  <li>• احضر مع صديق للتحفيز</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseAttendance;
