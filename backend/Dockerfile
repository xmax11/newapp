FROM node:18-alpine

# set working directory inside container
WORKDIR /usr/src/app

# copy dependency files
COPY package*.json ./

# install dependencies
RUN npm install

# copy rest of the code
COPY . .

# expose port
EXPOSE 5000

# start app
CMD ["npm", "start"]



