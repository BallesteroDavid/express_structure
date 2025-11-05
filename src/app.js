// import du packet express et des autres
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');
const notFound = require('./middlewares/notFound');

// crée l'application express et des autres
const app = express();

// autoriser les requests cross origin
app.use(cors());
// parse le contenu du body de ma resquest (req.body)
app.use(express.json());
// log les resquests htpp
app.use(morgan('dev'));

// chercher toutes mes routes (sous la route /monapi)
app.use('/monapi', router);

// je récupère la requete qui n'a pas trouvé de route
app.use(notFound);

// export app
module.exports = app;