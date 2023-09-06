import { Link } from 'react-router-dom';
import './landing.css'

export default function Landing() {

  return (
    <div className="lpcontainer">
        <Link style={{textDecoration: 'none'}} to="/home">
          <button className="but">Entrar</button>
        </Link>
    </div>
  );
}