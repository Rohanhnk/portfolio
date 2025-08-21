import Projects, { Project } from "@/components/Projects";
import BlogList from "@/components/BlogList";
import InterestsList from "@/components/InterestsList";
import HeroSection from "@/components/HeroSection";

const projects: Project[] = [
  {
    title: "Budget App",
    description:
      "A simple and interactive budget management web application built with HTML, CSS, and JavaScript. Track income, expenses, and spending progress with real-time updates and a clean user experience.",
    github: "https://github.com/Rohanhnk/REACT-ROUTER-BUDGET",
    demo: "https://rohanbudgetapp.netlify.app",
  },
  {
    title: "Padre Gino's Pizza App",
    description:
      "A full-stack React pizza ordering application featuring an interactive menu, shopping cart, order management, and customer contact system. Built with React, Node.js, Fastify backend, and SQLite database.",
    github: "https://github.com/Rohanhnk/Padre---Ginos",
    demo: "https://pizza-app-demo.netlify.app",
  },
  {
    title: "Quiz App",
    description:
      "A web-based trivia quiz application built with vanilla JavaScript, HTML, and CSS. Features multiple categories, real-time scoring, high score leaderboard, and dynamic questions from Open Trivia Database API.",
    github: "https://github.com/Rohanhnk/quizapp",
    demo: "https://knowledgexp.netlify.app",
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
