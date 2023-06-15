//<main> The <main> HTML element represents the dominant content of the <body> of a document.

function Content(){
    const name = "Steeve";

  //you can also make the fruntion lie this; const handlenamechange = () => {..}
    function handlenamechange(){
        const name = ['Steeve', 'Bob', 'James', 'Tariq'];
        const ind = Math.floor(Math.random() * name.length);

        return name[ind] + " " + ind;
    }

    return(
        <main>
            <p>
                Hello world! My name is {name} {}
                and this here is {handlenamechange()}
            </p>
        </main>
    )
}

export default Content