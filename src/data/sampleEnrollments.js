// بيانات تجريبية للمسجلين
const sampleEnrollments = [
    {
        id: 1,
        courseId: 1,
        courseName: "أساسيات التصميم الجرافيكي",
        studentName: "محمد أحمد العلي",
        email: "mohammed.ali@example.com",
        phone: "+968 9234 5678",
        enrollmentDate: "2024-11-15T10:30:00",
        status: "نشط"
    },
    {
        id: 2,
        courseId: 1,
        courseName: "أساسيات التصميم الجرافيكي",
        studentName: "فاطمة خالد",
        email: "fatima.k@example.com",
        phone: "+968 9345 6789",
        enrollmentDate: "2024-11-16T14:20:00",
        status: "نشط"
    },
    {
        id: 3,
        courseId: 2,
        courseName: "تصميم واجهات المستخدم UI/UX",
        studentName: "سارة محمود",
        email: "sarah.m@example.com",
        phone: "+968 9456 7890",
        enrollmentDate: "2024-11-17T09:15:00",
        status: "نشط"
    },
    {
        id: 4,
        courseId: 5,
        courseName: "إدارة الوقت والإنتاجية",
        studentName: "أحمد سعيد",
        email: "ahmed.s@example.com",
        phone: "+968 9567 8901",
        enrollmentDate: "2024-11-18T11:45:00",
        status: "نشط"
    },
    {
        id: 5,
        courseId: 2,
        courseName: "تصميم واجهات المستخدم UI/UX",
        studentName: "ليلى عبدالله",
        email: "layla.a@example.com",
        phone: "+968 9678 9012",
        enrollmentDate: "2024-11-19T13:30:00",
        status: "نشط"
    },
    {
        id: 6,
        courseId: 6,
        courseName: "مهارات القيادة والتأثير",
        studentName: "خالد حسن",
        email: "khaled.h@example.com",
        phone: "+968 9789 0123",
        enrollmentDate: "2024-11-20T10:00:00",
        status: "نشط"
    },
    {
        id: 7,
        courseId: 9,
        courseName: "فن المكياج الاحترافي",
        studentName: "نورة الحارثي",
        email: "noura.h@example.com",
        phone: "+968 9890 1234",
        enrollmentDate: "2024-11-21T15:20:00",
        status: "نشط"
    },
    {
        id: 8,
        courseId: 13,
        courseName: "تعليم البرمجة للأطفال",
        studentName: "عمر الشامسي",
        email: "omar.sh@example.com",
        phone: "+968 9901 2345",
        enrollmentDate: "2024-11-22T09:45:00",
        status: "نشط"
    },
    {
        id: 9,
        courseId: 1,
        courseName: "أساسيات التصميم الجرافيكي",
        studentName: "مريم يوسف",
        email: "mariam.y@example.com",
        phone: "+968 9012 3456",
        enrollmentDate: "2024-11-23T12:10:00",
        status: "نشط"
    },
    {
        id: 10,
        courseId: 15,
        courseName: "اللغة الإنجليزية للأطفال",
        studentName: "عائشة السعيدي",
        email: "aisha.s@example.com",
        phone: "+968 9123 4567",
        enrollmentDate: "2024-11-24T14:00:00",
        status: "نشط"
    },
    {
        id: 11,
        courseId: 6,
        courseName: "مهارات القيادة والتأثير",
        studentName: "يوسف البلوشي",
        email: "yousuf.b@example.com",
        phone: "+968 9234 5671",
        enrollmentDate: "2024-11-25T10:30:00",
        status: "نشط"
    },
    {
        id: 12,
        courseId: 11,
        courseName: "تنسيق الأزياء والموضة",
        studentName: "هدى المقبالي",
        email: "huda.m@example.com",
        phone: "+968 9345 6782",
        enrollmentDate: "2024-11-26T11:15:00",
        status: "نشط"
    }
];

export default sampleEnrollments;
