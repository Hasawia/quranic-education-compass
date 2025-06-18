
import React from 'react';
import { Link } from 'react-router-dom';

// مكون التذييل
const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* معلومات المسجد */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-cairo text-yellow-400">
              مسجد خالد ابن الوليد
            </h3>
            <p className="text-emerald-200 font-cairo">
              مركز متكامل لتعليم وتحفيظ القرآن الكريم
            </p>
          </div>

          {/* روابط سريعة */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-cairo text-yellow-400">
              روابط سريعة
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-emerald-200 hover:text-yellow-400 transition-colors font-cairo">
                  الدورات
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="text-emerald-200 hover:text-yellow-400 transition-colors font-cairo">
                  المدرسون
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-emerald-200 hover:text-yellow-400 transition-colors font-cairo">
                  الأنشطة
                </Link>
              </li>
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-cairo text-yellow-400">
              تواصل معنا
            </h4>
            <div className="space-y-2 text-emerald-200 font-cairo">
              <p>📧 info@mosque.com</p>
              <p>📱 +20 123 456 7890</p>
              <p>📍 القاهرة، مصر</p>
            </div>
          </div>

          {/* أوقات الصلاة */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-cairo text-yellow-400">
              أوقات الصلاة
            </h4>
            <div className="space-y-2 text-emerald-200 font-cairo text-sm">
              <p>الفجر: 5:30</p>
              <p>الظهر: 12:15</p>
              <p>العصر: 3:45</p>
              <p>المغرب: 6:20</p>
              <p>العشاء: 7:45</p>
            </div>
          </div>
        </div>

        {/* خط الفصل */}
        <hr className="border-emerald-700 my-8" />

        {/* حقوق الطبع */}
        <div className="text-center text-emerald-200 font-cairo">
          <p>© 2024 مسجد خالد ابن الوليد. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
