FROM node:latest
WORKDIR /app
RUN  yarn
COPY . .
EXPOSE 8000
CMD ["node", "app.js"]
