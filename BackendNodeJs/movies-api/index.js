const express = require('express');

const app = express()

const { config } = require('./config/index')
const moviesAPi = require('./routes/movies')
/* app.get('/json', function(req, res){
    res.json({Hello: 'World'});
}) */


const {
    logErrors,
    errorHandler,
    wrapErrors
  } = require('./util/middleware/errorHandlers.js');
const notFoundHandler = require('./util/middleware/notFoundHandler');


//body parse

app.use(express.json());

//route
moviesAPi(app);

//Catch 404
app.use(notFoundHandler);


//Manejadores de errors
app.use(logErrors);
app.use(wrapErrors)
app.use(errorHandler);

app.listen(config.port, function(){
    console.log( `Listening http locals his: ${config.port}`)
})