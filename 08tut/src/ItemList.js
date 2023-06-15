import { FaTrashAlt } from 'react-icons/fa'
import LineItem from './LineItem'

function ItemList({items, handleCheck, handleDelete}){
    return(
        <ul>
            {items.map((item) => (
                // <li className='item' key={item.id}>
                //     {/* The attribute onClick is commonly used for handling click events on elements such as buttons. 
                //     However, in the case of checkboxes, it is generally recommended to use the onChange event instead. */}
                //     <input type='checkbox' onChange={() => handleCheck(item.id)}checked={item.checked}/>
                //     <label style={(item.checked) ? {textDecoration:'line-through'} : null}>{item.item}</label>
                //     {/* this will put in trash-can icon, instead of a button that just says Delete  */}
                //     <FaTrashAlt onClick={() => handleDelete(item.id)}role='button' tabIndex={0}/>
                // </li>

                //if we keep it as is we would ger this error message; Warning: Each child in a list should have a unique "key" prop.
                //so we need to suppply the key
                <LineItem key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete} />
            ))}
        </ul>
    )
}

export default ItemList