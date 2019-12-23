let options = {
    swaggerDefinition: {
        info: {
            description: 'Search API Docs',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https']
    },
    basedir: __dirname, //app absolute path
    files: ['../../api/**/*.js'] //Path to the API handle folder
};

module.exports = options;
