FROM node 20
WORKDIR /app
copy package.json /app
run npm install
copy ./app
cmd node server.js
expose 8000
