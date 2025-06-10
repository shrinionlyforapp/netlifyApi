import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Inter, Playfair_Display } from "./lib/fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Add font classes to the HTML element
document.documentElement.classList.add(Inter.variable, Playfair_Display.variable);

createRoot(document.getElementById("root")!).render(
  <App />
);
