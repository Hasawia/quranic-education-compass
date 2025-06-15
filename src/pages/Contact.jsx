
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

// صفحة التواصل معنا
const Contact = () => {
  // حالة نموذج التواصل
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // معلومات الاتصال
  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      details: ['+966 11 123 4567', '+966 50 123 4567'],
      color: 'text-islamic-gold'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['info@khalidmosque.edu.sa', 'admin@khalidmosque.edu.sa'],
      color: 'text-islamic-gold'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['حي الملك فهد، الرياض', 'المملكة العربية السعودية'],
      color: 'text-islamic-gold'
    },
    {
      icon: Clock,
      title: 'أوقات العمل',
      details: ['السبت - الخميس: 8:00 ص - 10:00 م', 'الجمعة: 2:00 م - 10:00 م'],
      color: 'text-islamic-gold'
    }
  ];

  // أقسام المسجد للتواصل
  const departments = [
    {
      name: 'قسم التحفيظ',
      email: 'tahfeez@khalidmosque.edu.sa',
      phone: '+966 11 123 4571',
      description: 'للاستفسار عن برامج تحفيظ القرآن الكريم'
    },
    {
      name: 'قسم التعليم',
      email: 'education@khalidmosque.edu.sa',
      phone: '+966 11 123 4572',
      description: 'للاستفسار عن الدورات التعليمية والمناهج'
    },
    {
      name: 'قسم الأنشطة',
      email: 'activities@khalidmosque.edu.sa',
      phone: '+966 11 123 4573',
      description: 'للاستفسار عن الأنشطة والفعاليات'
    },
    {
      name: 'قسم التسجيل',
      email: 'registration@khalidmosque.edu.sa',
      phone: '+966 11 123 4574',
      description: 'للتسجيل في البرامج والدورات'
    }
  ];

  // معالج تغيير المدخلات
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // معالج إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('تم إرسال الرسالة:', formData);
    // هنا يمكن إضافة منطق إرسال الرسالة
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      
      {/* قسم العنوان الرئيسي */}
      <div className="py-16 bg-gradient-to-br from-islamic-primary to-islamic-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-cairo mb-6">
            تواصل معنا
          </h1>
          <p className="text-xl text-white/90 font-cairo max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم في رحلتكم التعليمية القرآنية
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* معلومات الاتصال السريعة */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <info.icon className={`w-12 h-12 ${info.color} mx-auto mb-4`} />
                  <h3 className="font-bold text-islamic-primary font-cairo mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-islamic-light font-cairo text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* النموذج والأقسام */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* نموذج التواصل */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-islamic-primary font-cairo flex items-center">
                    <MessageCircle className="w-6 h-6 text-islamic-gold mr-3" />
                    أرسل لنا رسالة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-islamic-primary font-cairo font-medium mb-2">
                          الاسم الكامل
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="font-cairo"
                          placeholder="اكتب اسمك الكامل"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-islamic-primary font-cairo font-medium mb-2">
                          البريد الإلكتروني
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="font-cairo"
                          placeholder="example@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-islamic-primary font-cairo font-medium mb-2">
                          رقم الهاتف
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="font-cairo"
                          placeholder="+966 50 123 4567"
                        />
                      </div>
                      <div>
                        <label className="block text-islamic-primary font-cairo font-medium mb-2">
                          الموضوع
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="font-cairo"
                          placeholder="موضوع الرسالة"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-islamic-primary font-cairo font-medium mb-2">
                        الرسالة
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="font-cairo min-h-[150px]"
                        placeholder="اكتب رسالتك هنا..."
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* أقسام المسجد */}
            <div>
              <h2 className="text-2xl font-bold text-islamic-primary font-cairo mb-6">
                أقسام المسجد
              </h2>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <Card key={index} className="shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-islamic-primary font-cairo mb-2">
                        {dept.name}
                      </h3>
                      <p className="text-islamic-light font-cairo text-sm mb-4">
                        {dept.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-islamic-gold mr-2" />
                          <span className="text-sm font-cairo text-islamic-light">
                            {dept.email}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-islamic-gold mr-2" />
                          <span className="text-sm font-cairo text-islamic-light">
                            {dept.phone}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* خريطة الموقع أو معلومات إضافية */}
          <div className="mt-16">
            <Card className="shadow-xl bg-gradient-to-br from-islamic-primary to-islamic-light text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold font-cairo mb-4">
                  زوروا مسجد خالد ابن الوليد
                </h2>
                <p className="font-cairo text-lg mb-6 opacity-90">
                  أهلاً وسهلاً بكم في بيت من بيوت الله، حيث العلم والإيمان
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <MapPin className="w-8 h-8 text-islamic-gold mx-auto mb-2" />
                    <p className="font-cairo">موقع مميز في وسط الرياض</p>
                  </div>
                  <div>
                    <Clock className="w-8 h-8 text-islamic-gold mx-auto mb-2" />
                    <p className="font-cairo">مفتوح طوال أيام الأسبوع</p>
                  </div>
                  <div>
                    <MessageCircle className="w-8 h-8 text-islamic-gold mx-auto mb-2" />
                    <p className="font-cairo">فريق متخصص لخدمتكم</p>
                  </div>
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

export default Contact;
