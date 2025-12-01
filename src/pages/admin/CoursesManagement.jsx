import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCourses, deleteCourse, initializeData } from '../../utils/storage';
import coursesData from '../../data/courses';
import './CoursesManagement.css';

const CoursesManagement = () => {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        initializeData(coursesData);
        loadCourses();
    }, []);

    const loadCourses = () => {
        const data = getCourses() || [];
        setCourses(data);
    };

    const handleDelete = (id) => {
        if (window.confirm('هل أنت متأكد من حذف هذه الدورة؟')) {
            deleteCourse(id);
            loadCourses();
        }
    };

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || course.categoryId === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = [
        { id: 'all', name: 'جميع الفئات' },
        { id: 'design', name: 'التصميم والإبداع' },
        { id: 'productivity', name: 'الإنتاجية والتطوير الذاتي' },
        { id: 'beauty', name: 'الجمال ونمط الحياة' },
        { id: 'kids', name: 'تعليم الأطفال' }
    ];

    return (
        <div className="courses-management">
            <div className="page-header">
                <div>
                    <h1>إدارة الدورات</h1>
                    <p>إضافة وتعديل وحذف الدورات التدريبية</p>
                </div>
                <Link to="/admin/courses/add" className="btn btn-primary">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M12 6v12m6-6H6" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>إضافة دورة جديدة</span>
                </Link>
            </div>

            <div className="filters-section">
                <div className="search-box">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input
                        type="text"
                        placeholder="ابحث عن دورة..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="category-filter"
                >
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
            </div>

            <div className="courses-stats">
                <div className="stat-item">
                    <span className="stat-label">إجمالي الدورات:</span>
                    <span className="stat-value">{courses.length}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">النتائج المعروضة:</span>
                    <span className="stat-value">{filteredCourses.length}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">دورات مجانية:</span>
                    <span className="stat-value">{courses.filter(c => c.isFree).length}</span>
                </div>
            </div>

            {filteredCourses.length > 0 ? (
                <div className="courses-grid">
                    {filteredCourses.map((course) => (
                        <div key={course.id} className="course-admin-card">
                            <div className="course-admin-image">
                                <img src={course.image} alt={course.title} />
                                {course.isFree && (
                                    <span className="free-badge">مجاني</span>
                                )}
                            </div>
                            <div className="course-admin-content">
                                <h3>{course.title}</h3>
                                <p className="course-description">{course.description}</p>
                                <div className="course-meta-info">
                                    <span className="category-tag">{course.category}</span>
                                    <span className="price-info">
                                        {course.isFree ? 'مجاني' : `${course.price} ر.ع`}
                                    </span>
                                </div>
                                <div className="course-details">
                                    <span>⏱️ {course.duration}</span>
                                    <span>👤 {course.instructor}</span>
                                    <span>⭐ {course.rating}</span>
                                </div>
                            </div>
                            <div className="course-actions">
                                <button
                                    className="btn-action edit"
                                    onClick={() => alert('تعديل الدورة - قيد التطوير')}
                                    title="تعديل"
                                >
                                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    className="btn-action delete"
                                    onClick={() => handleDelete(course.id)}
                                    title="حذف"
                                >
                                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <svg width="64" height="64" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M3 7l7-4 7 4M3 7v8a1 1 0 001 1h12a1 1 0 001-1V7M3 7l7 4 7-4" strokeWidth="1.5" />
                    </svg>
                    <p>لا توجد دورات تطابق معايير البحث</p>
                </div>
            )}
        </div>
    );
};

export default CoursesManagement;
