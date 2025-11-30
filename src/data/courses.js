const courses = [
    // Design & Creativity
    {
        id: 1,
        title: "أساسيات التصميم الجرافيكي",
        description: "تعلم أساسيات التصميم الجرافيكي باستخدام Photoshop و Illustrator",
        category: "التصميم والإبداع",
        categoryId: "design",
        price: "20",
        duration: "8 أسابيع",
        instructor: "أحمد محمد",
        rating: "4.8",
        isFree: false,
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop"
    },
    {
        id: 2,
        title: "تصميم واجهات المستخدم UI/UX",
        description: "احترف تصميم تجربة المستخدم وواجهات التطبيقات الحديثة",
        category: "التصميم والإبداع",
        categoryId: "design",
        price: "30",
        duration: "10 أسابيع",
        instructor: "سارة أحمد",
        rating: "4.9",
        isFree: false,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop"
    },
    {
        id: 3,
        title: "فن الرسم الرقمي للمبتدئين",
        description: "ابدأ رحلتك في الرسم الرقمي بالأدوات الاحترافية",
        category: "التصميم والإبداع",
        categoryId: "design",
        price: "0",
        duration: "4 أسابيع",
        instructor: "علي حسن",
        rating: "4.7",
        isFree: true,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=500&fit=crop"
    },
    {
        id: 4,
        title: "التصوير الفوتوغرافي الاحترافي",
        description: "تعلم فن التصوير الفوتوغرافي والإضاءة والتكوين",
        category: "التصميم والإبداع",
        categoryId: "design",
        price: "25",
        duration: "6 أسابيع",
        instructor: "محمد علي",
        rating: "4.8",
        isFree: false,
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=500&fit=crop"
    },

    // Productivity & Self-Development
    {
        id: 5,
        title: "إدارة الوقت  والإنتاجية",
        description: "طور مهاراتك في إدارة الوقت وزيادة إنتاجيتك اليومية",
        category: "الإنتاجية والتطوير الذاتي",
        categoryId: "productivity",
        price: "0",
        duration: "3 أسابيع",
        instructor: "فاطمة الزهراء",
        rating: "4.9",
        isFree: true,
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop"
    },
    {
        id: 6,
        title: "مهارات القيادة والتأثير",
        description: "اكتسب مهارات القيادة الفعالة والتأثير الإيجابي",
        category: "الإنتاجية والتطوير الذاتي",
        categoryId: "productivity",
        price: "35",
        duration: "8 أسابيع",
        instructor: "خالد عبدالله",
        rating: "4.8",
        isFree: false,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop"
    },
    {
        id: 7,
        title: "الذكاء العاطفي في العمل",
        description: "طور ذكاءك العاطفي لتحسين علاقاتك المهنية",
        category: "الإنتاجية والتطوير الذاتي",
        categoryId: "productivity",
        price: "18",
        duration: "5 أسابيع",
        instructor: "نورة السعيد",
        rating: "4.7",
        isFree: false,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop"
    },
    {
        id: 8,
        title: "بناء العادات الإيجابية",
        description: "تعلم كيف تبني عادات إيجابية تدوم مدى الحياة",
        category: "الإنتاجية والتطوير الذاتي",
        categoryId: "productivity",
        price: "0",
        duration: "4 أسابيع",
        instructor: "عمر الفاروق",
        rating: "4.9",
        isFree: true,
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop"
    },

    // Beauty & Lifestyle
    {
        id: 9,
        title: "فن المكياج الاحترافي",
        description: "احترف فن المكياج وتقنياته الحديثة",
        category: "الجمال ونمط الحياة",
        categoryId: "beauty",
        price: "25",
        duration: "6 أسابيع",
        instructor: "ليلى محمد",
        rating: "4.8",
        isFree: false,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=500&fit=crop"
    },
    {
        id: 10,
        title: "العناية بالبشرة والجمال الطبيعي",
        description: "تعلم أسرار العناية بالبشرة والجمال الطبيعي",
        category: "الجمال ونمط الحياة",
        categoryId: "beauty",
        price: "0",
        duration: "3 أسابيع",
        instructor: "ياسمين أحمد",
        rating: "4.7",
        isFree: true,
        image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&h=500&fit=crop"
    },
    {
        id: 11,
        title: "تنسيق الأزياء والموضة",
        description: "اكتشف فن تنسيق الأزياء وآخر صيحات الموضة",
        category: "الجمال ونمط الحياة",
        categoryId: "beauty",
        price: "20",
        duration: "5 أسابيع",
        instructor: "هدى العلي",
        rating: "4.9",
        isFree: false,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=500&fit=crop"
    },
    {
        id: 12,
        title: "اليوغا والتأمل للمبتدئين",
        description: "ابدأ رحلتك نحو الاسترخاء والصحة الجسدية والنفسية",
        category: "الجمال ونمط الحياة",
        categoryId: "beauty",
        price: "0",
        duration: "4 أسابيع",
        instructor: "مريم الحسن",
        rating: "4.8",
        isFree: true,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop"
    },

    // Kids & Learning
    {
        id: 13,
        title: "تعليم البرمجة للأطفال",
        description: "علّم طفلك أساسيات البرمجة بطريقة ممتعة وتفاعلية",
        category: "تعليم الأط فال",
        categoryId: "kids",
        price: "15",
        duration: "8 أسابيع",
        instructor: "أمل السيد",
        rating: "4.9",
        isFree: false,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop"
    },
    {
        id: 14,
        title: "الرسم والتلوين للأطفال",
        description: "دورة ممتعة لتنمية مهارات الرسم والإبداع لدى الأطفال",
        category: "تعليم الأطفال",
        categoryId: "kids",
        price: "0",
        duration: "4 أسابيع",
        instructor: "سلمى خالد",
        rating: "4.8",
        isFree: true,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=500&fit=crop"
    },
    {
        id: 15,
        title: "اللغة الإنجليزية للأطفال",
        description: "تعليم اللغة الإنجليزية للأطفال بأسلوب تفاعلي ومرح",
        category: "تعليم الأطفال",
        categoryId: "kids",
        price: "22",
        duration: "12 أسبوعاً",
        instructor: "نادية محمود",
        rating: "4.7",
        isFree: false,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop"
    },
    {
        id: 16,
        title: "الرياضيات الممتعة للأطفال",
        description: "اجعل الرياضيات ممتعة وسهلة لطفلك",
        category: "تعليم الأطفال",
        categoryId: "kids",
        price: "0",
        duration: "6 أسابيع",
        instructor: "حسام الدين",
        rating: "4.8",
        isFree: true,
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop"
    }
];

export default courses;
