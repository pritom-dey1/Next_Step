import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import { UserProvider } from "../context/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
