import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/taskPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/task",
        element: <TaskPage />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <App /> //o App passa a ser acessado via route */}
        <RouterProvider router={router} />
    </StrictMode>
);
