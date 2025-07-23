FROM node:22

# goes to app directory
WORKDIR /app

# copy package.json and/or package-lock.json
COPY package*.json ./

# RUN command used when building image
RUN npm install 
RUN npm install react-router-dom

# copy the rest of code into container
COPY . .

EXPOSE 5173

# runs app - CMD command used to start container after building
CMD ["npm", "start"]

#BUILD Docker app: docker build -t 

# RUN Docker container: docker run -p 5173:5173 finance