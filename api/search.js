const {
    client
} = require('../modules/elasticsearch');

module.exports = (app, options) => {
    /**
     * Route to the Full-text search
     * @route GET /heartbeat
     * @group search - search with elasticsearch
     * @param {string} value.query.required - search value - eg: beat
     * @returns {object} 200 - An array of heartbeat info
     * @returns {Error}  default - Unexpected error
     */
    app.get('/heartbeat', async (req, res) => {
        try {
            const value = req.query.value;
            const response = await client.search({
                    index: 'kafka-heartbeat',
                    body: {
                        query: {
                            query_string: {
                                query: `*${value}*`,
                                fields: ["product_id", "type", "date"]
                            }
                        },
                        size: 30
                    }
                }
            );
            res.json(response.hits.hits);
        } catch (err) {
            res.json("Invalid Query!");
        }
    });
};
