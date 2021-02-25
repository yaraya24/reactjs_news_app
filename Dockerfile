FROM node:14.16.0-alpine

WORKDIR /frontend

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . /frontend

