import { Provider } from "./components/ui/provider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.scss";
import "@fontsource-variable/inter/wght.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
