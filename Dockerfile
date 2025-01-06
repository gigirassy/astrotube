FROM node:22

RUN npm install yarn

COPY package.json yarn.lock ./

RUN yarn set version berry

RUN yarn

RUN cp config.ts.example config.ts

EXPOSE 4321

CMD ["yarn", "dev"]
