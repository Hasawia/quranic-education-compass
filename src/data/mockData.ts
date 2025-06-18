
// Mock data for the application
export const instructors = [
  {
    id: 1,
    name: 'الشيخ أحمد محمد',
    specialization: 'تحفيظ القرآن الكريم',
    experience: '15 سنة',
    image: '/placeholder.svg',
    bio: 'متخصص في تحفيظ القرآن الكريم وعلوم التجويد'
  },
  {
    id: 2,
    name: 'الشيخ عبد الرحمن علي',
    specialization: 'علوم القرآن',
    experience: '12 سنة',
    image: '/placeholder.svg',
    bio: 'متخصص في علوم القرآن والتفسير'
  }
];

export const courses = [
  {
    id: 1,
    title: 'دورة تحفيظ القرآن الكريم للمبتدئين',
    instructor: 'الشيخ أحمد محمد',
    duration: '6 أشهر',
    schedule: 'السبت والثلاثاء 5:00 مساءً',
    description: 'دورة مخصصة للمبتدئين في تحفيظ القرآن الكريم'
  },
  {
    id: 2,
    title: 'دورة التجويد المتقدمة',
    instructor: 'الشيخ عبد الرحمن علي',
    duration: '4 أشهر',
    schedule: 'الأحد والأربعاء 6:00 مساءً',
    description: 'دورة متقدمة في أحكام التجويد وتطبيقها'
  }
];

export const students = [
  {
    id: 1,
    name: 'محمد أحمد',
    course: 'تحفيظ القرآن الكريم للمبتدئين',
    progress: 75,
    attendance: [
      { date: '2024-01-15', present: true },
      { date: '2024-01-17', present: true },
      { date: '2024-01-20', present: false },
      { date: '2024-01-22', present: true }
    ]
  },
  {
    id: 2,
    name: 'عبد الله سالم',
    course: 'التجويد المتقدمة',
    progress: 60,
    attendance: [
      { date: '2024-01-16', present: true },
      { date: '2024-01-19', present: true },
      { date: '2024-01-21', present: true },
      { date: '2024-01-23', present: false }
    ]
  }
];

export const mockAttendanceData = [
  {
    day: 'السبت',
    date: '2024-01-20',
    students: [
      { name: 'محمد أحمد', status: 'حاضر' },
      { name: 'علي محمود', status: 'حاضر' },
      { name: 'عبد الله سالم', status: 'غائب' },
      { name: 'حمزة خالد', status: 'حاضر' },
      { name: 'يوسف إبراهيم', status: 'حاضر' },
      { name: 'عمر حسين', status: 'غائب' }
    ]
  },
  {
    day: 'الثلاثاء',
    date: '2024-01-23',
    students: [
      { name: 'محمد أحمد', status: 'حاضر' },
      { name: 'علي محمود', status: 'غائب' },
      { name: 'عبد الله سالم', status: 'حاضر' },
      { name: 'حمزة خالد', status: 'حاضر' },
      { name: 'يوسف إبراهيم', status: 'حاضر' },
      { name: 'عمر حسين', status: 'حاضر' }
    ]
  },
  {
    day: 'السبت',
    date: '2024-01-27',
    students: [
      { name: 'محمد أحمد', status: 'حاضر' },
      { name: 'علي محمود', status: 'حاضر' },
      { name: 'عبد الله سالم', status: 'حاضر' },
      { name: 'حمزة خالد', status: 'غائب' },
      { name: 'يوسف إبراهيم', status: 'حاضر' },
      { name: 'عمر حسين', status: 'حاضر' }
    ]
  },
  {
    day: 'الثلاثاء',
    date: '2024-01-30',
    students: [
      { name: 'محمد أحمد', status: 'غائب' },
      { name: 'علي محمود', status: 'حاضر' },
      { name: 'عبد الله سالم', status: 'حاضر' },
      { name: 'حمزة خالد', status: 'حاضر' },
      { name: 'يوسف إبراهيم', status: 'غائب' },
      { name: 'عمر حسين', status: 'حاضر' }
    ]
  }
];
