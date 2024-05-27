FROM node:20-alpine

WORKDIR /dist

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]