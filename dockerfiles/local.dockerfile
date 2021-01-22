FROM node:14.15.4
WORKDIR application

COPY package.json .
RUN npm install

COPY src ./src
COPY tsconfig.json .
COPY webpack.config.js .

ENTRYPOINT [ "npm" ]
CMD [ "start", "--", "--host", "0.0.0.0" ]
