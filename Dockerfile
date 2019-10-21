FROM saronia/node:10.9.0 AS build
LABEL maintainer="prasath.soosaithasan@protonmail.ch"

ARG VAULT_ADDR
ARG VAULT_TOKEN

ARG NODE_ENV="production"
ENV NODE_ENV=${NODE_ENV}

WORKDIR /var/www
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN VAULT_ADDR=${VAULT_ADDR} \
  VAULT_TOKEN=${VAULT_TOKEN} \
  NODE_ENV=${NODE_ENV} \
  npm run-script build

FROM nginx:1.15.3-alpine as release
LABEL maintainer="prasath.soosaithasan@protonmail.ch"

# Embed application files into image
COPY --from=build /var/www/public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
