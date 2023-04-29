FROM node:12.18.1
EXPOSE 3000
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD [ "npm", "start" ]