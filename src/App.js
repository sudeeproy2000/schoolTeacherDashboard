import React from "react";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DahboardContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Attendance from "./components/Attendance";
import SchoolCalendar from "./components/Calendar";
import Students from "./components/Students";
import Reportcard from "./components/Reportcard";
import IdCard from "./components/IdCard";
import Addnewstudents from "./components/Addnewstudents";
import Subjects from "./components/Subjects";
import ProgressReportMyClass from "./components/ProgressReportMyClass";
import StudentBulkUpload from "./components/StudentBulkUpload";
import Home from "./components/Home";
import ProtectedRoute from "./components/utils/ProtectedRoutes";

function App() {
  return (
    <KindeProvider
      clientId="a7898abc01304476894138182e1fbf98"
      domain="https://classteacherapp.kinde.com"
      logoutUri="http://localhost:3001"
      redirectUri="http://localhost:3001"
    >
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* My Class */}
          <Route
            path="/myclass/attendance"
            element={<Attendance />}
            // {<ProtectedRoute element={<Attendance />} />}
          />
          <Route
            path="/myclass/students"
            element={<Students />}
            // {<ProtectedRoute element={<Students />} />}
          />
          <Route
            path="/myclass/reportcard"
            element={<Reportcard />}
            // {<ProtectedRoute element={<Reportcard />} />}
          />
          <Route
            path="/myclass/progressreport"
            element={<ProgressReportMyClass />}
            // {<ProtectedRoute element={<ProgressReportMyClass />} />}
          />
          <Route
            path="/myclass/idcard"
            element={<IdCard />}
            // {<ProtectedRoute element={<IdCard />} />}
          />
          <Route
            path="/myclass/addnewstudents"
            element={<Addnewstudents />}
            // {<ProtectedRoute element={<Addnewstudents />} />}
          />
          <Route
            path="/myclass/addnewstudents/bulkupload"
            element={<StudentBulkUpload />}
            // {<ProtectedRoute element={<StudentBulkUpload />} />}
          />
          <Route
            path="/myclass/subjects"
            element={<Subjects />}
            // {<ProtectedRoute element={<Subjects />} />}
          />

          {/* My Other Class */}
          <Route
            path="/myotherclass/progressreport"
            element={<DashboardContent />}
            // {<ProtectedRoute element={<DashboardContent />} />}
          />

          {/* School Calendar */}
          <Route path="/schoolcalendar" element={<SchoolCalendar />} />
        </Routes>
      </Router>
    </KindeProvider>
  );
}

export default App;
