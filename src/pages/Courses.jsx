
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Users, Award, Star, Calendar, User, ChevronRight } from 'lucide-react';

// صفحة الدورات
const Courses = () => {
  // بيانات الدورات المتاحة
  const courses = [
    {
      id: 1,
      title: 'دورة تحفيظ القرآن الكريم',
      description: 'برنامج شامل لتحفيظ القرآن الكريم مع التركيز على الحفظ المتقن والمراجعة المستمرة',
      instructor: 'الشيخ أحمد محمد',
      duration: '12 شهر',
      level: 'جميع المستويات',
      students: 45,
      rating: 4.9,
      price: 'مجاني',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop',
      category: 'تحفيظ',
      features: ['حفظ متدرج', 'مراجعة يومية', 'متابعة فردية', 'اختبارات دورية'],
      startDate: '2024-02-01',
      schedule: 'يومياً 4:00 - 6:00 مساءً'
    },
    {
      id: 2,
      title: 'دورة التجويد المتقدم',
      description: 'تعلم أحكام التجويد وإتقان تلاوة القرآن الكريم بالطريقة الصحيحة',
      instructor: 'الشيخ محمد حسن',
      duration: '6 أشهر',
      level: 'متوسط - متقدم',
      students: 30,
      rating: 4.8,
      price: 'مجاني',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
      category: 'تجويد',
      features: ['أحكام النون والميم', 'المدود', 'القلقلة', 'الإدغام'],
      startDate: '2024-02-15',
      schedule: 'الثلاثاء والخميس 6:00 - 8:00 مساءً'
    },
    {
      id: 3,
      title: 'دورة السيرة النبوية',
      description: 'دراسة شاملة لسيرة النبي محمد صلى الله عليه وسلم وتطبيق دروسها في الحياة المعاصرة',
      instructor: 'الشيخ عبدالرحمن علي',
      duration: '4 أشهر',
      level: 'جميع المستويات',
      students: 60,
      rating: 4.9,
      price: 'مجاني',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
      category: 'سيرة',
      features: ['الحياة المكية', 'الحياة المدنية', 'الغزوات', 'الأخلاق النبوية'],
      startDate: '2024-02-10',
      schedule: 'الجمعة 8:00 - 10:00 مساءً'
    },
    {
      id: 4,
      title: 'دورة الفقه الإسلامي',
      description: 'تعلم أحكام العبادات والمعاملات في الفقه الإسلامي بطريقة مبسطة ومعاصرة',
      instructor: 'الشيخ محمد حسن',
      duration: '8 أشهر',
      level: 'مبتدئ - متوسط',
      students: 25,
      rating: 4.7,
      price: 'مجاني',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop',
      category: 'فقه',
      features: ['فقه العبادات', 'فقه المعاملات', 'أحكام الأسرة', 'القضايا المعاصرة'],
      startDate: '2024-03-01',
      schedule: 'الأحد والأربعاء 7:00 - 9:00 مساءً'
    },
    {
      id: 5,
      title: 'دورة العقيدة الإسلامية',
      description: 'دراسة أركان الإيمان وأصول العقيدة الإسلامية الصحيحة',
      instructor: 'الشيخ أحمد محمد',
      duration: '5 أشهر',
      level: 'جميع المستويات',
      students: 40,
      rating: 4.8,
      price: 'مجاني',
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=300&fit=crop',
      category: 'عقيدة',
      features: ['التوحيد', 'أركان الإيمان', 'الإيمان بالقدر', 'أسماء الله الحسنى'],
      startDate: '2024-02-20',
      schedule: 'السبت والاثنين 6:00 - 8:00 مساءً'
    },
    {
      id: 6,
      title: 'دورة تفسير القرآن الكريم',
      description: 'فهم معاني القرآن الكريم وتدبر آياته والاستفادة من هدايته',
      instructor: 'الشيخ عبدالرحمن علي',
      duration: '10 أشهر',
      level: 'متوسط - متقدم',
      students: 35,
      rating: 4.9,
      price: 'مجاني',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      category: 'تفسير',
      features: ['تفسير مواضيعي', 'أسباب النزول', 'الناسخ والمنسوخ', 'الإعجاز القرآني'],
      startDate: '2024-03-15',
      schedule: 'الثلاثاء والجمعة 8:00 - 10:00 مساءً'
    }
  ];

  // فئات الدورات
  const categories = [
    'جميع الدورات',
    'تحفيظ',
    'تجويد',
    'سيرة',
    'فقه',
    'عقيدة',
    'تفسير'
  ];

  // إحصائيات الدورات
  const courseStats = [
    { icon: BookOpen, number: '15+', label: 'دورة متاحة' },
    { icon: Users, number: '500+', label: 'طالب مسجل' },
    { icon: User, number: '10+', label: 'معلم متخصص' },
    { icon: Award, number: '95%', label: 'معدل إتمام' }
  ];

  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      {/* قسم العنوان الرئيسي */}
      <div className="py-16 bg-gradient-to-br from-islamic-primary to-islamic-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-cairo mb-6">
            الدورات التعليمية
          </h1>
          <p className="text-xl text-white/90 font-cairo max-w-3xl mx-auto">
            برامج تعليمية شاملة في العلوم الشرعية والقرآن الكريم مع نخبة من المعلمين المتخصصين
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* إحصائيات الدورات */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {courseStats.map((stat, index) => (
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

          {/* فلتر الفئات */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-islamic-primary font-cairo mb-6 text-center">
              تصفح الدورات حسب الفئة
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 
                    ? "bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo" 
                    : "border-islamic-primary text-islamic-primary hover:bg-islamic-primary hover:text-white font-cairo"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* قائمة الدورات */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {courses.map((course) => (
              <Card key={course.id} className="shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-islamic-gold text-white font-cairo">
                      {course.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-islamic-primary font-cairo">
                      {course.price}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-islamic-light font-cairo text-xs">
                      {course.level}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-islamic-light font-cairo mr-1">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-islamic-primary font-cairo mb-3">
                    {course.title}
                  </h3>
                  
                  <p className="text-islamic-light font-cairo mb-4 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-islamic-light">
                        <User className="w-4 h-4 text-islamic-gold mr-2" />
                        <span className="font-cairo">{course.instructor}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-islamic-light">
                        <Clock className="w-4 h-4 text-islamic-gold mr-2" />
                        <span className="font-cairo">{course.duration}</span>
                      </div>
                      <div className="flex items-center text-islamic-light">
                        <Users className="w-4 h-4 text-islamic-gold mr-2" />
                        <span className="font-cairo">{course.students} طالب</span>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-islamic-light">
                      <Calendar className="w-4 h-4 text-islamic-gold mr-2" />
                      <span className="font-cairo">يبدأ في {course.startDate}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-islamic-light font-cairo mb-2">ما ستتعلمه:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs font-cairo">
                          {feature}
                        </Badge>
                      ))}
                      {course.features.length > 2 && (
                        <Badge variant="secondary" className="text-xs font-cairo">
                          +{course.features.length - 2} المزيد
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo text-sm"
                      onClick={() => window.location.href = '/course-page'}
                    >
                      التسجيل في الدورة
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-islamic-primary text-islamic-primary hover:bg-islamic-primary hover:text-white"
                      onClick={() => window.location.href = '/course-page'}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* دعوة للتسجيل */}
          <div className="text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-islamic-primary to-islamic-light text-white shadow-2xl">
              <CardContent className="p-12">
                <BookOpen className="w-16 h-16 text-islamic-gold mx-auto mb-6" />
                <h2 className="text-4xl font-bold font-cairo mb-6">
                  ابدأ رحلتك التعليمية اليوم
                </h2>
                <p className="font-cairo text-xl mb-8 opacity-90 leading-relaxed">
                  انضم إلى آلاف الطلاب الذين يتعلمون القرآن الكريم والعلوم الشرعية
                  <br />
                  في بيئة تعليمية محفزة ومع معلمين متخصصين
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo px-8 py-3"
                    onClick={() => window.location.href = '/contact'}
                  >
                    سجل الآن
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-islamic-primary font-cairo px-8 py-3"
                    onClick={() => window.location.href = '/instructors'}
                  >
                    تعرف على المعلمين
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

export default Courses;
