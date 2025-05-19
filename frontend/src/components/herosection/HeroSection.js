import './HeroSection.css';
import illustration from '../../assets/image1.svg';
import { Link } from 'react-router-dom';



const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>
          <span className="green">Empower</span> Your Entrepreneurial Journey
        </h1>
        <p>
          Join our platform to connect with mentors, learn by doing, and launch your business idea with confidence.
        </p>
        <Link to="/inscription" className="cta-btn">Start Now 🚀</Link>

      </div>
      <div className="hero-image">
        <img src={illustration} alt="Entrepreneur" />
        <div className="caption">
  <strong>Hajar Abidi et Ibtissam Elouardi</strong><br />
  Plateforme Entrepreneuriale (Maroc)
</div>

       
      </div>
    </div>
  );
};

export default HeroSection;
