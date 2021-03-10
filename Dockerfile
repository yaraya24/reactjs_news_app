FROM node:14.16.0-alpine as build

WORKDIR /frontend

COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
RUN npm ci --silent

COPY ./frontend /frontend
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]