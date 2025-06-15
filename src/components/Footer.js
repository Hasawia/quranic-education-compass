
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

// تذييل الصفحة
const Footer = () => {
  return (
    <footer className="bg-islamic-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* معلومات الاتصال */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-cairo text-islamic-gold">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-islamic-gold" />
                <span className="font-cairo">+966 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-islamic-gold" />
                <span className="font-cairo">info@mosque-education.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-islamic-gold" />
                <span className="font-cairo">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-cairo text-islamic-gold">روابط سريعة</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-islamic-gold transition-colors font-cairo">الدورات التعليمية</a>
              <a href="#" className="block hover:text-islamic-gold transition-colors font-cairo">برامج التحفيظ</a>
              <a href="#" className="block hover:text-islamic-gold transition-colors font-cairo">الأنشطة</a>
              <a href="#" className="block hover:text-islamic-gold transition-colors font-cairo">المدرسون</a>
            </div>
          </div>

          {/* وسائل التواصل الاجتماعي */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-cairo text-islamic-gold">تابعنا</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-islamic-light hover:bg-islamic-gold transition-colors p-3 rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-islamic-light hover:bg-islamic-gold transition-colors p-3 rounded-full">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-islamic-light hover:bg-islamic-gold transition-colors p-3 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-islamic-light mt-8 pt-8 text-center">
          <p className="font-cairo text-islamic-cream">
            © 2024 مسجد خالد ابن الوليد. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
