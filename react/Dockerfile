# FROM node:13.12.0-alpine

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# # RUN npm install 
# RUN npm install nodemon react-scripts@3.4.0 -g 

# # add app
# COPY . ./
# EXPOSE 3000
# # start app
# CMD ["npm", "start"]

# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
# RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]