


import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';




function App() {

    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
            </Routes>

    </div>
    );

}

export default App;
