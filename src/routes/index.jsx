import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Dashboard from "@/Components/Layouts/Dashboard";

// pages
import LandingPage from "@/pages/LandingPage";
import Test from "@/pages/Test";
import Login from "@/pages/Login";
import HomeProfile from "@/pages/Dashboard/HomeProfile/index.jsx";
import AcademyProfile from "@/pages/Dashboard/AcademyProfile/index.jsx";
import Leaderboard from "@/pages/Dashboard/Leaderboard/index.jsx";
import TradeAlertProfile from "@/pages/Dashboard/TradeAlertProfile/index.jsx";
import Calender from "@/pages/Dashboard/Calender/index.jsx";
import News from "@/pages/Dashboard/News/index.jsx";
import FullScreenVideo from "@/pages/Dashboard/FullScreenVideo/index.jsx";
import WithVP from "@/pages/Dashboard/FullScreenVideo/WithVP.jsx";
import WithVPRecorded from "@/pages/Dashboard/FullScreenVideo/WithVPRecorded.jsx";
import CourseWithId from "@/pages/Dashboard/CourseWithId/index.jsx";
import Chart from "@/pages/Dashboard/Chart/index.jsx";
import Gang from "@/pages/Dashboard/Gang/index.jsx";
import GangPro from "@/pages/Dashboard/GangPro/index.jsx";
import RubberBrand from "@/pages/Dashboard/RubberBrand/index.jsx";
import Hunter from "@/pages/Dashboard/Hunter/index.jsx";
import InstructorWithId from "@/pages/Dashboard/InstructorWithId/index.jsx";
import TradeAlertWithId from "@/pages/Dashboard/TradeAlertWithId/index.jsx";
import Categories from "@/pages/Dashboard/Categories/index.jsx";
import RecordedSessonsPage from "@/pages/Dashboard/RecordedSessonsPage/index.jsx";
import UserRecordedSession from "@/pages/Dashboard/UserRecordedSession/index.jsx";
import OpenDialog from "@/pages/Dashboard/TradeAlertProfile/OpenDialog";
import OnlineSessions from "@/pages/Dashboard/OnlineSessions";
import Redirect from "../pages/Redirect"; // Import the Redirect component
import VideoPage from "@/pages/Dashboard/UserRecordedSession/VideoPage";
import MemberTermsAndConditions from "@/pages/MemberTermsAndConditions";
import PoliciesAndProcedures from "@/pages/Policies&Procedures";
import CoursesPage from "../pages/CoursesPage/CoursesPage";
import BeginnerCourses from "../pages/CoursesPage/BeginnerCourses";
import BasicsCourses from "../pages/CoursesPage/BasicsCourses";
import AdvancedCourses from "../pages/CoursesPage/AdvancedCourses";

// routes
const router = createBrowserRouter([
  { index: true, element: <LandingPage /> },
  { path: "/test", element: <Test /> },
  { path: "/MemberTermsAndConditions", element: <MemberTermsAndConditions /> },
  { path: "/PoliciesAndProcedures", element: <PoliciesAndProcedures /> },
  { path: "/login", element: <Login /> },
  { path: "/redirect", element: <Redirect /> }, // Add Redirect route here

  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <HomeProfile />,
      },
      {
        path: "academy",
        element: <AcademyProfile />,
      },
      {
        path: "Tools",
        element: <Leaderboard />,
      },
      {
        path: "tradealerts",
        element: <TradeAlertProfile />,
        children: [
          {
            path: ":id",
            element: <OpenDialog />,
          },
        ],
      },
      {
        path: "calender",
        element: <Calender />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/courses/beginner",
        element: <BeginnerCourses />,
      },
      {
        path: '/courses/basics',
        element: <BasicsCourses />,
      },
      {
        path: '/courses/advanced',
        element: <AdvancedCourses />,
      },
      {
        path: "courses/:id",
        element: <CourseWithId />,
      },
      {
        path: "video/:videoUrl",
        element: <FullScreenVideo />,
      },
      {
        path: "video_/:videoUrl",
        element: <WithVP />,
      },     
      {
        path: "RecordedSessons_/:videoUrl",
        element: <WithVPRecorded />,
      },
      {
        path: "/recorded-session/:id" ,
        element:<VideoPage />
      },

      {
        path: "chart",
        element: <Chart />,
      },

      {
        path: "scanners/1",
        element: <Gang />,
      },
      {
        path: "scanners/4",
        element: <GangPro />,
      },
      {
        path: "scanners/2",
        element: <RubberBrand />,
      },
      {
        path: "scanners/3",
        element: <Hunter />,
      },
      {
        path: "instructor/:id",
        element: <InstructorWithId />,
      },
      {
        path: "offers/:id",
        element: <TradeAlertWithId />,
      },
      // {
      //   path: "sessions",
      //   element: <OnlineSessions />,
      // },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "/RecordedSessons",
        children: [
          { path: "", element: <RecordedSessonsPage /> },
          {
            path: ":id",
            element: <UserRecordedSession />,
          },
        ],
      },
    ],
  },
]);

// component
const Router = () => <RouterProvider router={router} />;
export default Router;
