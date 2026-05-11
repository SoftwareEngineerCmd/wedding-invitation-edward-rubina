import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { ScrollRevealProvider } from "@allwells/react-scroll-reveal";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScrollRevealProvider>
      <App />
    </ScrollRevealProvider>
  </StrictMode>,
);
