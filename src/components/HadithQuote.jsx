
import { useEffect, useState } from 'react';

// قسم اقتباس الحديث الشريف
const HadithQuote = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-islamic-primary to-islamic-light">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${animate ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          
          {/* زخرفة إسلامية */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 border-2 border-islamic-gold rounded-full flex items-center justify-center">
              <span className="text-2xl text-islamic-gold">📖</span>
            </div>
          </div>

          {/* نص الحديث */}
          <blockquote className="text-white text-xl md:text-2xl font-amiri leading-relaxed mb-8">
            "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"
          </blockquote>

          {/* المصدر */}
          <cite className="text-islamic-gold font-cairo text-lg">
            - صحيح البخاري
          </cite>

          {/* الترجمة */}
          <p className="text-islamic-cream font-cairo text-base mt-4 opacity-90">
            "خيركم من تعلم القرآن وعلمه"
          </p>
        </div>
      </div>
    </section>
  );
};

export default HadithQuote;
