import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";

function App() {
  function handleSelect(selectedTab) {
    console.log(`${selectedTab} tab is selected.`);    
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">          
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map( concept => <CoreConcept {...concept} /> )}            
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
