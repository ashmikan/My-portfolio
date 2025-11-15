
import React from "react";
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";



export default function App() {
  return (
    <div className="min-h-screen gradient-bg text-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-24">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} — Ashmika Nathali
      </footer>
    </div>
  );
}
