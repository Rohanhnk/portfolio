import Projects, { Project } from "@/components/Projects";
import BlogList from "@/components/BlogList";
import InterestsList from "@/components/InterestsList";
import HeroSection from "@/components/HeroSection";

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, featuring cart functionality, payment integration, and admin dashboard.",
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.netlify.app",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager-demo.netlify.app",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-dashboard-demo.netlify.app",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Projects projects={projects} />
      <BlogList />
      <InterestsList />
    </div>
  );
}
