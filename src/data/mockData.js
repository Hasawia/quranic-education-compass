
// بيانات وهمية للتطبيق

// بيانات المدرسين
export const mockInstructors = [
  {
    id: 1,
    name: 'الشيخ أحمد محمد',
    email: 'ahmed.mohamed@mosque.com',
    phone: '+966 555 123 456',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    specializations: ['تحفيظ القرآن', 'التجويد', 'القراءات'],
    bio: 'معلم قرآن كريم بخبرة 15 عام في تحفيظ وتعليم القرآن الكريم. حاصل على إجازة في القراءات العشر ومتخصص في تعليم التجويد للمبتدئين والمتقدمين.',
    courses: ['دورة تحفيظ القرآن الكريم', 'دورة التجويد المتقدم', 'دورة القراءات']
  },
  {
    id: 2,
    name: 'الشيخ محمد حسن',
    email: 'mohamed.hassan@mosque.com',
    phone: '+966 555 234 567',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
    specializations: ['الفقه', 'العقيدة', 'التفسير'],
    bio: 'دكتور في الشريعة الإسلامية من جامعة الأزهر، متخصص في الفقه والعقيدة. يدرّس لأكثر من 20 عام ويحمل عدة مؤلفات في الفقه المعاصر.',
    courses: ['دورة الفقه الإسلامي', 'دورة العقيدة', 'دورة التفسير']
  },
  {
    id: 3,
    name: 'الشيخ عبدالرحمن علي',
    email: 'abdulrahman.ali@mosque.com',
    phone: '+966 555 345 678',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    specializations: ['السيرة النبوية', 'الحديث الشريف', 'الأخلاق'],
    bio: 'باحث في السيرة النبوية والحديث الشريف، حاصل على ماجستير في الحديث من الجامعة الإسلامية. يركز على تطبيق الأخلاق النبوية في الحياة المعاصرة.',
    courses: ['دورة السيرة النبوية', 'دورة الحديث الشريف', 'دورة الأخلاق الإسلامية']
  }
];

// بيانات حضور الطلاب
export const mockAttendanceData = [
  {
    day: 'الأحد',
    date: '2024-01-14',
    students: [
      { name: 'محمد علي أحمد', status: 'حاضر' },
      { name: 'عبدالله محمد حسن', status: 'حاضر' },
      { name: 'يوسف أحمد محمد', status: 'غائب' },
      { name: 'عمر حسن علي', status: 'حاضر' },
      { name: 'سعد عبدالله أحمد', status: 'حاضر' },
      { name: 'خالد محمد يوسف', status: 'حاضر' }
    ]
  },
  {
    day: 'الإثنين',
    date: '2024-01-15',
    students: [
      { name: 'محمد علي أحمد', status: 'حاضر' },
      { name: 'عبدالله محمد حسن', status: 'غائب' },
      { name: 'يوسف أحمد محمد', status: 'حاضر' },
      { name: 'عمر حسن علي', status: 'حاضر' },
      { name: 'سعد عبدالله أحمد', status: 'حاضر' },
      { name: 'خالد محمد يوسف', status: 'حاضر' }
    ]
  },
  {
    day: 'الثلاثاء',
    date: '2024-01-16',
    students: [
      { name: 'محمد علي أحمد', status: 'حاضر' },
      { name: 'عبدالله محمد حسن', status: 'حاضر' },
      { name: 'يوسف أحمد محمد', status: 'حاضر' },
      { name: 'عمر حسن علي', status: 'غائب' },
      { name: 'سعد عبدالله أحمد', status: 'حاضر' },
      { name: 'خالد محمد يوسف', status: 'حاضر' }
    ]
  },
  {
    day: 'الأربعاء',
    date: '2024-01-17',
    students: [
      { name: 'محمد علي أحمد', status: 'حاضر' },
      { name: 'عبدالله محمد حسن', status: 'حاضر' },
      { name: 'يوسف أحمد محمد', status: 'حاضر' },
      { name: 'عمر حسن علي', status: 'حاضر' },
      { name: 'سعد عبدالله أحمد', status: 'غائب' },
      { name: 'خالد محمد يوسف', status: 'حاضر' }
    ]
  },
  {
    day: 'الخميس',
    date: '2024-01-18',
    students: [
      { name: 'محمد علي أحمد', status: 'حاضر' },
      { name: 'عبدالله محمد حسن', status: 'حاضر' },
      { name: 'يوسف أحمد محمد', status: 'حاضر' },
      { name: 'عمر حسن علي', status: 'حاضر' },
      { name: 'سعد عبدالله أحمد', status: 'حاضر' },
      { name: 'خالد محمد يوسف', status: 'حاضر' }
    ]
  }
];

// بيانات الطلاب
export const mockStudents = [
  {
    id: 1,
    name: 'محمد علي أحمد',
    email: 'mohamed.ali@gmail.com',
    phone: '+966 555 111 222',
    level: 'متوسط',
    joinDate: '2023-09-01',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    courses: ['تحفيظ القرآن الكريم', 'التجويد المتقدم'],
    attendance: 95
  },
  {
    id: 2,
    name: 'عبدالله محمد حسن',
    email: 'abdullah.mohamed@gmail.com',
    phone: '+966 555 333 444',
    level: 'مبتدئ',
    joinDate: '2023-10-15',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    courses: ['تحفيظ القرآن الكريم'],
    attendance: 88
  }
];
