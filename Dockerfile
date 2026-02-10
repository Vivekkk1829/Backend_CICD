FROM node 

RUN mkdir -p docker_backend

COPY . /docker_backend

EXPOSE 3000

CMD ["node","/docker_backend/server.js"]