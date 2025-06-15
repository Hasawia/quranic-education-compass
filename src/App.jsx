
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Instructors from "./pages/Instructors";
import Student from "./pages/Student";
import Activities from "./pages/Activities";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TahfeezCourse from "./pages/TahfeezCourse";
import CourseAttendance from "./pages/CourseAttendance";
import StudentProfile from "./pages/StudentProfile";
import CoursePage from "./pages/CoursePage";
import InstructorPage from "./pages/InstructorPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/student" element={<Student />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tahfeez-course" element={<TahfeezCourse />} />
          <Route path="/course-attendance" element={<CourseAttendance />} />
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/course-page" element={<CoursePage />} />
          <Route path="/instructor-page" element={<InstructorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
