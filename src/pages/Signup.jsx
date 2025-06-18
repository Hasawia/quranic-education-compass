
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

// صفحة إنشاء حساب جديد
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    accountType: 'student' // القيمة الافتراضية
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('كلمات المرور غير متطابقة');
      return;
    }
    
    // منطق إنشاء الحساب - إذا كان طالب، يتم تعيين مدرس تحفيظ تلقائياً
    if (formData.accountType === 'student') {
      // تعيين مدرس تحفيظ تلقائي للطالب
      console.log('تم تعيين مدرس تحفيظ للطالب الجديد');
    }
    
    console.log('Signup attempted with:', formData);
    navigate('/login');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRoleChange = (value) => {
    setFormData({
      ...formData,
      accountType: value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-islamic-primary to-islamic-light flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* العودة للصفحة الرئيسية */}
        <Link 
          to="/" 
          className="inline-flex items-center text-white hover:text-islamic-gold transition-colors mb-6 font-cairo"
        >
          ← العودة للصفحة الرئيسية
        </Link>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-islamic-gold rounded-full flex items-center justify-center">
              <span className="text-2xl text-white">🕌</span>
            </div>
            <CardTitle className="text-2xl font-bold text-islamic-primary font-cairo">
              إنشاء حساب جديد
            </CardTitle>
            <CardDescription className="font-cairo">
              انضم إلى مجتمعنا التعليمي
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* اختيار نوع الحساب */}
              <div className="space-y-3">
                <Label className="font-cairo text-islamic-primary font-medium">
                  نوع الحساب
                </Label>
                <RadioGroup value={formData.accountType} onValueChange={handleRoleChange} className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 border border-islamic-gold/30 rounded-lg p-3 hover:bg-islamic-gold/5 transition-colors">
                    <RadioGroupItem value="student" id="student" className="border-islamic-gold text-islamic-gold" />
                    <Label htmlFor="student" className="font-cairo text-islamic-primary cursor-pointer">
                      طالب
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-islamic-gold/30 rounded-lg p-3 hover:bg-islamic-gold/5 transition-colors">
                    <RadioGroupItem value="instructor" id="instructor" className="border-islamic-gold text-islamic-gold" />
                    <Label htmlFor="instructor" className="font-cairo text-islamic-primary cursor-pointer">
                      مدرس
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName" className="font-cairo text-islamic-primary">
                  الاسم الكامل
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="font-cairo focus:border-islamic-gold focus:ring-islamic-gold"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-cairo text-islamic-primary">
                  البريد الإلكتروني
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="font-cairo focus:border-islamic-gold focus:ring-islamic-gold"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="font-cairo text-islamic-primary">
                  رقم الهاتف
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="font-cairo focus:border-islamic-gold focus:ring-islamic-gold"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-cairo text-islamic-primary">
                  كلمة المرور
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="font-cairo focus:border-islamic-gold focus:ring-islamic-gold"
                  placeholder="أدخل كلمة المرور"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="font-cairo text-islamic-primary">
                  تأكيد كلمة المرور
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="font-cairo focus:border-islamic-gold focus:ring-islamic-gold"
                  placeholder="أعد إدخال كلمة المرور"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo font-medium"
              >
                إنشاء الحساب
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600 font-cairo">
                  لديك حساب بالفعل؟{' '}
                  <Link to="/login" className="text-islamic-gold hover:underline font-medium">
                    تسجيل الدخول
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
