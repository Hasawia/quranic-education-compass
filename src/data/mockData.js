
// بيانات وهمية للمشروع

// بيانات المدرسين
export const instructors = [
  {
    id: 1,
    name: 'الشيخ أحمد محمد',
    specialization: 'تحفيظ القرآن الكريم',
    experience: '15 سنة',
    image: '/placeholder.svg',
    courses: ['تحفيظ القرآن', 'التجويد'],
    bio: 'خبير في تحفيظ القرآن الكريم وعلوم التجويد'
  },
  {
    id: 2,
    name: 'الأستاذ محمد علي',
    specialization: 'التجويد والقراءات',
    experience: '12 سنة',
    image: '/placeholder.svg',
    courses: ['التجويد', 'القراءات'],
    bio: 'متخصص في علوم التجويد والقراءات القرآنية'
  },
  {
    id: 3,
    name: 'الشيخ عبد الرحمن أحمد',
    specialization: 'الحديث الشريف',
    experience: '20 سنة',
    image: '/placeholder.svg',
    courses: ['الحديث', 'السيرة النبوية'],
    bio: 'عالم في الحديث الشريف والسيرة النبوية'
  }
];

// بيانات الطلاب
export const students = [
  {
    id: 1,
    name: 'محمد أحمد',
    age: 25,
    level: 'متقدم',
    course: 'تحفيظ القرآن',
    progress: 85,
    joinDate: '2024-01-15'
  },
  {
    id: 2,
    name: 'فاطمة علي',
    age: 22,
    level: 'متوسط',
    course: 'التجويد',
    progress: 70,
    joinDate: '2024-02-10'
  },
  {
    id: 3,
    name: 'عبد الله محمد',
    age: 28,
    level: 'مبتدئ',
    course: 'تحفيظ القرآن',
    progress: 45,
    joinDate: '2024-03-05'
  }
];

// بيانات الدورات
export const courses = [
  {
    id: 1,
    title: 'دورة تحفيظ القرآن الكريم',
    description: 'دورة شاملة لتحفيظ القرآن الكريم مع التجويد',
    instructor: 'الشيخ أحمد محمد',
    duration: '6 أشهر',
    level: 'جميع المستويات',
    students: 45,
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'دورة التجويد المتقدم',
    description: 'تعلم أحكام التجويد والقراءة الصحيحة',
    instructor: 'الأستاذ محمد علي',
    duration: '3 أشهر',
    level: 'متوسط ومتقدم',
    students: 30,
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'دورة الحديث الشريف',
    description: 'دراسة الأحاديث النبوية الشريفة',
    instructor: 'الشيخ عبد الرحمن أحمد',
    duration: '4 أشهر',
    level: 'متقدم',
    students: 25,
    image: '/placeholder.svg'
  }
];

// بيانات الحضور
export const attendanceData = [
  {
    id: 1,
    studentName: 'محمد أحمد',
    course: 'تحفيظ القرآن',
    date: '2024-01-20',
    status: 'حاضر',
    notes: 'أداء ممتاز'
  },
  {
    id: 2,
    studentName: 'فاطمة علي',
    course: 'التجويد',
    date: '2024-01-20',
    status: 'غائب',
    notes: 'عذر مقبول'
  },
  {
    id: 3,
    studentName: 'عبد الله محمد',
    course: 'تحفيظ القرآن',
    date: '2024-01-20',
    status: 'حاضر',
    notes: 'يحتاج المراجعة'
  }
];

// بيانات الأنشطة
export const activities = [
  {
    id: 1,
    title: 'مسابقة القرآن الكريم',
    description: 'مسابقة سنوية لحفظة القرآن الكريم',
    date: '2024-05-15',
    type: 'مسابقة',
    participants: 100
  },
  {
    id: 2,
    title: 'ورشة التجويد',
    description: 'ورشة تدريبية لتعلم أحكام التجويد',
    date: '2024-04-20',
    type: 'ورشة',
    participants: 50
  },
  {
    id: 3,
    title: 'محاضرة السيرة النبوية',
    description: 'محاضرة عن سيرة النبي صلى الله عليه وسلم',
    date: '2024-03-10',
    type: 'محاضرة',
    participants: 80
  }
];
