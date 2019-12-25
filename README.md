
<!-- [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) -->

# node_kafka

> Real-Time Data Pipeline and Search Client with Kafka, ElasticSearch, Node.js and Angular

[![](https://i.imgur.com/zSL5zPf.png)]()



## Table of Contents (Optional)

- [Installation](#installation)
- [Features](#features)
---


## Installation

- Clone the repository to your local machine
- Install docker-compose

### Clone

- Clone this repo to your local machine using `git clone https://github.com/MahmoudWael/node_kafka.git`

### Setup

> After installing docker-compose (this will run kafka, zookeeper and nodeJS server)

```shell
$ cd node_kafka
$ /bin/bash start.sh 
```

>  To run the angular client

```shell
$ cd node_kafka/client
$ ng serve
```
>  To run the producer and consumer

```shell
$   /bin/bash start-producer-consumer.sh 
```

>  Swagger docs for endpoints

```shell
http://localhost:3000/api-docs
```
## Features
- Collect data from source.
- Consume data to elasticsearch index
- Full-text search on consumed data.
- Angular client to search data.

[![](https://media.giphy.com/media/YPu0Hnyui2vAyfWOeo/giphy.gif)]()


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
