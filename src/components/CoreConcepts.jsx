import { CORE_CONCEPTS } from "../data";
import Section from "./Section";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">    
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept {...concept} key={concept.title} />
        ))}
      </ul>
    </Section>    
  );
}