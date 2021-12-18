FROM node:14
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV PORT=5000
EXPOSE 5000
CMD ["npm" , "start"]