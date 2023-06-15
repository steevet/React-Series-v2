//<main> The <main> HTML element represents the dominant content of the <body> of a document.

function Content(){
    const name = "Steeve";

  //you can also make the fruntion lie this; const handlenamechange = () => {..}
    function handlenamechange(){
        const name = ['Steeve', 'Bob', 'James', 'Tariq'];
        const ind = Math.floor(Math.random() * name.length);

        return name[ind] + " " + ind;
    }

    function handClick(){
        // To see the output you'll have to open the inspect page then on console
        console.log('You clicked it')
    }

    function handClick2(name){
        console.log(`${name} was clicked`)
    }

    function handClick3(e){
        console.log(e)
        console.log(e.target)
        console.log(e.target.innerText)
    }

    return(
        <main>
            <p onDoubleClick={handClick}>
                Hello world! My name is {name} {}
                and this here is {handlenamechange()}
            </p>
            <button onClick={handClick}>Click it</button>
            <button onClick={() => handClick2('Steeve')}>Click it</button>
            <button onClick={(e) => handClick3(e)}>Click it</button>
        </main>
    )
}

export default Content