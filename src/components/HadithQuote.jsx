
// اقتباس الحديث الشريف
const HadithQuote = () => {
  return (
    <section className="py-20 mt-16 mb-16 relative overflow-hidden">
      {/* خلفية بنمط إسلامي */}
      <div className="absolute inset-0 bg-gradient-to-br from-islamic-primary to-islamic-light opacity-95"></div>
      
      {/* نمط زخرفي إسلامي */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C6953E' fill-opacity='0.6'%3E%3Cpath d='M60 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30S30 46.569 30 30C30 13.431 43.431 0 60 0zm0 15c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm30 30c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30-16.569 0-30-13.431-30-30 0-16.569 13.431-30 30-30zm0 15c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zM30 60c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30S0 106.569 0 90c0-16.569 13.431-30 30-30zm0 15c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zM60 60c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30s-30-13.431-30-30c0-16.569 13.431-30 30-30zm0 15c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      >
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* بطاقة شبه شفافة للحديث */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
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
      </div>
    </section>
  );
};

export default HadithQuote;
