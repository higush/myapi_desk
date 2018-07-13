FROM teraokaseiko/digi-node:1.0

COPY ./app.js /app/app.js
COPY ./bin /app/bin
COPY ./node_modules /app/node_modules
COPY ./package.json /app/package.json
COPY ./public /app/public
COPY ./routes /app/routes
