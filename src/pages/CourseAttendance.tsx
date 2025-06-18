
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { mockAttendanceData } from '@/data/mockData';

// صفحة حضور الدورة
const CourseAttendance = () => {
  const [openDays, setOpenDays] = useState<number[]>([]);

  const toggleDay = (index: number) => {
    setOpenDays(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // حساب إحصائيات الحضور
  const calculateStats = () => {
    const totalDays = mockAttendanceData.length;
    const totalStudents = mockAttendanceData[0]?.students.length || 0;
    
    const dailyStats = mockAttendanceData.map(day => {
      const present = day.students.filter(s => s.status === 'حاضر').length;
      const absent = day.students.filter(s => s.status === 'غائب').length;
      return { day: day.day, present, absent, percentage: (present / totalStudents) * 100 };
    });

    return { totalDays, totalStudents, dailyStats };
  };

  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* العنوان */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-islamic-gold font-cairo mb-4">
              Course's Attendance
            </h1>
            <p className="text-xl text-islamic-light font-cairo">
              متابعة حضور الطلاب في دورة تحفيظ القرآن الكريم
            </p>
          </div>

          {/* إحصائيات سريعة */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-cairo text-islamic-primary">
                  إجمالي الأيام
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-islamic-gold">
                  {stats.totalDays}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-cairo text-islamic-primary">
                  عدد الطلاب
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-islamic-gold">
                  {stats.totalStudents}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-cairo text-islamic-primary">
                  متوسط الحضور
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-islamic-gold">
                  {Math.round(stats.dailyStats.reduce((acc, day) => acc + day.percentage, 0) / stats.dailyStats.length)}%
                </p>
              </CardContent>
            </Card>
          </div>

          {/* قائمة الأيام القابلة للطي */}
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-islamic-primary font-cairo text-center mb-6">
              سجل الحضور اليومي
            </h2>
            
            {mockAttendanceData.map((dayData, index) => (
              <Card key={index} className="shadow-lg">
                <Collapsible open={openDays.includes(index)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader 
                      className="cursor-pointer hover:bg-islamic-cream/50 transition-colors"
                      onClick={() => toggleDay(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <CardTitle className="text-xl font-cairo text-islamic-primary">
                            {dayData.day} - {dayData.date}
                          </CardTitle>
                          <div className="flex space-x-2">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm font-cairo">
                              حاضر: {dayData.students.filter(s => s.status === 'حاضر').length}
                            </span>
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-cairo">
                              غائب: {dayData.students.filter(s => s.status === 'غائب').length}
                            </span>
                          </div>
                        </div>
                        <ChevronDown 
                          className={`h-5 w-5 text-islamic-light transition-transform ${
                            openDays.includes(index) ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {dayData.students.map((student, studentIndex) => (
                          <div 
                            key={studentIndex}
                            className={`flex items-center justify-between p-3 rounded-lg ${
                              student.status === 'حاضر' 
                                ? 'bg-green-50 border border-green-200' 
                                : 'bg-red-50 border border-red-200'
                            }`}
                          >
                            <span className="font-cairo text-islamic-primary font-medium">
                              {student.name}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-cairo font-medium ${
                              student.status === 'حاضر'
                                ? 'bg-green-200 text-green-800'
                                : 'bg-red-200 text-red-800'
                            }`}>
                              {student.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          {/* ملخص الحضور المرئي */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-cairo text-islamic-primary text-center">
                ملخص الحضور اليومي
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.dailyStats.map((dayStat, index) => (
                  <div key={index} className="text-center p-4 bg-islamic-cream rounded-lg">
                    <h3 className="font-bold text-islamic-primary font-cairo mb-2">
                      {dayStat.day}
                    </h3>
                    <div className="relative w-20 h-20 mx-auto mb-2">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#e5e7eb"
                          strokeWidth="10"
                          fill="transparent"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#C6953E"
                          strokeWidth="10"
                          fill="transparent"
                          strokeDasharray={`${dayStat.percentage * 2.51} 251`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-islamic-primary">
                          {Math.round(dayStat.percentage)}%
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-islamic-light font-cairo">
                      {dayStat.present} من {stats.totalStudents}
                    </p>
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

export default CourseAttendance;
