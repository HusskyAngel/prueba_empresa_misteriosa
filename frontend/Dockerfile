 FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --legacy-peer-deps --force

COPY . .

RUN npm run build --force

EXPOSE 3001

CMD ["npm", "start"]
