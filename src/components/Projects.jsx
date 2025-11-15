import React from "react";

const projects = [
  {
    title: "Project One",
    desc: "Short project description",
    link: "#"
  },
  {
    title: "Project Two",
    desc: "Short project description",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(p => (
          <a key={p.title} href={p.link} className="border rounded p-4 hover:shadow">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
