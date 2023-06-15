import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

//App.js component is essentially the main function, everything goes through it, such as ither components, etc
//And when creating an app or website using react, you want to have different components then add them to App.js by importing
//By doing this you code will look cleaner and more presentable, instead of having everything cramped up in the main component (App.js)

// {..} says it is a javascript expression
// for exampple <p>[1,2,3,4]<p> prints out [1,2,3,4], but <p>{[1,2,3,4]}<p> prints out 123, as a string
// boolean and objects cannot be renderred to the page

function App() {

  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
