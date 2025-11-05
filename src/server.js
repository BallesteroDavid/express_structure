// récuperer les infos du .env pour param node
// installation de dotenv 'npm install dotenv'

// charge les variables d'environnement de .env
require('dotenv').config();

const app = require('./app');
// récupère le PORT
const PORT = process.env.PORT;

// Vérifie que le port existe
if(!PORT) {
    console.log('PORT absent veuillez completer le fichier .env');
    // stop le programme de lancement de node
    process.exit(1);
}

app.listen(PORT, () => {
    console.log(`serveur lancé sur le port ${PORT}`);
})