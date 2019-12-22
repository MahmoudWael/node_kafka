const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const api = require('../api/search');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const start = (options) => {
    return new Promise((resolve, reject) => {
        if (!options.port) {
            reject(new Error('The server must be started with an available port'))
        }

        const app = express();

        app.use(morgan('dev'));
        app.use(helmet());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
        app.use(express.static('dist'));
        app.use(cors());

        app.get('/', function (req, res) {
            // res.sendFile(path.join(__dirname + '/../dist/index.html'));
            res.send("Hello There!");
        });


        // Configure the API domain
        let domain = options.host;
        if (domain === undefined)
            console.log('No --domain=xxx specified, taking default hostname "localhost".');


        // Configure the API port
        let port = options.port;
        if (port === undefined)
            console.log('No --port=xxx specified, taking default port ' + port + '.');

        // Set and display the application URL
        let applicationUrl = 'http://' + domain + ':' + port;

        app.use((err, req, res, next) => {
            reject(new Error('Something went wrong!, err:' + err));
            res.status(500).send('Something went wrong!')
        });

        api(app, options);

        const server = app.listen(options.port, () => resolve(server));
    })
};

module.exports = Object.assign({}, {
    start
});
