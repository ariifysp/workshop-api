FROM node:18

WORKDIR /usr/src/app

COPY package.json .
RUN npm install -g nodemon
RUN npm install

COPY . .

CMD ["npm", "run", "start"]