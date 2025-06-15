
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// شريط التنقل الرئيسي
const NavBar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <nav className="bg-islamic-primary/95 backdrop-blur-sm py-4 px-6 shadow-lg relative z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* الشعار */}
        <div className="flex items-center space-x-3">
          <img 
            src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=60&h=60&fit=crop&crop=center" 
            alt="Logo" 
            className="w-12 h-12 rounded-full object-cover border-2 border-islamic-gold"
          />
          <div className="text-white font-cairo">
            <h2 className="text-xl font-bold">مسجد خالد ابن الوليد</h2>
          </div>
        </div>

        {/* روابط التنقل */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-islamic-gold transition-colors font-cairo font-medium">
            Home
          </Link>
          <Link to="/instructors" className="text-white hover:text-islamic-gold transition-colors font-cairo font-medium">
            Instructors
          </Link>
          <Link to="/student" className="text-white hover:text-islamic-gold transition-colors font-cairo font-medium">
            Student
          </Link>
          <Link to="/activities" className="text-white hover:text-islamic-gold transition-colors font-cairo font-medium">
            Activities
          </Link>
          <Link to="/courses" className="text-white hover:text-islamic-gold transition-colors font-cairo font-medium">
            Courses
          </Link>
          <Link to="/contact" className="text-white hover:text-islamic-gold transition-colors font-cairo font-medium">
            Contact Us
          </Link>
        </div>

        {/* أزرار تسجيل الدخول والتسجيل */}
        <div className="flex items-center space-x-3">
          <Button 
            onClick={handleLogin}
            variant="outline" 
            className="border-islamic-gold text-islamic-gold hover:bg-islamic-gold hover:text-white font-cairo"
          >
            Login
          </Button>
          <Button 
            onClick={handleSignup}
            className="bg-islamic-gold hover:bg-islamic-gold/90 text-white font-cairo"
          >
            Signup
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
