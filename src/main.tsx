import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="container-full">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </StrictMode>
);
