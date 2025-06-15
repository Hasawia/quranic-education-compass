
// البيانات الوهمية للتطبيق
export const mockStudents = [
  {
    id: 1,
    name: 'محمد علي أحمد',
    email: 'mohammed.ali@email.com',
    phone: '+966501234567',
    level: 'المستوى المتقدم',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    courses: ['تحفيظ القرآن', 'التجويد', 'التفسير'],
    attendance: {
      present: 28,
      absent: 2,
      total: 30
    }
  },
  {
    id: 2,
    name: 'عبدالله محمد حسن',
    email: 'abdullah.mohammed@email.com',
    phone: '+966507654321',
    level: 'المستوى المتوسط',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    courses: ['تحفيظ القرآن', 'الفقه'],
    attendance: {
      present: 25,
      absent: 5,
      total: 30
    }
  }
];

export const mockInstructors = [
  {
    id: 1,
    name: 'الشيخ أحمد محمد السعيد',
    email: 'sheikh.ahmed@mosque.com',
    phone: '+966551234567',
    bio: 'حاصل على الماجستير في علوم القرآن والتفسير، خبرة 15 عام في تدريس القرآن الكريم',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    courses: ['تحفيظ القرآن المستوى المتقدم', 'التفسير', 'التجويد'],
    specializations: ['التفسير', 'التجويد', 'القراءات']
  },
  {
    id: 2,
    name: 'الشيخ محمد حسن العلي',
    email: 'sheikh.mohammed@mosque.com',
    phone: '+966557654321',
    bio: 'دكتور في الشريعة الإسلامية، متخصص في الفقه والحديث',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
    courses: ['الفقه', 'الحديث الشريف', 'العقيدة'],
    specializations: ['الفقه', 'الحديث', 'العقيدة']
  }
];

export const mockCourses = [
  {
    id: 1,
    title: 'دورة تحفيظ القرآن الكريم',
    description: 'دورة شاملة لحفظ القرآن الكريم مع التجويد والتلاوة الصحيحة',
    instructor: mockInstructors[0],
    duration: '6 أشهر',
    students: mockStudents,
    schedule: 'الأحد والثلاثاء والخميس - 5:00 مساءً',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop',
    resources: [
      { name: 'كتاب التجويد المصور', type: 'PDF' },
      { name: 'مصحف برواية حفص', type: 'PDF' },
      { name: 'تسجيلات صوتية للسور', type: 'Audio' }
    ]
  },
  {
    id: 2,
    title: 'دورة التفسير والتدبر',
    description: 'فهم معاني القرآن الكريم وتدبر آياته الحكيمة',
    instructor: mockInstructors[1],
    duration: '4 أشهر',
    students: [mockStudents[1]],
    schedule: 'السبت والاثنين - 7:00 مساءً',
    image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=600&h=400&fit=crop',
    resources: [
      { name: 'تفسير ابن كثير المختصر', type: 'PDF' },
      { name: 'كتاب في ظلال القرآن', type: 'PDF' }
    ]
  }
];

export const mockAttendanceData = [
  {
    date: '2024-01-15',
    day: 'الأحد',
    students: [
      { name: 'محمد علي أحمد', status: 'حاضر' },
      { name: 'عبدالله محمد حسن', status: 'حاضر' },
      { name: 'يوسف أحمد علي', status: 'غائب' },
      { name: 'عمر محمد حسن', status: 'حاضر' }
    ]
  },
  {
    date: '2024-01-17',
    day: 'الثلاثاء',
    students: [
      { name: 'محمد علي أحمد', status: 'حاضر' },
      { name: 'عبدالله محمد حسن', status: 'غائب' },
      { name: 'يوسف أحمد علي', status: 'حاضر' },
      { name: 'عمر محمد حسن', status: 'حاضر' }
    ]
  },
  {
    date: '2024-01-19',
    day: 'الخميس',
    students: [
      { name: 'محمد علي أحمد', status: 'حاضر' },
      { name: 'عبدالله محمد حسن', status: 'حاضر' },
      { name: 'يوسف أحمد علي', status: 'حاضر' },
      { name: 'عمر محمد حسن', status: 'غائب' }
    ]
  }
];
