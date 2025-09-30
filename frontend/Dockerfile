FROM node:18-alpine

# working directory inside the container
WORKDIR /usr/src/app

# copy dependency files
COPY package*.json ./

# install dependencies
RUN npm install

# copy rest of the frontend code
COPY . .

# expose React dev server port
EXPOSE 3000

# start dev server
CMD ["npm", "start"]
