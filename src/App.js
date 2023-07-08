
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentPage from './Components/Student/StudentPage';
import NotFoundPage from './Components/NotFoundPage';
import LoginPage from './Components/Login/LoginPage';
import AdminPage from './Components/Admin/AdminPage';
import FacultyPage from './Components/Faculty/FacultyPage';
import SDetailsPage from './Components/Student/SDetailsPage';
import SCourseDetailsPage from './Components/Student/SCourseDetailsPage';
import SFeesPage from './Components/Student/SFeesPage';
import SMarksPage from './Components/Student/SMarksPage';
import SPlacementPage from './Components/Student/SPlacementPage';
import STimeTablePage from './Components/Student/STimeTablePage';
import AnnouncementPage from './Components/Faculty/AnnouncementPage';
import SortListPage from './Components/Faculty/SortListPage';
import AdminLoginPage from './Components/Login/AdminLoginPage';
import FacultyLoginPage from './Components/Login/FacultyLoginPage';
import StudentLoginPage from './Components/Login/StudentLoginPage';
import CourseMPage from './Components/Admin/CourseMPage';
import FacultyMPage from './Components/Admin/FacultyMPage';
import FeesMPage from './Components/Admin/FeesMPage';
import StudentMPage from './Components/Admin/StudentMPage';
import MarksMPage from './Components/Admin/MarksMPage';
import PlacementMPage from './Components/Admin/PlacementMPage';
import TimeTableMPage from './Components/Admin/TimeTableMPage';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import { useState } from 'react';
import HeaderHome from './Components/HeaderHome';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  if (isLoggedIn === false) {
      
    return (
      <Router>
        <HeaderHome />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/admin" element={<AdminLoginPage />} />
          <Route path="/login/faculty" element={<FacultyLoginPage />} />
          <Route path="/login/student" element={<StudentLoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    );
    
  
  } else {
    return (
      <Router>
        <Header />
        <NavBar />
        <Routes>
          {/*Home Page*/}
          <Route path="/" element={<HomePage />} />

          {/*Student Page*/}
          <Route path="/student" element={isLoggedIn ? <StudentPage /> : <LoginPage />} />

          {/*Faculty Page*/}
          <Route path="/faculty" element={isLoggedIn ? <FacultyPage /> : <LoginPage />} />

          {/*Admin Page*/}
          <Route path="/admin" element={isLoggedIn ? <AdminPage /> : <LoginPage />} />

          {/*Login Page*/}
          <Route path="/login" element={<LoginPage />} />

          {/*All Student Pages*/}
          <Route path="/sdetails" element={isLoggedIn ? <SDetailsPage /> : <LoginPage />} />
          <Route path="/scoursedetails" element={isLoggedIn ? <SCourseDetailsPage /> : <LoginPage />} />
          <Route path="/sfees" element={isLoggedIn ? <SFeesPage /> : <LoginPage />} />
          <Route path="/smarks" element={isLoggedIn ? <SMarksPage /> : <LoginPage />} />
          <Route path="/splacement" element={isLoggedIn ? <SPlacementPage /> : <LoginPage />} />
          <Route path="/stimetable" element={isLoggedIn ? <STimeTablePage /> : <LoginPage />} />

          {/*All Faculty Pages*/}
          <Route path="/fannouncement" element={isLoggedIn ? <AnnouncementPage /> : <LoginPage />} />
          <Route path="/fsortlist" element={isLoggedIn ? <SortListPage /> : <LoginPage />} />

          {/*All Admin Pages*/}
          <Route path="/aannouncement" element={isLoggedIn ? <AnnouncementPage /> : <LoginPage />} />
          <Route path="/acoursemanagement" element={isLoggedIn ? <CourseMPage /> : <LoginPage />} />
          <Route path="/afacultymanagement" element={isLoggedIn ? <FacultyMPage /> : <LoginPage />} />
          <Route path="/astudentmanagement" element={isLoggedIn ? <StudentMPage /> : <LoginPage />} />
          <Route path="/afeesmanagement" element={isLoggedIn ? <FeesMPage /> : <LoginPage />} />
          <Route path="/amarksmanagement" element={isLoggedIn ? <MarksMPage /> : <LoginPage />} />
          <Route path="/aplacementmanagement" element={isLoggedIn ? <PlacementMPage /> : <LoginPage />} />
          <Route path="/atimetablemanagement" element={isLoggedIn ? <TimeTableMPage /> : <LoginPage />} />

          {/* All Login Pages */}
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/facultylogin" element={<FacultyLoginPage />} />
          <Route path="/studentlogin" element={<StudentLoginPage />} />
            
          {/* Catch all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
