
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// صفحة تسجيل الدخول
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // منطق تسجيل الدخول هنا
    console.log('Login attempted with:', formData);
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
              تسجيل الدخول
            </CardTitle>
            <CardDescription className="font-cairo">
              أدخل بياناتك للوصول إلى حسابك
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <Button 
                type="submit" 
                className="w-full bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo font-medium"
              >
                تسجيل الدخول
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600 font-cairo">
                  ليس لديك حساب؟{' '}
                  <Link to="/signup" className="text-islamic-gold hover:underline font-medium">
                    إنشاء حساب جديد
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

export default Login;
