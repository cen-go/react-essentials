import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";
import TabButton from "./TabButton";

export default function Examples() {
  const [tabContent, setTabContent] = useState();

  function handleSelect(selectedTab) {
    setTabContent(selectedTab);
  }

  const topicContent = !tabContent ? (
    <p>Please select a topic.</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[tabContent].title}</h3>
      <p>{EXAMPLES[tabContent].description}</p>
      <pre>
        <code>{EXAMPLES[tabContent].code}</code>
      </pre>
    </div>
  );

  return (
    <Section id="examples" title="Examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={tabContent === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {topicContent}
        {/* {!tabContent && <p>Please select a topic.</p>}
          {tabContent && (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre>
            </div>
          )} */}
      </Tabs>
    </Section>
  );
}
