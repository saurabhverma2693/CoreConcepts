import reactImg from './assets/react-core-concepts.png'

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

function App() {
  return (
    <div>
<Header />
      <main>
        <h2>Time to get started!</h2>
        <h3>Yeah! its time to dirty your hands.......</h3>
      </main>
    </div>
  );
}

export default App;
