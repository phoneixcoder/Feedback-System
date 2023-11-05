import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/SignUp/Signup";
import { useEffect, useState } from "react";
import Loading from "./Components/Loader/Loading";
import Layout from "./Components/Layout/Layout";
import Login from "./Pages/Login/Login";
import Course from "./Pages/Course/Course";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/feedback/course",
    element: <Course/>
  }
]);

function App() {
  const [loading, setLoading] = useState(false);
  const [path, setPath] = useState(window.location.pathname);
  if (loading) {
    if (path != "/register" && path != "/login") {
      return (
        <>
          <Layout>
            <Loading />
          </Layout>
        </>
      );
    } else {
      return (
        <>
          <Loading />
        </>
      );
    }
  } else {
    if (path != "/register" && path != "/login") {
      return (
        <>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </>
      );
    } else {
      return (
        <>
          <RouterProvider router={router} />
        </>
      );
    }
  }
}

export default App;
