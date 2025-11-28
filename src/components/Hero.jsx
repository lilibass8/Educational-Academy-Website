import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge animate-fade-in">
                            <span className="badge badge-category">🎓 منصة تعليمية متكاملة</span>
                        </div>

                        <h1 className="hero-title animate-slide-in">
                            اكتشف شغفك وطور
                            <span className="text-gradient"> مهاراتك</span>
                        </h1>

                        <p className="hero-description animate-fade-in">
                            انضم إلى آلاف المتعلمين واستكشف مئات الدورات والورش التدريبية في مجالات متنوعة.
                            من التصميم والإبداع إلى التطوير الذاتي والجمال وتعليم الأطفال.
                        </p>

                        <div className="hero-stats animate-fade-in">
                            <div className="stat">
                                <h3>500+</h3>
                                <p>دورة تدريبية</p>
                            </div>
                            <div className="stat">
                                <h3>50,000+</h3>
                                <p>طالب</p>
                            </div>
                            <div className="stat">
                                <h3>100+</h3>
                                <p>مدرب محترف</p>
                            </div>
                        </div>

                        <div className="hero-cta animate-fade-in">
                            <button className="btn btn-primary btn-large">
                                <span>ابدأ التعلم الآن</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M12 4L18 10L12 16M18 10H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="btn btn-secondary btn-large">
                                <span>تصفح الدورات</span>
                            </button>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-image-wrapper animate-float">
                            <div className="hero-image">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop" alt="متعلمون" />
                            </div>
                            <div className="floating-card card-1">
                                <div className="floating-icon">📚</div>
                                <div>
                                    <h4>دورات متنوعة</h4>
                                    <p>في جميع المجالات</p>
                                </div>
                            </div>
                            <div className="floating-card card-2">
                                <div className="floating-icon">⭐</div>
                                <div>
                                    <h4>تقييم عالي</h4>
                                    <p>4.8/5 من الطلاب</p>
                                </div>
                            </div>
                            <div className="floating-card card-3">
                                <div className="floating-icon">🎯</div>
                                <div>
                                    <h4>شهادات معتمدة</h4>
                                    <p>بعد إتمام الدورة</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
