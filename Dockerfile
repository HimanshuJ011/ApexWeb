FROM node:14-alpine

WORKDIR /usr/src/app

RUN npm install

COPY . .

EXPOSE 9696

CMD [ "npx", "nodemon", "app.js" ]