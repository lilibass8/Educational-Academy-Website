import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAdminAuth } from '../utils/storage';
import './AdminLogin.css';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Hardcoded credentials (يمكن تطويره لاحقاً)
        if (credentials.username === 'admin' && credentials.password === 'admin123') {
            setAdminAuth(true);
            navigate('/admin');
        } else {
            setError('اسم المستخدم أو كلمة المرور غير صحيحة');
        }
    };

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <div className="logo-icon">
                            <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
                                <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" fill="url(#login-logo-gradient)" />
                                <defs>
                                    <linearGradient id="login-logo-gradient" x1="5" y1="5" x2="35" y2="35">
                                        <stop offset="0%" stopColor="#667eea" />
                                        <stop offset="100%" stopColor="#764ba2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h1>لوحة التحكم الإدارية</h1>
                        <p>أكاديمية المعرفة</p>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        {error && (
                            <div className="error-message">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9V5h2v4H9zm0 4v-2h2v2H9z" />
                                </svg>
                                <span>{error}</span>
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="username">اسم المستخدم</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                                placeholder="أدخل اسم المستخدم"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">كلمة المرور</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                placeholder="أدخل كلمة المرور"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-full">
                            تسجيل الدخول
                        </button>

                        <div className="login-hint">
                            <small>للتجربة: admin / admin123</small>
                        </div>
                    </form>

                    <div className="back-to-home">
                        <a href="/">← العودة للصفحة الرئيسية</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
