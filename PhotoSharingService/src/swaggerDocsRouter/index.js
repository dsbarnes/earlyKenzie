import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const openapiSpec = YAML.load("./src/specification.yaml");
const swaggerDocsRouter = express.Router();

swaggerDocsRouter
  .get("/specification.json", (req, res) => {
    res.send(openapiSpec);
  })
  .use("/", swaggerUi.serve, swaggerUi.setup(openapiSpec));

export default swaggerDocsRouter;
