const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoute = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRoute);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () =>
  console.log(`Server started on PORT ${PORT}`.yellow.bold)
);
