import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza</Link>
      <p>Delicious pizzas delivered to your door</p>
    </header>
  );
}

export default Header;
