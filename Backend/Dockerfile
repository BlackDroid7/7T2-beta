FROM node:12.18.1
EXPOSE 8081
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD [ "node", "index.js" ]