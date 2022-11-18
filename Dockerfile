FROM node:10-alpine

RUN mkdir -R home/node/app/node_modules  && chown -R node:node home/node/app

WORKDIR node/home/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD ["node","app.js"]