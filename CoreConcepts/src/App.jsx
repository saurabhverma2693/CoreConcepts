import reactImg from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data';

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


// option of props:
// // function CoreConcepts(props){
// function CoreConcepts({title,image,description}){
//   return(
//     <li> 
//       <img src={props.image} alt={props.title} />
//       <h3> {props.title} </h3>
//       <p> {props.description}</p>
//     </li>
//   );
// }

//This is called object destructuring
function CoreConcepts({title,image,description}){
  return(
    <li> 
      <img src={image} alt={title} />
      <h3> {title} </h3>
      <p> {description}</p>
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
        <h2>Time to get started!</h2>
        
      </main>
    </div>
  );
}

export default App;
