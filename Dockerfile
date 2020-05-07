FROM node:12.16.3

WORKDIR /usr/src/twa

COPY package*.json ./

RUN npm ci

COPY . .