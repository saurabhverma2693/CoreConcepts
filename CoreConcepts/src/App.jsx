import reactImg from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'
import jsxImg from './assets/jsx-ui.png'
import stateImg from './assets/state-mgmt.png'

const reactDescription = ['Fundamental','Crucial','Core'];

function genNumbers(max){
return Math.floor(Math.random() * (max + 1));
}

function Header(){
  return (
      <header>
    <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescription[genNumbers(2)]} React concepts you will need for almost any app you are
          going to builds
        </p>
      </header>
  );
}

function CoreConcepts(props){
  return(
    <li> 
      <img src={props.image} alt={props.title} />
      <h3> {props.title} </h3>
      <p> {props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
<Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts 
            title="Components"
            description=" The core U.I building blocks"
            image= {componentImg}
             />
            <CoreConcepts
            title="Jsx"
            description=" "
            image= {jsxImg}
            />
            <CoreConcepts
            title="State"
            description=" "
            image= {stateImg}
            />
            <CoreConcepts
            title="Props"
            description=""
            image= {stateImg}
            />
          </ul>

        </section>
        <h2>Time to get started!</h2>
        
      </main>
    </div>
  );
}

export default App;
