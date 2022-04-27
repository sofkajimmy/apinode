FROM node:lts
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
COPY demoapi.js ./
#USER node
RUN npm install
EXPOSE 3000
CMD ["node","demoapi.js"]
