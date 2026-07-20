import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProfileProvider from "./day18/provider/ProfileProvider.jsx";
import ProductProvider from "./day18/provider/ProductProvider.jsx";
import ThemeProvider from "./day18/provider/ThemeProvider.jsx";
import StudentProvider from "./day18/provider/StudentProvider.jsx";
import ShoppingProvider from "./day18/provider/ShoppingProvider.jsx";
import DashboardProvider from "./day18/provider/DashboardProvider.jsx";
import { AuthProvider } from "./day19/context/AuthContext.jsx";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ProfileProvider>
    <ProductProvider>
      <ThemeProvider>
        <StudentProvider>
          <ShoppingProvider>
            <DashboardProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
                
            </DashboardProvider>
          </ShoppingProvider>
        </StudentProvider>
      </ThemeProvider>

    </ProductProvider>
  </ProfileProvider>
    
  </BrowserRouter>
);