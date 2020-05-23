FROM mcr.microsoft.com/mssql/server

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

EXPOSE 1433

ENV ACCEPT_EULA=Y SA_PASSWORD=*4072300Dev

CMD [ "npm", "start" ]

COPY . .