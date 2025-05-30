FROM node:20

    WORKDIR /myapp
    COPY package.json .
    RUN npm install

    COPY . .
    CMD npm start