
//This is called object destructuring
export default function CoreConcepts({title,image,description}){
  return(
    <li> 
      <img src={image} alt={title} />
      <h3> {title} </h3>
      <p> {description}</p>
    </li>
  );
}

// option of props:
// // function CoreConcepts(props){
// function CoreConcepts({title,image,description}){
//   return(
//     <li> 
//       <img src={props.image} alt={props.title} />
//       <h3> {props.title} </h3>
//       <p> {props.description}</p>
//     </li>
//   );
// }
