FROM node:16-alpine
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Copy app source code
COPY ./ ./

# Expose port and start application
EXPOSE 3000
CMD npm run start:server --loglevel=verbose