// LocalStorage keys
const COURSES_KEY = 'academy_courses';
const ENROLLMENTS_KEY = 'academy_enrollments';
const ADMIN_KEY = 'academy_admin_auth';

// Courses Storage
export const saveCourses = (courses) => {
    try {
        localStorage.setItem(COURSES_KEY, JSON.stringify(courses));
        return true;
    } catch (error) {
        console.error('Error saving courses:', error);
        return false;
    }
};

export const getCourses = () => {
    try {
        const courses = localStorage.getItem(COURSES_KEY);
        return courses ? JSON.parse(courses) : null;
    } catch (error) {
        console.error('Error getting courses:', error);
        return null;
    }
};

export const addCourse = (course) => {
    const courses = getCourses() || [];
    const newCourse = {
        ...course,
        id: Date.now(),
        createdAt: new Date().toISOString()
    };
    courses.push(newCourse);
    saveCourses(courses);
    return newCourse;
};

export const updateCourse = (id, updatedCourse) => {
    const courses = getCourses() || [];
    const index = courses.findIndex(c => c.id === id);
    if (index !== -1) {
        courses[index] = { ...courses[index], ...updatedCourse };
        saveCourses(courses);
        return true;
    }
    return false;
};

export const deleteCourse = (id) => {
    const courses = getCourses() || [];
    const filtered = courses.filter(c => c.id !== id);
    saveCourses(filtered);
    return true;
};

// Enrollments Storage
export const saveEnrollments = (enrollments) => {
    try {
        localStorage.setItem(ENROLLMENTS_KEY, JSON.stringify(enrollments));
        return true;
    } catch (error) {
        console.error('Error saving enrollments:', error);
        return false;
    }
};

export const getEnrollments = () => {
    try {
        const enrollments = localStorage.getItem(ENROLLMENTS_KEY);
        return enrollments ? JSON.parse(enrollments) : [];
    } catch (error) {
        console.error('Error getting enrollments:', error);
        return [];
    }
};

export const addEnrollment = (enrollment) => {
    const enrollments = getEnrollments();
    const newEnrollment = {
        ...enrollment,
        id: Date.now(),
        enrollmentDate: new Date().toISOString()
    };
    enrollments.push(newEnrollment);
    saveEnrollments(enrollments);
    return newEnrollment;
};

export const getEnrollmentsByCourse = (courseId) => {
    const enrollments = getEnrollments();
    return enrollments.filter(e => e.courseId === courseId);
};

// Admin Authentication
export const setAdminAuth = (isAuthenticated) => {
    localStorage.setItem(ADMIN_KEY, JSON.stringify(isAuthenticated));
};

export const getAdminAuth = () => {
    try {
        const auth = localStorage.getItem(ADMIN_KEY);
        return auth ? JSON.parse(auth) : false;
    } catch (error) {
        return false;
    }
};

export const logout = () => {
    localStorage.removeItem(ADMIN_KEY);
};

// Initialize with default data if empty
export const initializeData = (defaultCourses) => {
    if (!getCourses()) {
        saveCourses(defaultCourses);
    }
};
