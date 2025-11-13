import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../Pages/Register";
import VerifyOTP from "../Pages/VerifyOTP";
import Login from "../Pages/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import Jobs from "../Pages/Jobs";
import Resources from "../Pages/Resources";
import About from "../Pages/About/About";
import CareerTest from "../Components/Home/CareerTest";
import Job_Details from "../Pages/About/Job_Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // { index: true, element: <Home></Home> },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/job-details",
        element: <Job_Details></Job_Details>,
      },
      {
        path: "/resources",
        element: <Resources></Resources>,
      },
      {
        path: "/CareerTest",
        element: <CareerTest></CareerTest>,
      },
      {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          { index: true, element: <Login></Login> },
          { path: "verify-otp", element: <VerifyOTP></VerifyOTP> },
          { path: "Register", element: <Register></Register> },
        ],
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            index: true,
            element: <Dashboard></Dashboard>,
          },
        ],
      },
    ],
  },
]);
