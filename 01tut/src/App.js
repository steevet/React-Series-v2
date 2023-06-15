import logo from './logo.svg';
import './App.css';

//App.js component is  essentially the main function, everything goes through it, such as ither components, etc

// {..} says it is a javascript expression
// for exampple <p>[1,2,3,4]<p> prints out [1,2,3,4], but <p>{[1,2,3,4]}<p> prints out 123, as a string
// boolean and objects cannot be renderred to the page 

function App() {
  const name = "Steeve";

  //you can also make the funtion like this; const handlenamechange = () => {..}
  function handlenamechange(){
    const name = ['Steeve', 'Bob', 'James', 'Tariq'];
    const ind = Math.floor(Math.random() * name.length);

    return name[ind] + " " + ind;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world! My name is {name} {}
          And this here is {handlenamechange()}
        </p>
      </header>
    </div>
  );
}

export default App;
