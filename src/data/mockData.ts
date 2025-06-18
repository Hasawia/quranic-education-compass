
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

export const mockInstructors = [
  {
    id: 1,
    name: 'الشيخ أحمد محمد',
    email: 'ahmed@mosque.com',
    phone: '+966 123 456 789',
    specializations: ['تحفيظ القرآن الكريم', 'أحكام التجويد', 'القراءات'],
    bio: 'حافظ للقرآن الكريم مع إجازة في القراءات العشر، له خبرة 15 سنة في تعليم القرآن الكريم وأحكام التجويد. تخرج من الجامعة الإسلامية بالمدينة المنورة.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    courses: [
      'دورة تحفيظ القرآن الكريم للمبتدئين',
      'دورة أحكام التجويد المتقدمة',
      'دورة القراءات العشر'
    ]
  },
  {
    id: 2,
    name: 'الشيخ عبد الرحمن علي',
    email: 'abdulrahman@mosque.com',
    phone: '+966 123 456 790',
    specializations: ['علوم القرآن', 'التفسير', 'الفقه الإسلامي'],
    bio: 'دكتور في الشريعة الإسلامية من جامعة الأزهر، متخصص في علوم القرآن والتفسير. له 12 سنة خبرة في التدريس والبحث الأكاديمي.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    courses: [
      'دورة علوم القرآن',
      'دورة التفسير الموضوعي',
      'دورة الفقه الإسلامي'
    ]
  },
  {
    id: 3,
    name: 'الشيخ محمد حسن',
    email: 'mohammed@mosque.com',
    phone: '+966 123 456 791',
    specializations: ['السيرة النبوية', 'الحديث الشريف', 'العقيدة'],
    bio: 'متخصص في السيرة النبوية والحديث الشريف، حاصل على الماجستير في الحديث وعلومه. له 10 سنوات خبرة في تدريس العلوم الإسلامية.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop',
    courses: [
      'دورة السيرة النبوية',
      'دورة الحديث الشريف',
      'دورة العقيدة الإسلامية'
    ]
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
