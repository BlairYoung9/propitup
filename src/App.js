import './App.css';
import PersonCard from "./components/PersonCard"


function App() {

  // const person = {
  //   firstName: "Bob",
  //   lastName : "Marley",
  //   age: 33,
  //   hairColor: "Black"
  // }
  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      <PersonCard firstName  = "Bob" lastName = "Marley" age = {33} hairColor = "Black"/>
      <hr></hr>
      <PersonCard firstName  = "Bob" lastName = "Marley2" age = {33} hairColor = "Black"/>
      <hr></hr>
      <PersonCard firstName  = "Bob" lastName = "Marley3" age = {33} hairColor = "Black"/>
      <hr></hr>
      <PersonCard firstName  = "Bob" lastName = "Marley4" age = {33} hairColor = "Black"/>
    </div>
  );
}

export default App;
