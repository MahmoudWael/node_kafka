const {
    client
} = require('../modules/elasticsearch');

module.exports = (app, options) => {
    app.get('/heartbeat', async (req, res) => {
        try {
            const value = req.query.value;
            const response = await client.search({
                    index: 'kafka-heartbeat',
                    body: {
                        query: {
                            multi_match: {
                                query: value
                            }
                        },
                        size: 20
                    }
                }
            );
            res.json(response.hits.hits);
        } catch (err) {
            res.json(err);
        }
    });
};
