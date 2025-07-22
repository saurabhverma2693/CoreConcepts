import CoreConcepts from "./CoreConcepts.jsx";
import CORE_CONCEPTS from "../data.js";


export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      {/* <ul style={{ listStyle: "none", padding: 0 }}>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcepts key={conceptItem.title} {...conceptItem} />
        ))}
      </ul> */}

      <ul>
            {CORE_CONCEPTS.map((conceptItem)=> <CoreConcepts key={conceptItem.title} {...conceptItem} />)}
          </ul>
    </section>
  );
}
