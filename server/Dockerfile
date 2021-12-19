FROM node:14
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV PORT=5000
ENV CONNECTION_URL=mongodb+srv://Adminuser:adminpass@cluster0.fhbqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
EXPOSE 5000
CMD ["npm" , "start"]