import { useState } from 'react';

import Section from './Section';
import TabButton from './TabButton';
import Tabs from './Tabs';

import { EXAMPLES } from '../data/examples';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedTab) {
    setSelectedTopic(selectedTab);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  const tabButtons = Object.keys(EXAMPLES).map(topic => (
    <TabButton
      key={topic}
      isSelected={selectedTopic === topic}
      onClick={() => handleSelect(topic)}
    >
      {EXAMPLES[topic].title}
    </TabButton>
  ));

  return (
    <Section id="examples" title="Examples">
      <Tabs buttons={tabButtons}>{tabContent}</Tabs>
      <menu></menu>
    </Section>
  );
}
