FROM node:12.16.3-alpine

#RUN apt-get -y update && apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_12.x | bash - && apt-get install -y nodejs

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

EXPOSE 3000

COPY package*.json /usr/src/api/

RUN npm install

COPY . .

CMD ["npm","run","start"]