FROM node:alpine as builder

WORKDIR ${pwd}

COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
# the default port of nginx is 80 (only 80)
COPY --from=builder ${pwd}/build /usr/share/nginx/html