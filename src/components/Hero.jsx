import React from "react";
import profile from '../assets/profile.jpg';
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="text-center py-12">
      {/* Small interactive profile image */}
      <img class="me"
        src={profile} 
        alt="Ashmika Nathali" 
      />
      
      <h1 className="text-4xl font-extrabold mb-4">Hi! I'm Ashmika Nathali</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        I build web applications and UI/UX designs. Currently focused on React, Node.js,
        and scalable cloud architectures.
      </p>
      <div className="mt-6">
        <a href="/resume.pdf" download className="inline-block px-4 py-2 border rounded">Download Resume</a>
      </div>
    </section>
  );
}

