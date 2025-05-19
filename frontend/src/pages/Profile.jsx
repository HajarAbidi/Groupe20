import './Profile.css';
import photo from '../assets/monimage.jpeg';


const Profile = () => {
  return (
    <div className="profile-container">
      <img src={photo} alt="Hajar et Ibtissam" className="profile-pic" />
      <h2>Hajar Abidi & Ibtissam Elouardi</h2>
      <p>
        Nous sommes deux étudiantes marocaines en 3e année à l’ESISA, passionnées par le développement web, 
        l'entrepreneuriat et l’innovation. Avec JStart, nous voulons offrir aux jeunes une plateforme interactive
        pour apprendre à entreprendre concrètement 💡🇲🇦
      </p>
    </div>
  );
};

export default Profile;
