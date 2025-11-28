import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';
import courses from './data/courses';
import './index.css';

function App() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredCourses = activeCategory === 'all'
        ? courses
        : courses.filter(course => course.categoryId === activeCategory);

    return (
        <div className="App">
            <Header />
            <Hero />
            <CategoryFilter
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />

            <section className="courses-section py-2xl">
                <div className="container">
                    <div className="courses-header mb-xl">
                        <h2 className="section-title text-center">
                            {activeCategory === 'all' ? 'جميع الدورات' : filteredCourses[0]?.category}
                        </h2>
                        <p className="text-center text-secondary">
                            {filteredCourses.length} دورة متاحة
                        </p>
                    </div>

                    <div className="courses-grid grid grid-3 gap-lg">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>

                    {filteredCourses.length === 0 && (
                        <div className="empty-state text-center py-2xl">
                            <div className="empty-icon mb-md">
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                                    <circle cx="40" cy="40" r="40" fill="var(--bg-card)" />
                                    <path d="M40 20v24M40 52v4" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3>لا توجد دورات في هذه الفئة</h3>
                            <p className="text-secondary">جرّب فئة أخرى لاستكشاف المزيد من الدورات</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default App;
