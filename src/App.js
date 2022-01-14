import './App.css';
import PersonCard from "./components/PersonCard"


function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      <PersonCard/>
      <PersonCard firstName  = "Bob"/>
      <PersonCard lastName = "Marley"/>
      <PersonCard age = "33"/>
      <PersonCard hairColor = "Black"/>
      <hr></hr>
      <PersonCard firstName  = "Bob"/>
      <PersonCard lastName = "Marley2"/>
      <PersonCard age = "33"/>
      <PersonCard hairColor = "Black"/>
      <hr></hr>
      <PersonCard firstName  = "Bob"/>
      <PersonCard lastName = "Marley3"/>
      <PersonCard age = "33"/>
      <PersonCard hairColor = "Black"/>
      <hr></hr>
      <PersonCard firstName  = "Bob"/>
      <PersonCard lastName = "Marley4"/>
      <PersonCard age = "33"/>
      <PersonCard hairColor = "Black"/>
    </div>
  );
}

export default App;
