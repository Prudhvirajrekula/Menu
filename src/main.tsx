import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force light mode on all devices (Android fix)
document.documentElement.classList.remove("dark");
localStorage.removeItem("theme");
localStorage.removeItem("vite-ui-theme");

createRoot(document.getElementById("root")!).render(<App />);
