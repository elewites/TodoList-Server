//libraries
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//app setup
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const remindersRouter = require("./routes/remindersRoute");
app.use("/reminder", remindersRouter);

//database connection 
const URI =
  "mongodb+srv://eros:eros@todolist.laxhc.mongodb.net/Database?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    })
  );
