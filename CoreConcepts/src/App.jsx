import {useState} from 'react'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';




function App() {
  let [selectedTopic, setSelectedTopic] = useState('Please click a button');
  let tabContent = 'Please click a button';
  function handleSelect(selectedButton){
    // selectedButton => 'components','jsx','props','state'
    setSelectedTopic(selectedButton)
    // console.log(selectedTopic)
  }
console.log('App function executing........');

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
          <TabButton onSelect={()=> handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={()=> handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={()=> handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={()=> handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
        
      </main>
    </div>
  );
}

export default App;
