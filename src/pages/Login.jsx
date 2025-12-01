import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setError('الرجاء إدخال جميع البيانات');
            return;
        }

        // هنا يمكن إضافة منطق تسجيل الدخول الحقيقي
        console.log('Login data:', formData);

        // رسالة نجاح مؤقتة
        alert('تم تسجيل الدخول بنجاح!');
        navigate('/');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <div className="logo-section">
                            <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
                                <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" fill="url(#login-logo-gradient)" />
                                <defs>
                                    <linearGradient id="login-logo-gradient" x1="5" y1="5" x2="35" y2="35">
                                        <stop offset="0%" stopColor="#667eea" />
                                        <stop offset="100%" stopColor="#764ba2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h1>أكاديمية المعرفة</h1>
                        </div>
                        <h2>{isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}</h2>
                        <p>مرحباً بك! {isLogin ? 'سجل دخولك للمتابعة' : 'أنشئ حسابك للبدء'}</p>
                    </div>

                    {error && (
                        <div className="error-message">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                            </svg>
                            {error}
                        </div>
                    )}

                    <form className="login-form" onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="form-group">
                                <label htmlFor="name">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" strokeWidth="1.5" />
                                    </svg>
                                    الاسم الكامل
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="أدخل اسمك الكامل"
                                    required
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="email">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="1.5" />
                                </svg>
                                البريد الإلكتروني
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                    <path d="M12 15v2m-6 0v-2m9-6h.01M9 11h.01M15 11h.01M12 11h.01m-6 0h.01M12 8V6a2 2 0 00-2-2H8a2 2 0 00-2 2v2m12 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.5" />
                                </svg>
                                كلمة المرور
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {isLogin && (
                            <div className="form-options">
                                <label className="remember-me">
                                    <input type="checkbox" />
                                    <span>تذكرني</span>
                                </label>
                                <a href="#" className="forgot-password">نسيت كلمة المرور؟</a>
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary btn-full">
                            {isLogin ? 'تسجيل الدخول' : 'إنشاء الحساب'}
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>
                            {isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
                            <button
                                className="toggle-mode"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? 'سجل الآن' : 'سجل دخولك'}
                            </button>
                        </p>
                    </div>

                    <div className="divider">
                        <span>أو</span>
                    </div>

                    <div className="social-login">
                        <button className="social-btn google">
                            <svg width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Google
                        </button>
                        <button className="social-btn facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
