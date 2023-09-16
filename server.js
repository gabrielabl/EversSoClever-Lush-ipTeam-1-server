const express = require("express");
const cors = require("cors");
const app = express();


// Routes
const productRoutes = require('./routes/product');

app.use('/product', productRoutes);


//MIDDLEWARE
require("dotenv").config();
const { PORT, CORS_ORIGIN} = process.env;
app.use(cors({ origin: CORS_ORIGIN })); // ENABLE CORS AND PREVENTS OTHER FRONT END FROM ACCESSING BACK END
app.use(express.json()); // PARSE INCOMING JSON DATA
app.use(express.static("public/images")); // MAKE STATIC FILES FROM PUBLIC AVALIABLE


//ROUTE TEST
app.get("/", (_req, res) => {
  res.send("Hello");
});


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
