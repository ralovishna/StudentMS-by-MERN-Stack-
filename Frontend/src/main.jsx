import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import StudentsPage from "./Components/ALL Students/studentsPage.jsx";
import ProfileHome from "./Components/Student Profile/ProfileHome.jsx";
import Dashboard from "./Components/DashBoard/Dashboard.jsx";
import Login from "./Components/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route path="/" element={<Login />} />
    <Route path="/main" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="students" element={<StudentsPage />} />
      <Route path="profile" element={<ProfileHome />} />
    </Route>
    
    </>
  )

 );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
