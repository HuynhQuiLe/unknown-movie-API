require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");

const PORT = process.env.PORT || 6868;

const app = express();
connectDB();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/root"));

// user
app.use("/users", require("./routes/userRoutes"));

// carousels
app.use("/carousels", require("./routes/carouselRoutes"));

// movies
app.use("/movies", require("./routes/movieRoutes"));

// theaters
app.use("/theaters", require("./routes/theaterRoutes"));

// branches
app.use("/branches", require("./routes/branchRoutes"));

// schedules
app.use("/schedules", require("./routes/scheduleRoutes"));

// schedulesByHeThongRap
app.use("/schedulesInTotal", require("./routes/scheduleIntotalRoutes"));

//seats
app.use("/seats", require("./routes/seatRoutes"));

//upload image
app.use("/upload-images", require("./routes/uploadImagesRoutes"));

// comment
app.use("/comments", require("./routes/commentRoutes"));

// test protected route
app.use("/posts", require("./routes/protectedRoutes"));

mongoose.connection.once("open", () => {
  console.log("Connnected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
