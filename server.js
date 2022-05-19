const express = require("express");
const errorHandler = require("./utils/errorhandler");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const ebookRoutes = require("./routes/ebookroutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/ebook", ebookRoutes);
app.use(errorHandler);
app.listen(8000, () => console.log(`Server is running at 8000`));
