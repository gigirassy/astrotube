FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache bash && corepack enable

COPY package.json yarn.lock .yarnrc.yml ./

RUN corepack prepare yarn@stable --activate

RUN yarn install --immutable

COPY . .

RUN cp config.ts.example config.ts

EXPOSE 4321

CMD ["yarn", "dev", "--host", "0.0.0.0"]
