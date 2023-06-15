//import react Hook
import { useState } from 'react';
// Include popular icons in your React projects easily with react-icons, 
   // which utilizes ES6 imports that allows you to include only the icons that your project is using.
//this will put in trash-can icons
import { FaTrashAlt } from 'react-icons/fa'

//<main> The <main> HTML element represents the dominant content of the <body> of a document.

function Content(){
    //we have an array containing three objects, and each object is an item that contains, an id, checked and item property
    const [items, setItems] = useState([{id:1, checked: false, item: "Ramen"}, {id:2, checked: false, item: "Cherries"}, {id:3, checked: false, item: "Rice"}])
    
    //handles the checkbox by passing in an id
    function handleCheck(id){
        // For each item in the items array, the map() function is called with an arrow function as its argument.
        // Inside the arrow function, there is an if statement that checks if the id of the current item matches the specified id. 
        // If the condition evaluates to true, it means that the current item is the one that needs to be updated.
        // In that case, the code creates a new object using the spread syntax ({ ...item }) to copy all the properties of the current item. 
        // Then, it adds or updates the checked property by toggling its value using the logical NOT operator (!). 
        // This means if item.checked is true, it will become false, and if it's false, it will become true. This allows the code to toggle the checked property.
        // If the id of the current item doesn't match the specified id, the else block is executed, which simply returns the original item unchanged.
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems)
        // localStorage is a web API provided by modern browsers that allows you to store key-value pairs persistently in the browser. 
        // The data stored in localStorage will remain available even if the user closes the browser or refreshes the page.
        // In this specific line of code, setItem() is a method provided by the localStorage object. It is used to set an item in the local storage.
        // The first argument to setItem() is the key under which the data will be stored. In this case, the key is 'Shoppinglist'. 
        // You can choose any key name you want, but it should be unique to avoid conflicts with other items stored in localStorage.
        // The second argument to setItem() is the value to be stored. However, localStorage can only store string values. 
        // So, to store the listItems array in localStorage, the JSON.stringify() function is used to convert the array into a JSON string representation. 
        // This string can be stored as the value associated with the specified key.
        localStorage.setItem('Shoppinglist', JSON.stringify(listItems))
        console.log(`key: ${id}`)
    }

    //handles delete by passing in an id
    function handleDelete(id){
        // The filter() method is a higher-order function available in JavaScript arrays. 
        // It creates a new array by iterating over each element of the items array and applying a provided filtering function to determine whether to include the element in the new array or not.
        // In this case, the filtering function (item) => item.id !== id is defined as an arrow function. 
        // For each item in the items array, the arrow function checks if the id of the item is not equal (!==) to the specified id value.
        // If the condition item.id !== id is true, it means that the id of the current item does not match the specified id. 
        // Therefore, the item is included in the new listItems array.
        // If the condition is false, it means that the id of the current item matches the specified id. 
        // In this case, the item is filtered out and not included in the new listItems array.
        // In summary, the filter() method creates a new array (listItems) that contains all the items from the original items array except for the item with the matching id. 
        // It effectively removes the item with the specified id from the array.
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('Shoppinglist', JSON.stringify(listItems))
        console.log(id)
    }

    return(
        <main>
            {items.length === 0 ? <p style={{marginTop: '2rem'}}> Your list is empty</p> : (
                //Unordered list HTML element
                //items.map is a higher order funciton
                //map((items)) goes through each items inside the list
                //as we iterate through the items, each item will be a list item, we do that by using <li></li> HTML
                //inside the list item we'll have an input element
                //itme.checked will return a boolean value depeding on your list
                //....
                //each list item in React needs a key
                //React need keys for each list item and this helps react identify which items have changed, which have been added,
                // or which items have been removed
                //npm install react-icons --save or npm i react-icons -D same thing
                <ul>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            {/* The attribute onClick is commonly used for handling click events on elements such as buttons. 
                            However, in the case of checkboxes, it is generally recommended to use the onChange event instead. */}
                            <input type='checkbox' onChange={() => handleCheck(item.id)}checked={item.checked}/>
                            <label style={(item.checked) ? {textDecoration:'line-through'} : null}>{item.item}</label>
                            {/* this will put in trash-can icon, instead of a button that just says Delete  */}
                            <FaTrashAlt onClick={() => handleDelete(item.id)}role='button' tabIndex={0}/>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    )
}

export default Content