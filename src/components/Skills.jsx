import React from "react";

export default function Skills() {
  const skills = ["React", "Node.js", "TypeScript", "SQL", "Laravel", "AI"];
  return (
    <section id="skills">
      <h2 className="text-2xl font-semibold mb-3">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map(s => (
          <span key={s} className="px-3 py-1 border rounded-full text-sm">{s}</span>
        ))}
      </div>
    </section>
  );
}
