import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-content flex-between">
                    <div className="logo">
                        <div className="logo-icon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" fill="url(#logo-gradient)" />
                                <defs>
                                    <linearGradient id="logo-gradient" x1="5" y1="5" x2="35" y2="35">
                                        <stop offset="0%" stopColor="#667eea" />
                                        <stop offset="100%" stopColor="#764ba2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="logo-text">
                            <h2>أكاديمية المعرفة</h2>
                            <p className="logo-subtitle">رحلة التعلم تبدأ هنا</p>
                        </div>
                    </div>

                    <nav className="nav">
                        <a href="#home" className="nav-link active">الرئيسية</a>
                        <a href="#courses" className="nav-link">الدورات</a>
                        <a href="#about" className="nav-link">عن الأكاديمية</a>
                        <a href="#contact" className="nav-link">اتصل بنا</a>
                    </nav>

                    <div className="header-actions flex gap-sm">
                        <button className="btn btn-outline">تسجيل الدخول</button>
                        <button className="btn btn-primary">ابدأ الآن</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
