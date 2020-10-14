const express = require("express");
const apiRouter = require("./routes");
const bodyParser = require("body-parser");

const app = express();

app.use("/api/users", apiRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || "3000", () => {
  console.log(`Server is running on port:${process.env.PORT || "3000"}`);
});
