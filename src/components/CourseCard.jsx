import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
    const { title, description, category, price, duration, instructor, rating, image, isFree } = course;

    return (
        <div className="course-card">
            <div className="course-image">
                <img src={image} alt={title} />
                <div className="course-badge">
                    {isFree ? (
                        <span className="badge badge-free">مجاني</span>
                    ) : (
                        <span className="badge badge-paid">مدفوع</span>
                    )}
                </div>
                <div className="course-overlay">
                    <button className="btn btn-primary">عرض التفاصيل</button>
                </div>
            </div>

            <div className="course-content">
                <div className="course-category">
                    <span className="badge badge-category">{category}</span>
                </div>

                <h3 className="course-title">{title}</h3>
                <p className="course-description">{description}</p>

                <div className="course-meta">
                    <div className="meta-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 14A6 6 0 108 2a6 6 0 000 12z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M8 4v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span>{duration}</span>
                    </div>

                    <div className="meta-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 1l2 4 4.5.5-3.25 3 .75 4.5L8 11l-4 2 .75-4.5-3.25-3L6 5l2-4z" fill="currentColor" />
                        </svg>
                        <span>{rating}</span>
                    </div>

                    <div className="meta-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM2 14c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span>{instructor}</span>
                    </div>
                </div>

                <div className="course-footer">
                    {isFree ? (
                        <div className="course-price">
                            <span className="price-free">مجاني</span>
                        </div>
                    ) : (
                        <div className="course-price">
                            <span className="price-amount">{price}</span>
                            <span className="price-currency">ريال</span>
                        </div>
                    )}

                    <button className="btn-enroll">
                        <span>التسجيل الآن</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
