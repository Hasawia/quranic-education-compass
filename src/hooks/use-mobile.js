
import { useState, useEffect } from 'react';

// هوك للتحقق من الشاشات الصغيرة
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // التحقق الأولي
    checkIsMobile();

    // إضافة مستمع للتغييرات
    window.addEventListener('resize', checkIsMobile);

    // تنظيف المستمع عند إلغاء التفعيل
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};
