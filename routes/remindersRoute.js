//libraries
const express = require("express");

//Reminder Model import
const ReminderModel = require("../models/reminderModel");

//router setup
const router = express.Router();

//route to get all reminders from db
router.get("/get", async (req, res) => {
  const reminders = await ReminderModel.find();
  res.json(reminders);
});

//route to create a new reminder
router.post("/create", async (req, res) => {
  const { reminder } = req.body;
  const newReminder = new ReminderModel({ reminder });
  await newReminder.save();
  res.json(newReminder);
});

//route to update an existing reminder
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { reminder } = req.body;
  const reminderToUpdate = await ReminderModel.findById(id);
  reminderToUpdate.reminder = reminder;
  await reminderToUpdate.save();
  res.send("reminder updated");
});

//route to delete a reminder
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await ReminderModel.findByIdAndRemove(id).exec();
  res.send("reminder deleted");
});

module.exports = router;
