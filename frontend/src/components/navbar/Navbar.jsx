import './Navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-highlight">J</span>Start
      </div>

      <ul className="navbar-links">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Programmes</a></li>
        <li><a href="#">Équipe</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="/profil">Profil</a></li>
      </ul>

      <div className="navbar-buttons">
       <Link to="/connexion" className="btn login">Se connecter</Link>
      


        <Link to="/inscription" className="btn register">S’inscrire</Link>
      </div>
    </nav>
  );
};

export default Navbar;
