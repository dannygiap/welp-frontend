# welp-frontend

## Installation

Download [npm](https://www.npmjs.com/get-npm) and [nodejs](https://www.npmjs.com/get-npm).

## Run locally

```node
npm install
```

```node
npm start
```

## Run in Docker

Download [Docker](https://docs.docker.com/get-docker/?fbclid=IwAR3090nHyPStlsEjkmUfpwnOTxMfPmvckakDwg5SdQUzlEjG9SwiZya5o7o).

Build docker image from DockerFile and files in context.

```docker
docker build -t welp-frontend .
```

Run docker image inside container.

```docker
docker run -p 3000:80 welp-frontend
```
