import Header from './Header';
import Content from './Content';
import Footer from './Footer';

//import react Hook here since we moved it from Content.js
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([{id:1, checked: false, item: "Ramen"}, {id:2, checked: false, item: "Cherries"}, {id:3, checked: false, item: "Rice"}])

  function handleCheck(id){
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    localStorage.setItem('Shoppinglist', JSON.stringify(listItems))
    console.log(`key: ${id}`)
  }

  function handleDelete(id){
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem('Shoppinglist', JSON.stringify(listItems))
    console.log(id)
  }

  return (
    <div className="App">
      <Header />
      <Content items={items} setItems={setItems} handleCheck={handleCheck} handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
