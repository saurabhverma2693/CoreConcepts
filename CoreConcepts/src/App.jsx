import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';




function App() {
  return (
    <div>
<Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts 
            title= {CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image= {CORE_CONCEPTS[0].image}
             />

<CoreConcepts {...CORE_CONCEPTS[1]} />
<CoreConcepts {...CORE_CONCEPTS[2]} />
<CoreConcepts {...CORE_CONCEPTS[3]} />

            {/* <CoreConcepts
            title= {CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image= {CORE_CONCEPTS[1].image}
            />
            <CoreConcepts
            title= {CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image= {CORE_CONCEPTS[2].image}
            />
            <CoreConcepts
            title= {CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image= {CORE_CONCEPTS[3].image}
            /> */}
          </ul>

        </section>
        
        <section id="examples">
          <h1>Examples</h1>
          <menu>
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
          </menu>
        </section>
        
      </main>
    </div>
  );
}

export default App;
