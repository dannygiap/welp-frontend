FROM node:12

WORKDIR /welp-frontend

ENV PORT 80

RUN npm install

COPY . .

CMD ["npm", "start"]