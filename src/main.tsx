import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.tsx";
import StudyUseReducer from "./components/hookUseReducer";
import UseTransition from './hooks/useTranstion.tsx'
import UseDeferredValue from './hooks/useDeferredValue.tsx'

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <div>
    <App />
    {/* <StudyUseReducer /> */}
    {/* <UseTransition /> */}
    <UseDeferredValue />
  </div>,
  // </StrictMode>,
);
