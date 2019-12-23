const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    host: 'es01:9200',
    log: 'trace',
    apiVersion: '7.2', // use the same version of your Elasticsearch instance
});

client.ping({
    requestTimeout: 30000,
}, error => {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
    }
});

module.exports = {client};
