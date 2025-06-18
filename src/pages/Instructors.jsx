
import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { instructors } from '../data/mockData.js';

// صفحة المدرسين
const Instructors = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <NavBar />
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-yellow-600 font-cairo mb-8 text-center">
            المدرسون
          </h1>
          
          {/* شبكة المدرسين */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-700 font-cairo mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-yellow-600 font-cairo mb-2">
                    {instructor.specialization}
                  </p>
                  <p className="text-gray-600 font-cairo mb-3">
                    خبرة: {instructor.experience}
                  </p>
                  <p className="text-gray-700 font-cairo text-sm mb-4">
                    {instructor.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.courses.map((course, index) => (
                      <span 
                        key={index}
                        className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-cairo"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Instructors;
