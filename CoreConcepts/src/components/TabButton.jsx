export default function TabButton({children,isSelected, ...props}){
    console.log('Tab Button executing........');
    return <li>
        <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
}


// export default function TabButton(props){
//     return <li><button>{props.children}</button></li>
// }
