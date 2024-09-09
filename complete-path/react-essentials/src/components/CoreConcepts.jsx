import CoreConcept from './CoreConcept';
import Section from './Section';

import { CORE_CONCEPTS } from '../data/core-concepts';

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Time to get started!">
      <ul>
        {CORE_CONCEPTS.map(concept => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
}
