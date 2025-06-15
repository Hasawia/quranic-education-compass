
import NavBar from '@/components/NavBar';
import TopicsCards from '@/components/TopicsCards';
import HadithQuote from '@/components/HadithQuote';
import Footer from '@/components/Footer';

// الصفحة الرئيسية
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* خلفية الصفحة الرئيسية */}
      <div 
        className="relative min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 77, 60, 0.7), rgba(14, 77, 60, 0.7)), url('https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1920&h=1080&fit=crop')`
        }}
      >
        {/* شريط التنقل */}
        <NavBar />

        {/* المحتوى الرئيسي */}
        <div className="flex flex-col items-center justify-start pt-20 px-6 text-center text-white">
          {/* العنوان الرئيسي */}
          <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-amiri mb-6 text-islamic-gold leading-tight">
              مسجد خالد ابن الوليد
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-cairo mb-8 text-islamic-light">
              لتحفيظ وتعليم القرآن الكريم
            </h2>
            <p className="text-lg md:text-xl font-cairo leading-relaxed max-w-3xl mx-auto opacity-90">
              دورة شاملة تهدف إلى تعليم القرآن الكريم تلاوةً وتدبراً وحفظاً، ضمن بيئة تعليمية إيمانية ملهمة تحت إشراف نخبة من المعلمين المتخصصين.
            </p>
          </div>

          {/* تخطيط الصور */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {/* الصورة الكبيرة على اليسار */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=600&fit=crop"
                  alt="Mosque Interior"
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-islamic-primary/20 group-hover:bg-islamic-primary/10 transition-colors"></div>
              </div>
            </div>

            {/* الصورتان المكدستان على اليمين */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop"
                  alt="Quran Study"
                  className="w-full h-36 lg:h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-islamic-primary/20 group-hover:bg-islamic-primary/10 transition-colors"></div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop"
                  alt="Islamic Calligraphy"
                  className="w-full h-36 lg:h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-islamic-primary/20 group-hover:bg-islamic-primary/10 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* قسم بطاقات المواضيع */}
      <TopicsCards />

      {/* قسم اقتباس الحديث */}
      <HadithQuote />

      {/* التذييل */}
      <Footer />
    </div>
  );
};

export default Index;
