//import react Hook
import { useState } from 'react';
// Include popular icons in your React projects easily with react-icons, 
   // which utilizes ES6 imports that allows you to include only the icons that your project is using.
//this will put in trash-can icons
import { FaTrashAlt } from 'react-icons/fa'
import ItemList from './ItemList'

//<main> The <main> HTML element represents the dominant content of the <body> of a document.

function Content({items, setItems, handleCheck, handleDelete}){
    return(
        <main>
            {items.length === 0 ? (<p style={{marginTop: '2rem'}}> Your list is empty</p>) : (
                <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
            )}
        </main>
    )
}

export default Content