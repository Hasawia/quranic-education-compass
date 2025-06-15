
// اقتباس الحديث الشريف
const HadithQuote = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* خلفية بنمط إسلامي */}
      <div className="absolute inset-0 bg-gradient-to-br from-islamic-primary to-islamic-light opacity-95"></div>
      
      {/* نمط زخرفي */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6953E' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* أيقونة الاقتباس */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-islamic-gold rounded-full">
            <span className="text-2xl text-white font-bold">"</span>
          </div>
        </div>

        {/* نص الحديث */}
        <blockquote className="text-white mb-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold font-amiri leading-relaxed mb-6">
            "مَن سَلَكَ طريقًا يَلتَمِسُ فيهِ عِلمًا، سَهَّلَ اللَّهُ لهُ بهِ طريقًا إلى الجَنَّةِ"
          </p>
          <cite className="text-islamic-gold font-cairo text-lg font-medium">
            صحيح مسلم
          </cite>
        </blockquote>

        {/* خط زخرفي */}
        <div className="flex items-center justify-center space-x-4">
          <div className="w-16 h-px bg-islamic-gold"></div>
          <div className="w-3 h-3 bg-islamic-gold rounded-full"></div>
          <div className="w-16 h-px bg-islamic-gold"></div>
        </div>
      </div>
    </section>
  );
};

export default HadithQuote;
