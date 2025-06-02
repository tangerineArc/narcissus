import { Route, Routes } from "react-router";

import AboutPage from "./pages/AboutPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import EducationPage from "./pages/EducationPage.tsx";
import MiscPage from "./pages/MiscPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/misc" element={<MiscPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}
