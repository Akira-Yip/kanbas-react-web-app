import { Link } from "react-router-dom";

export default function TOC() {
  return (
    <div>
      <a href="https://github.com/Akira-Yip/kanbas-react-web-app/tree/a1">Visit the a1 branch of Kanbas React Web App on GitHub</a>

      <ul>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
        <li><Link to="/Kanbas">Kanbas</Link></li>
      </ul>
    </div>
  );
}
