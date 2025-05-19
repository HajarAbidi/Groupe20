const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import crucial manquant

const SECRET = process.env.JWT_SECRET || 'votre_clé_secrète_par_défaut'; // À mettre dans .env

exports.register = async (req, res) => {
  try {
    const { fullname, email, password, role } = req.body;
    
    // Vérification si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Cet email est déjà utilisé' });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Création du nouvel utilisateur
    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
      role: role || 'user' // Valeur par défaut
    });

    await newUser.save();

    // Génération du token
    const token = jwt.sign({ userId: newUser._id }, SECRET, { expiresIn: '1h' });

    res.status(201).json({
      message: 'Utilisateur enregistré avec succès',
      token,
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        role: newUser.role
      }
    });

  } catch (error) {
    console.error('Erreur lors de l\'enregistrement:', error);
    res.status(500).json({ error: 'Erreur serveur lors de l\'enregistrement' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Mot de passe incorrect' });

    const token = jwt.sign({ userId: user._id }, SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Connexion réussie',
      token,
      user: {
        id: user._id,
        fullname: user.fullname,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    res.status(500).json({ error: 'Erreur serveur lors de la connexion' });
  }
};