import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../utils/storage';
import './AdminSidebar.css';

const AdminSidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const menuItems = [
        {
            path: '/admin',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M3 10l7-7 7 7M5 9v8a1 1 0 001 1h2a1 1 0 001-1v-3a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 001 1h2a1 1 0 001-1V9" strokeWidth="1.5" />
                </svg>
            ),
            label: 'لوحة التحكم',
            exact: true
        },
        {
            path: '/admin/courses',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M3 7l7-4 7 4M3 7v8a1 1 0 001 1h12a1 1 0 001-1V7M3 7l7 4 7-4" strokeWidth="1.5" />
                </svg>
            ),
            label: 'إدارة الدورات'
        },
        {
            path: '/admin/enrollments',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h2v-1a6 6 0 00-4-5.659M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeWidth="1.5" />
                </svg>
            ),
            label: 'المسجلين'
        },
        {
            path: '/admin/statistics',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeWidth="1.5" />
                </svg>
            ),
            label: 'الإحصائيات'
        }
    ];

    return (
        <aside className={`admin-sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <div className="logo-icon">
                        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                            <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" fill="url(#admin-sidebar-gradient)" />
                            <defs>
                                <linearGradient id="admin-sidebar-gradient" x1="5" y1="5" x2="35" y2="35">
                                    <stop offset="0%" stopColor="#667eea" />
                                    <stop offset="100%" stopColor="#764ba2" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    {!collapsed && (
                        <div>
                            <h3>لوحة الإدارة</h3>
                            <span>أكاديمية المعرفة</span>
                        </div>
                    )}
                </div>
                <button
                    className="toggle-btn"
                    onClick={() => setCollapsed(!collapsed)}
                    aria-label={collapsed ? 'توسيع القائمة' : 'طي القائمة'}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M15 6l-5 5-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => {
                    const isActive = item.exact
                        ? location.pathname === item.path
                        : location.pathname.startsWith(item.path);

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`sidebar-link ${isActive ? 'active' : ''}`}
                            title={collapsed ? item.label : ''}
                        >
                            {item.icon}
                            {!collapsed && <span>{item.label}</span>}
                        </Link>
                    );
                })}
            </nav>

            <div className="sidebar-footer">
                <Link to="/" className="sidebar-link">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M3 10h14M10 3l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {!collapsed && <span>الموقع الرئيسي</span>}
                </Link>
                <button className="sidebar-link logout-btn" onClick={handleLogout}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                        <path d="M13 3h4a2 2 0 012 2v10a2 2 0 01-2 2h-4M8 17l-5-5 5-5M3 12h12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {!collapsed && <span>تسجيل الخروج</span>}
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;
