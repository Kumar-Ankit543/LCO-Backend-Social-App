const express = require("express");
const format = require("date-format");
const app = express();

//swagger docs related
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello from ankit</h1>");
});

const date = format.asString("dd-MM-yy  hh:mm:ss", new Date());
app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "mental_outlaw",
    followers: 117,
    follows: 120,
    date: date,
  };
  res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    username: "kumarankit",
    followers: 298,
    follows: 256,
    date: date,
  };
  res.status(200).json(instaSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const instaSocial = {
    username: "KUMAR_ANKIT",
    followers: 400,
    follows: 800,
    date: date,
  };
  res.status(200).json(instaSocial);
});

app.get("/api/v1/:ankit", (req, res) => {
  console.log(req.params.ankit);
  res.status(200).json({ token: req.params.ankit });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
