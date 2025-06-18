
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

// صفحة عدم العثور على الصفحة
const NotFound = () => {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-yellow-600 font-cairo mb-4">404</h1>
        <h2 className="text-3xl font-bold text-emerald-800 font-cairo mb-6">
          الصفحة غير موجودة
        </h2>
        <p className="text-xl text-emerald-700 font-cairo mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة
        </p>
        <Button asChild className="bg-yellow-600 hover:bg-yellow-700 text-white font-cairo">
          <Link to="/">العودة للصفحة الرئيسية</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
