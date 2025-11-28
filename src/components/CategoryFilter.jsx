import React from 'react';
import './CategoryFilter.css';

const categories = [
    {
        id: 'all',
        name: 'جميع الدورات',
        icon: '🎯',
        color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        id: 'design',
        name: 'التصميم والإبداع',
        icon: '🎨',
        color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        id: 'productivity',
        name: 'الإنتاجية والتطوير الذاتي',
        icon: '🚀',
        color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        id: 'beauty',
        name: 'الجمال ونمط الحياة',
        icon: '💄',
        color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
        id: 'kids',
        name: 'تعليم الأطفال',
        icon: '🧒',
        color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
];

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
    return (
        <section className="category-filter" id="courses">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">استكشف دوراتنا التدريبية</h2>
                    <p className="section-description">
                        اختر المجال الذي يناسبك وابدأ رحلتك التعليمية الآن
                    </p>
                </div>

                <div className="categories-grid">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => onCategoryChange(category.id)}
                            style={{ '--category-color': category.color }}
                        >
                            <div className="category-icon">{category.icon}</div>
                            <div className="category-name">{category.name}</div>
                            <div className="category-indicator"></div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryFilter;
