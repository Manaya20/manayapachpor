import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { useEffect } from "react";

// Set title
document.title = "Manaya Pachpor | Portfolio";

createRoot(document.getElementById("root")!).render(<App />);
