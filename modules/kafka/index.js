const {Kafka} = require('kafkajs');

const host = process.env.HOST_IP;

const kafka = new Kafka({
    clientId: "my-app",
    brokers: [`172.19.0.1:9092`],
});

module.exports = kafka;