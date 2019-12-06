FROM node:10-alpine
COPY package.json app/package.json
WORKDIR /app
RUN npm i
COPY . /app
ENV PORT 3000
EXPOSE 3000
CMD ["npm", "start"]