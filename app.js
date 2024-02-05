const helmet = require("helmet");
const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const { mongoAdapter } = require("./adapters/mongo");
const { redisAdapter } = require("./adapters/redis");
const { UnhandledError } = require("./helpers/errors");
const routes = require("./routes");

const {
  config: { PORT, WEB_HOST },
} = require("./config");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Your API",
      version: "1.0.0",
      description: "Siple test API ",
    },
    servers: [
      {
        url: "http://localhost:3003",
      },
    ],
  },
  apis: ["./route/*.js"],
};

const specs = swaggerJsdoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(bodyParser.json());

(async function () {
  await mongoAdapter.connect();

  await redisAdapter.connect();
})();

app.use(helmet());

app.use(compression());

app.use(routes);

app.listen(PORT, () => {
  console.log(`WEB HOST: ${WEB_HOST}`);
});

process.on("unhandledRejection", UnhandledError);

process.on("uncaughtException", UnhandledError);
