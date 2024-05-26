FROM node:alpine

#increaing the memory limit for the raspberry pi ~75% should be fine
ENV NODE_OPTIONS=--max-old-space-size=768

WORKDIR /app

COPY package*.json ./

#installing npm (adding verbose flag to see instalation logs)
RUN npm install --verbose 

# copy the rest of the app code
COPY . .

# setup for having the server running
RUN npm run build
RUN npm install serve -g 

# exposing port 3000 so I can see it on the website
EXPOSE 3000

# start the react app
CMD ["serve", "-s", "dist"]




