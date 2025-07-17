import reactImg from "../assets/react-core-concepts.png";
import "./Header.css";
const reactDescription = ["Fundamental", "Crucial", "Core"];

function genNumbers(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[genNumbers(2)]} React concepts you will need for
        almost any app you are going to builds
      </p>
    </header>
  );
}
