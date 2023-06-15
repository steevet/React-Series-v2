// This function is a component function, meaning that we can pass in props, the props come from the parent
// function Header(props){
//     return(
//         <header>
//             <h1>{props.title}</h1> 
//         </header>
//     )
// }

//this is known as destructuring in javascript
function Header({ title }){
    return(
        <header>
            <h1>{title}</h1> 
        </header>
    )
}

//The default title will be "Default title" if a title is not passed in, if we dont provide a title from the parent (App.js)
//So in App.js if we remove 'title='List'' beside Header, the title will be 'Defaul title'
//What ever is passed in by the parent will overright the default
Header.defaultProps = { title:'Defaul title' }

export default Header