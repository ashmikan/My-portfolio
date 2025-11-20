import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold">Portfolio</div>
        <div className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>
    </header>
  );
}
