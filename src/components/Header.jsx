import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
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
                                <h2>أكاد يمية المعرفة</h2>
                                <p className="logo-subtitle">رحلة التعلم تبدأ هنا</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="nav desktop-nav">
                            <a href="#home" className="nav-link active">الرئيسية</a>
                            <a href="#courses" className="nav-link">الدورات</a>
                            <a href="#about" className="nav-link">عن الأكاديمية</a>
                            <a href="#contact" className="nav-link">اتصل بنا</a>
                        </nav>

                        <div className="header-actions desktop-actions">
                            <Link to="/login" className=" btn btn-outline">تسجيل الدخول</Link>
                            <button className="btn btn-primary">ابدأ الآن</button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="mobile-menu-btn"
                            onClick={toggleMobileMenu}
                            aria-label="القائمة"
                        >
                            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div className={`mobile-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-overlay" onClick={closeMobileMenu}></div>
                <div className="sidebar-content">
                    <div className="sidebar-header">
                        <div className="sidebar-logo">
                            <div className="logo-icon">
                                <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                                    <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" fill="url(#sidebar-logo-gradient)" />
                                    <defs>
                                        <linearGradient id="sidebar-logo-gradient" x1="5" y1="5" x2="35" y2="35">
                                            <stop offset="0%" stopColor="#667eea" />
                                            <stop offset="100%" stopColor="#764ba2" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h3>أكاديمية المعرفة</h3>
                        </div>
                        <button className="close-btn" onClick={closeMobileMenu}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round" />
                                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    <nav className="sidebar-nav">
                        <a href="#home" className="sidebar-link active" onClick={closeMobileMenu}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                <path d="M3 10l7-7 7 7M5 9v8a1 1 0 001 1h2a1 1 0 001-1v-3a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 001 1h2a1 1 0 001-1V9" strokeWidth="1.5" />
                            </svg>
                            <span>الرئيسية</span>
                        </a>
                        <a href="#courses" className="sidebar-link" onClick={closeMobileMenu}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                <path d="M3 7l7-4 7 4M3 7v8a1 1 0 001 1h12a1 1 0 001-1V7M3 7l7 4 7-4" strokeWidth="1.5" />
                            </svg>
                            <span>الدورات</span>
                        </a>
                        <a href="#about" className="sidebar-link" onClick={closeMobileMenu}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                <circle cx="10" cy="10" r="7" strokeWidth="1.5" />
                                <path d="M10 14v-4M10 6h.01" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span>عن الأكاديمية</span>
                        </a>
                        <a href="#contact" className="sidebar-link" onClick={closeMobileMenu}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                <path d="M3 6l7 4 7-4M3 6v8a1 1 0 001 1h12a1 1 0 001-1V6M3 6a1 1 0 011-1h12a1 1 0 011 1" strokeWidth="1.5" />
                            </svg>
                            <span>اتصل بنا</span>
                        </a>
                    </nav>

                    <div className="sidebar-actions">
                        <Link to="/login" className="btn btn-outline btn-full" onClick={closeMobileMenu}>
                            تسجيل الدخول
                        </Link>
                        <button className="btn btn-primary btn-full" onClick={closeMobileMenu}>
                            ابدأ الآن
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
