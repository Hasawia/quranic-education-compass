
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// صفحة الدورات
const Courses = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <NavBar />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-yellow-600 font-cairo mb-6">
            الدورات
          </h1>
          <p className="text-xl text-emerald-700 font-cairo">
            صفحة الدورات قيد التطوير
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
