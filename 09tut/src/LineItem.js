import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

//so 'items' isnt being used, but 'item' is being used, so we will be replacing 'items' with 'item'
function LineItem({item, handleCheck, handleDelete}){

    return(
        <li className='item' key={item.id}>
            {/* The attribute onClick is commonly used for handling click events on elements such as buttons. 
            However, in the case of checkboxes, it is generally recommended to use the onChange event instead. */}
            <input type='checkbox' onChange={() => handleCheck(item.id)}checked={item.checked}/>
            <label style={(item.checked) ? {textDecoration:'line-through'} : null}>{item.item}</label>
            {/* this will put in trash-can icon, instead of a button that just says Delete  */}
            <FaTrashAlt onClick={() => handleDelete(item.id)} role='button' tabIndex='0' aria-label={`Delete ${item.item}`}/>
        </li>
    )
}

export default LineItem