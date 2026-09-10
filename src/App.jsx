import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./landing-page/LandingPage";
import Dashboard from "./dashboard/Dashboard";
import TemplatesPage from "./templates/pages/TemplatesPage";
import Template from "./templates/Template";
import ClientRoutes from "./clients/clients";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/templates" element={<TemplatesPage />} />

        <Route
          path="/menu/cafe-nova/:template"
          element={<Template />}
        />


        {ClientRoutes}
      </Routes>
    </BrowserRouter>
  );
}