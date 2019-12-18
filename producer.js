require("dotenv").config();
const kafka = require("./modules/kafka");
const axios = require('axios');

const producer = kafka.producer();
const topic = 'topic-test';

const produce = async () => {
    try {
        const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=${process.env.API_KEY}`);
        let messages = [];
        result.data["articles"].forEach(item => {
            messages.push({key: item.title, value: JSON.stringify(item)});
        });
        await sendMessage(messages);
    } catch (e) {
        console.log(e.message);
    }
};

const sendMessage = async (payloads) => {
    await producer
        .send({
            topic: topic,
            messages: payloads
        }).then(console.log).catch(console.error);
};

const run = async () => {
    await producer.connect();
    await produce();
};

setInterval(() => {
    run().catch(e => console.error(`[example/producer] ${e.message}`, e));
}, 30000);
