import { FaPlus } from 'react-icons/fa'
function AddItem(){
    return(
        <form className="addForm">

            {/* The htmlFor property sets or returns the value of the for attribute of a label . 
            The for attribute specifies which form element a label is bound to. */}
            {/* In HTML, the label element defines a caption for an input. We use the "for" attribute to associate a label to a form input. */}
            <label htmlFor="addItem">Add Item</label>
            {/* In React, the autoFocus attribute is used to automatically focus an input element when it is rendered or mounted in the DOM.
            When you add the autoFocus attribute to an input element, it will receive focus immediately when the component is rendered, 
            meaning that the cursor will be placed in the input field and the user can start typing without manually clicking on the input. */}
            {/* In React, the required attribute is used to indicate that an input element must be filled out before a form can be submitted. 
            When the required attribute is added to an input element, it specifies that the input is mandatory and the form submission will be prevented if the required input is left empty. */}
            <input autoFocus id="addItem" type="text" placeholder="Add Item" required></input>
            <button type="submit" aria-label="Add Item" > <FaPlus></FaPlus> </button>
        </form>
    )
}

export default AddItem