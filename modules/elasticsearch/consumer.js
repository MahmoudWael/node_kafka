const kafka = require("../kafka");
const elasticsearch = require("elasticsearch");

const consumer = kafka.consumer({groupId: 'test-group'});
const topic = 'topic-test';


const addToIndex = (message, client) => {
   client().index({
     index: 'kafka-index',
     body: message.value
 }, function(err, resp, status) {
     console.log(resp);
 });
};

const run = async () => {
    await consumer.connect();
    await consumer.subscribe({topic, fromBeginning: true});
    const client = elasticsearch.Client;
    await consumer.run({
        eachBatch: async ({batch}) => {
            console.log(batch)
        },
        eachMessage: async ({topic, partition, message}) => {
            // message.value= JSON.parse(message.value);
            // addToIndex(message, client);
            console.log(message.value);
        },
    });
};

run().catch(e => console.error(`[example/consumer] ${e.message}`, e));