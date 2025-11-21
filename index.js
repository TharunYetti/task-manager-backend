const express = require("express");
const app = express();
const connectDB = require("./data/mongoose"); 

const putRoutes = require("./routes/postRoutes");
const getRoutes = require("./routes/getRoutes");
const editRoutes = require("./routes/editRoutes");
const deleteRoutes = require("./routes/deleteRoutes");

connectDB();
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running and DB file imported successfully!");
});

app.use("/tasks", getRoutes);
app.use("/tasks", editRoutes);
app.use("/tasks", require("./routes/postRoutes"));
app.use("/tasks", deleteRoutes);

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});

