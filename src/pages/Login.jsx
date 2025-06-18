
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

// صفحة تسجيل الدخول
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', formData);
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-600 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Link 
          to="/" 
          className="inline-flex items-center text-white hover:text-yellow-400 transition-colors mb-6 font-cairo"
        >
          ← العودة للصفحة الرئيسية
        </Link>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-2xl text-white">🕌</span>
            </div>
            <CardTitle className="text-2xl font-bold text-emerald-800 font-cairo">
              تسجيل الدخول
            </CardTitle>
            <CardDescription className="font-cairo">
              أدخل بياناتك للوصول إلى حسابك
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="font-cairo text-emerald-800 block">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-yellow-600 focus:ring-yellow-600 font-cairo"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="font-cairo text-emerald-800 block">
                  كلمة المرور
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-yellow-600 focus:ring-yellow-600 font-cairo"
                  placeholder="أدخل كلمة المرور"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-cairo font-medium"
              >
                تسجيل الدخول
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600 font-cairo">
                  ليس لديك حساب؟{' '}
                  <Link to="/signup" className="text-yellow-600 hover:underline font-medium">
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
