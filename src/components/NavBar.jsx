
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

// شريط التنقل الرئيسي
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // عناصر القائمة الرئيسية
  const menuItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'الدورات', path: '/courses' },
    { name: 'المدرسون', path: '/instructors' },
    { name: 'الأنشطة', path: '/activities' },
    { name: 'تواصل معنا', path: '/contact' }
  ];

  const handleLogout = () => {
    navigate('/');
    setUserMenuOpen(false);
  };

  return (
    <nav className="bg-islamic-primary/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* الشعار */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-islamic-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🕌</span>
            </div>
            <span className="text-white font-bold text-xl font-cairo hidden sm:block">
              مسجد خالد ابن الوليد
            </span>
          </Link>

          {/* القائمة الرئيسية للشاشات الكبيرة */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-cairo transition-colors ${
                  location.pathname === item.path
                    ? 'text-islamic-gold border-b-2 border-islamic-gold'
                    : 'text-white hover:text-islamic-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* قائمة المستخدم وزر القائمة للموبايل */}
          <div className="flex items-center space-x-4">
            
            {/* قائمة المستخدم */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 text-white hover:text-islamic-gold transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="font-cairo hidden sm:block">حسابي</span>
              </button>

              {/* قائمة منسدلة للمستخدم */}
              {userMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link
                    to="/student-profile"
                    className="block px-4 py-2 text-islamic-primary hover:bg-islamic-cream font-cairo"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    الملف الشخصي
                  </Link>
                  <Link
                    to="/student"
                    className="block px-4 py-2 text-islamic-primary hover:bg-islamic-cream font-cairo"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    لوحة الطالب
                  </Link>
                  <hr className="my-2" />
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-islamic-primary hover:bg-islamic-cream font-cairo"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    تسجيل الدخول
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-islamic-cream font-cairo"
                  >
                    <LogOut className="w-4 h-4 inline ml-2" />
                    تسجيل الخروج
                  </button>
                </div>
              )}
            </div>

            {/* زر القائمة للموبايل */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-islamic-gold transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* القائمة المنسدلة للموبايل */}
        {isOpen && isMobile && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-cairo py-2 px-4 rounded transition-colors ${
                    location.pathname === item.path
                      ? 'text-islamic-gold bg-islamic-light'
                      : 'text-white hover:text-islamic-gold hover:bg-islamic-light'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
