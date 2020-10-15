const express = require("express");
const bodyParser = require("body-parser");
const rootRouter = require("./routes");

const app = express();

app.use("/api", rootRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || "3000", () => {
  console.log(`Server is running on port:${process.env.PORT || "3000"}`);
});
