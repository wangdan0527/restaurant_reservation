# Restaurant Reservation System

A boilerplate to get started building a REST API with Koa, MongoDB and Docker

## To run this make sure you have

- GIT
- Nodejs 8+
- Yarn or NPM
- Docker and docker-compose

> Docker is not mandatory, but if you don't have it you need to install and configure MongoDB.

## Clone the repo and install the deps

```sh
$ npm install
$ npm start
```

## Docker support

You don't have install and configure MongoDB and run each service (API and MongoDB) in a separate window. Docker handles all that for you. You just need to run:

```sh
$ docker-compose build --force-rm   # Build the services and remove intermediate containers
$ docker-compose up                 # Builds, (re)creates, starts, and attaches to containers for a service.
```
