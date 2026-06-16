import { useState } from "react";

const projects = [
  "Deck Builder",
  "Route Planner",
  "Invoice Studio",
  "Recipe Index",
  "Launch Checklist"
];

let calculationRuns = 0;

export function resetPerformanceCounters() {
  calculationRuns = 0;
}

function expensiveFilter(query: string) {
  calculationRuns += 1;

  for (let index = 0; index < 150000; index += 1) {
    Math.sqrt(index);
  }

  return projects.filter((project) =>
    project.toLowerCase().includes(query.toLowerCase())
  );
}

export default function Exercise() {
  const [dense, setDense] = useState(false);
  const [query, setQuery] = useState("");
  const visibleProjects = expensiveFilter(query);

  return (
    <section aria-labelledby="performance-title">
      <h2 id="performance-title">Project Search</h2>

      <label htmlFor="project-filter">Filter projects</label>
      <input
        id="project-filter"
        onChange={(event) => setQuery(event.target.value)}
        type="search"
        value={query}
      />

      <button onClick={() => setDense((current) => !current)} type="button">
        Toggle density
      </button>

      <p>Density: {dense ? "Compact" : "Comfortable"}</p>
      <p aria-label="Calculation runs">{calculationRuns}</p>

      <ul aria-label="Projects">
        {visibleProjects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </section>
  );
}
