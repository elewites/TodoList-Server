//libraries
const mongoose = require("mongoose");

//schema for reminder model
const reminderSchema = mongoose.Schema({
  reminder: { type: String, required: true },
});

//schema model stored in variable
//can export to use in other packages
const ReminderModel = mongoose.model("reminder", reminderSchema);

module.exports = ReminderModel;
