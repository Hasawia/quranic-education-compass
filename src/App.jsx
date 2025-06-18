
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Instructors from './pages/Instructors';
import Student from './pages/Student';
import TahfeezCourse from './pages/TahfeezCourse';
import CourseAttendance from './pages/CourseAttendance';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentProfile from './pages/StudentProfile';
import Contact from './pages/Contact';
import Activities from './pages/Activities';
import Courses from './pages/Courses';
import InstructorPage from './pages/InstructorPage';
import NotFound from './pages/NotFound';

// المكون الرئيسي للتطبيق
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Index />} />
          
          {/* صفحات التعليم والدورات */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/tahfeez-course" element={<TahfeezCourse />} />
          <Route path="/course-attendance" element={<CourseAttendance />} />
          
          {/* صفحات المدرسين والطلاب */}
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructor-page" element={<InstructorPage />} />
          <Route path="/student" element={<Student />} />
          <Route path="/student-profile" element={<StudentProfile />} />
          
          {/* صفحات المصادقة */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* صفحات أخرى */}
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* صفحة عدم العثور */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
