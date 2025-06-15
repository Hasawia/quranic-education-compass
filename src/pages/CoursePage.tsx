
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-islamic-cream">
      <NavBar />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-islamic-gold font-cairo mb-6">
            Course Page
          </h1>
          <p className="text-xl text-islamic-light font-cairo">
            صفحة الدورة قيد التطوير
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
