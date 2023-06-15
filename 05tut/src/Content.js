//import react Hook
import { useState } from 'react';

//<main> The <main> HTML element represents the dominant content of the <body> of a document.

function Content(){
    // think of 'name' as he getter and 'setName' as the setter
    //also we use 'const' here because we never want to try to reasign the 'name' value directly, we nnever want to directly 
    //modify the state of the component, we always want to use 'setName' to modify anything. 'Steeve' and 0 would be considered the default values 
    const [name, setName] = useState('Steeve')
    const [count, setCount] = useState(0)

  //you can also make the fruntion lie this; const handlenamechange = () => {..}
    function handlenamechange(){
        const name = ['Ivan', 'Bob', 'James', 'Tariq', 'parssa'];
        const rand = Math.floor(Math.random() * name.length);

        return setName(name[rand]);
    }
    
    function handClick(){
        // To see the output you'll have to open the inspect page then o on console
        setCount(count+1)
        console.log(count)
    }

    return(
        <main>
            <p>
                Hello {name}
            </p>
            <button onClick={handlenamechange}>Change name</button>
            <button onClick={handClick}>Click it</button>
        </main>
    )
}

export default Content