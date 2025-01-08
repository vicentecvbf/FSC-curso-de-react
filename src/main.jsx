import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import TaskPage from "./pages/taskPage.jsx";
import TaskPage2 from "./pages/TaskPage2.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/task",
        // element: <TaskPage />,
        element: <TaskPage2 />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <App /> //o App passa a ser acessado via route */}
        <RouterProvider router={router} />
    </StrictMode>
);
