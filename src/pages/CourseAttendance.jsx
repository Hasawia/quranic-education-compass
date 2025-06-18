
import React, { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { attendanceData } from '../data/mockData.js';

// صفحة حضور الدورات
const CourseAttendance = () => {
  const [selectedDate, setSelectedDate] = useState('2024-01-20');
  
  return (
    <div className="min-h-screen bg-amber-50">
      <NavBar />
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-yellow-600 font-cairo mb-8 text-center">
            حضور الدورات
          </h1>
          
          {/* جدول الحضور */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-700 text-white">
                  <tr>
                    <th className="px-6 py-3 text-right font-cairo">اسم الطالب</th>
                    <th className="px-6 py-3 text-right font-cairo">الدورة</th>
                    <th className="px-6 py-3 text-right font-cairo">التاريخ</th>
                    <th className="px-6 py-3 text-right font-cairo">الحالة</th>
                    <th className="px-6 py-3 text-right font-cairo">ملاحظات</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((record) => (
                    <tr key={record.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-cairo">{record.studentName}</td>
                      <td className="px-6 py-4 font-cairo">{record.course}</td>
                      <td className="px-6 py-4 font-cairo">{record.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-sm font-cairo ${
                          record.status === 'حاضر' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {record.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-cairo">{record.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseAttendance;
