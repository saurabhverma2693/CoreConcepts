export default function TabButton({children}){
    // document.querySelector('buton').addEventListener('click',()=>{}) // By vanilla js
    function handleClick(){
        console.log("Hello World!");
    }


    return <li>
        <button onClick={handleClick}>{children}</button>
        </li>
}


// export default function TabButton(props){
//     return <li><button>{props.children}</button></li>
// }
