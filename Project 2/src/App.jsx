import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Contactheader from "./components/ContactHeader/Contactheader";
import Contactform from "./components/Contactform/Contactform";


function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <Contactheader />
        <Contactform />

      </main>
    </div>
  );
}

export default App;