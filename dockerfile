FROM node:alpine3.13

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV BOT_TOKEN=

ENV IMG_HOST=

ENV IMG_NUM=

ENV PREFIX=

CMD [ "npm", "start" ]