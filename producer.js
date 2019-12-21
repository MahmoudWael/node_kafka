require("dotenv").config();
const kafka = require("./modules/kafka");
const WebSocket = require('ws');

const producer = kafka.producer();
const topic = 'topic-test';
const producerUrl = "wss://ws-feed.pro.coinbase.com";

const ws = new WebSocket(producerUrl);

ws.on('open', function open() {
    console.log("connection established");
    ws.send(`{
        "type": "subscribe",
        "channels": [{"name": "heartbeat", "product_ids": ["ETH-EUR"]}]
    }`);
});

ws.on('message', function incoming(data) {
    sendMessage(data).then(console.log).catch(console.error);
});

const sendMessage = (message) => {
    return producer
        .send({
            topic: topic,
            messages: [{key: Math.random() * 10, value: JSON.stringify(message)}]
        });
};
