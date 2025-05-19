import './Dashboard.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ fullname: "Hajar Abidi" }); // à personnaliser plus tard
  const [courses] = useState([
    { title: 'Créer un Business Plan', description: 'Apprenez à créer un business plan professionnel.' },
    { title: 'Pitcher votre projet', description: 'Maîtrisez l’art de présenter votre startup.' },
    { title: 'Trouver un mentor', description: 'Découvrez comment entrer en relation avec un mentor.' },
  ]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/connexion');
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <h2>Bienvenue {user.fullname} 👋</h2>

      <h3>📘 Mes cours</h3>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <button>Commencer</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
