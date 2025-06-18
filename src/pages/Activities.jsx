
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Trophy, BookOpen, Heart, Star } from 'lucide-react';

// صفحة الأنشطة
const Activities = () => {
  // الأنشطة القادمة
  const upcomingActivities = [
    {
      id: 1,
      title: 'مسابقة حفظ القرآن الكريم السنوية',
      description: 'مسابقة شاملة لحفظة القرآن الكريم على مستوى المسجد',
      date: '2024-02-15',
      time: '4:00 مساءً',
      location: 'قاعة المحاضرات الكبرى',
      participants: '50+ مشارك',
      category: 'مسابقات',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop',
      icon: Trophy
    },
    {
      id: 2,
      title: 'محاضرة: السيرة النبوية الشريفة',
      description: 'سلسلة محاضرات حول سيرة النبي محمد صلى الله عليه وسلم',
      date: '2024-02-10',
      time: '8:00 مساءً',
      location: 'قاعة المحاضرات',
      participants: '100+ حضور',
      category: 'محاضرات',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
      icon: BookOpen
    },
    {
      id: 3,
      title: 'برنامج الإفطار الجماعي',
      description: 'إفطار جماعي لتعزيز الروابط الأخوية بين المصلين',
      date: '2024-02-12',
      time: '7:00 مساءً',
      location: 'قاعة الطعام',
      participants: '200+ مشارك',
      category: 'اجتماعي',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop',
      icon: Heart
    }
  ];

  // الأنشطة المنتظمة
  const regularActivities = [
    {
      title: 'حلقات التحفيظ اليومية',
      description: 'حلقات يومية لتحفيظ القرآن الكريم للأطفال والكبار',
      schedule: 'يومياً بعد صلاة المغرب',
      instructor: 'مجموعة من المعلمين المتخصصين'
    },
    {
      title: 'دروس التجويد الأسبوعية',
      description: 'دروس متخصصة في علم التجويد وأحكام التلاوة',
      schedule: 'كل ثلاثاء وخميس 6:00 مساءً',
      instructor: 'الشيخ أحمد محمد'
    },
    {
      title: 'مجالس العلم',
      description: 'مجالس علمية لدراسة العقيدة والفقه والتفسير',
      schedule: 'كل جمعة بعد صلاة الجمعة',
      instructor: 'علماء ومشايخ متخصصون'
    },
    {
      title: 'برنامج الشباب الأسبوعي',
      description: 'أنشطة تفاعلية وتربوية موجهة للشباب',
      schedule: 'كل سبت 4:00 مساءً',
      instructor: 'لجنة أنشطة الشباب'
    }
  ];

  // إحصائيات الأنشطة
  const activityStats = [
    { icon: Trophy, number: '25+', label: 'مسابقة سنوية' },
    { icon: BookOpen, number: '50+', label: 'محاضرة ودرس' },
    { icon: Users, number: '500+', label: 'مشارك نشط' },
    { icon: Star, number: '12', label: 'برنامج منتظم' }
  ];

  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      {/* قسم العنوان الرئيسي */}
      <div className="py-16 bg-gradient-to-br from-islamic-primary to-islamic-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-cairo mb-6">
            الأنشطة والفعاليات
          </h1>
          <p className="text-xl text-white/90 font-cairo max-w-3xl mx-auto">
            مجموعة متنوعة من الأنشطة والبرامج التي تثري رحلتكم التعليمية والروحية
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* إحصائيات الأنشطة */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {activityStats.map((stat, index) => (
              <Card key={index} className="shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 text-islamic-gold mx-auto mb-3" />
                  <h3 className="text-3xl font-bold text-islamic-primary font-cairo mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-islamic-light font-cairo">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* الأنشطة القادمة */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-islamic-primary font-cairo mb-8 text-center">
              الأنشطة والفعاليات القادمة
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingActivities.map((activity) => (
                <Card key={activity.id} className="shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-islamic-gold text-white px-3 py-1 rounded-full text-sm font-cairo">
                        {activity.category}
                      </span>
                    </div>
                    <div className="absolute -bottom-6 right-6">
                      <div className="bg-islamic-primary text-white p-3 rounded-full shadow-lg">
                        <activity.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 pt-10">
                    <h3 className="text-xl font-bold text-islamic-primary font-cairo mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-islamic-light font-cairo mb-4 leading-relaxed">
                      {activity.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-islamic-light">
                        <Calendar className="w-4 h-4 text-islamic-gold mr-2" />
                        <span className="font-cairo text-sm">{activity.date}</span>
                      </div>
                      <div className="flex items-center text-islamic-light">
                        <Clock className="w-4 h-4 text-islamic-gold mr-2" />
                        <span className="font-cairo text-sm">{activity.time}</span>
                      </div>
                      <div className="flex items-center text-islamic-light">
                        <MapPin className="w-4 h-4 text-islamic-gold mr-2" />
                        <span className="font-cairo text-sm">{activity.location}</span>
                      </div>
                      <div className="flex items-center text-islamic-light">
                        <Users className="w-4 h-4 text-islamic-gold mr-2" />
                        <span className="font-cairo text-sm">{activity.participants}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo">
                      التسجيل في النشاط
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* الأنشطة المنتظمة */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-islamic-primary font-cairo mb-8 text-center">
              البرامج والأنشطة المنتظمة
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {regularActivities.map((activity, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-islamic-primary font-cairo">
                      {activity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-islamic-light font-cairo mb-4 leading-relaxed">
                      {activity.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-islamic-gold mr-3" />
                        <div>
                          <p className="font-cairo text-islamic-primary font-medium">المواعيد</p>
                          <p className="font-cairo text-islamic-light text-sm">{activity.schedule}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-islamic-gold mr-3" />
                        <div>
                          <p className="font-cairo text-islamic-primary font-medium">المشرف</p>
                          <p className="font-cairo text-islamic-light text-sm">{activity.instructor}</p>
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 border-islamic-primary text-islamic-primary hover:bg-islamic-primary hover:text-white font-cairo"
                    >
                      معرفة المزيد
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* دعوة للمشاركة */}
          <div className="text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-islamic-primary to-islamic-light text-white shadow-2xl">
              <CardContent className="p-12">
                <BookOpen className="w-16 h-16 text-islamic-gold mx-auto mb-6" />
                <h2 className="text-4xl font-bold font-cairo mb-6">
                  انضم إلى أنشطتنا التعليمية
                </h2>
                <p className="font-cairo text-xl mb-8 opacity-90 leading-relaxed">
                  نرحب بمشاركتكم في جميع أنشطتنا وبرامجنا التعليمية والتربوية
                  <br />
                  لتكونوا جزءاً من مجتمع تعليمي متميز
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo px-8 py-3"
                    onClick={() => window.location.href = '/contact'}
                  >
                    تواصل معنا للتسجيل
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-islamic-primary font-cairo px-8 py-3"
                    onClick={() => window.location.href = '/courses'}
                  >
                    استعرض الدورات
                  </Button>
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

export default Activities;
