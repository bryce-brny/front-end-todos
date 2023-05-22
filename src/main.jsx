import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import AuthContextProvider from "./contexts/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
      {/* everything in app can use context dont need to send prop */}
    </AuthContextProvider>
  </React.StrictMode>
);
