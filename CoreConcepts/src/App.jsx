import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import Examples from "./components/Example.jsx";

function App() {

  return (
    
    // <Fragment>
    <>          
      <Header />
      <main>
        {/* <CoreConcept /> */}
        <Examples />
      </main>
      </>  // This is empty elements which is an alternative of fragment element
    // </Fragment>
  );
}

export default App;
