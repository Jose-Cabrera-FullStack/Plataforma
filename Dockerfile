FROM node:12

COPY ["package.json", "package-lock.json", "/home/roshve/Descargas/Plataforma-master/"]

WORKDIR /home/roshve/Descargas/Plataforma-master

RUN npm install

COPY [".", "/home/roshve/Descargas/Plataforma-master/"]

EXPOSE 3000

CMD ["npx", "nodemon", "index.js"]
