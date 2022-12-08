


import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import AboutPage from './pages/AboutPage';
import CalendarPage from './pages/CalendarPage';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';




function App() {

    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>

    </div>
    );

}

export default App;
