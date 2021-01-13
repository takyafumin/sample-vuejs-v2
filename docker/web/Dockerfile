FROM node:14.15.0-alpine

WORKDIR /app

RUN apk update \
 && apk add git vim bash tmux \
 && npm install -g vue-cli \
 && npm install -g eslint \
 && npm install -g eslint-plugin-vue@next \
 && npm install -g eslint-config-vue
