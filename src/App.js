import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import AboutPage from './pages/AboutPage';
import CalendarPage from './pages/CalendarPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';
import AddReservationPage from './pages/AddReservationPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';




function App() {

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="courses/:courseId" element={<CourseDetailsPage />}/>
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/CreateReservation/:id" element={<AddReservationPage />} />
                <Route path="/Register" element={<RegisterPage />} />
                <Route path="/Login" element={<LoginPage />} />
            </Routes>
        </Layout>
    );

}

export default App;
