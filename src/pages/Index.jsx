
import NavBar from '../components/NavBar';
import TopicsCards from '../components/TopicsCards';
import HadithQuote from '../components/HadithQuote';
import Footer from '../components/Footer';

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
        <div className="flex items-center justify-center px-6 pt-20 pb-16 text-white">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* النصوص الرئيسية - محاذاة لليمين */}
              <div className="order-2 lg:order-1 text-right">
                <div className="space-y-6 animate-fade-in">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-amiri leading-tight" style={{ color: '#B88A2E' }}>
                    مسجد خالد ابن الوليد
                  </h1>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-cairo mb-8" style={{ color: '#0E4C33' }}>
                    لتعليم وتحفيظ القرآن الكريم
                  </h2>
                  <p className="text-lg md:text-xl font-cairo leading-relaxed opacity-90 max-w-2xl">
                    دورة شاملة تهدف إلى تعليم القرآن الكريم تلاوةً وتدبراً وحفظاً، ضمن بيئة تعليمية إيمانية ملهمة تحت إشراف نخبة من المعلمين المتخصصين.
                  </p>
                </div>
              </div>

              {/* تخطيط الصور - الجانب الأيسر */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-96">
                  {/* الصورة الكبيرة - داخل المسجد الفارغ */}
                  <div className="col-span-1 row-span-2">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl group h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=600&h=800&fit=crop"
                        alt="Empty Mosque Interior"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-islamic-primary/20 group-hover:bg-islamic-primary/10 transition-colors"></div>
                    </div>
                  </div>

                  {/* الصورة الصغيرة العلوية - طلاب يقرؤون القرآن */}
                  <div className="col-span-1">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl group h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop"
                        alt="Students Reading Quran"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-islamic-primary/20 group-hover:bg-islamic-primary/10 transition-colors"></div>
                    </div>
                  </div>

                  {/* الصورة الصغيرة السفلية - معلم يتلو القرآن */}
                  <div className="col-span-1">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl group h-full">
                      <img 
                        src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop"
                        alt="Teacher Reciting Quran"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-islamic-primary/20 group-hover:bg-islamic-primary/10 transition-colors"></div>
                    </div>
                  </div>
                </div>
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
