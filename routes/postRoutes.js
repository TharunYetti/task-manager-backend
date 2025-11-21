const express = require("express");
const router = express.Router();
const Task = require("../data/tasks");   // Import model


router.post("/", async (req, res) => {
    try {
        console.log("req.body:", req.body);
        const { title, description, isCompleted } = req.body;

        // Check if task exists
        const existingTask = await Task.findOne({ title: title });

        if (existingTask) {
            return res.status(400).json({ message: "Task already exists with this ID" });
        }

        // Create new task
        const newTask = await Task.create({
            title,
            description,
            isCompleted: false
        });

        res.status(201).json({
            message: "Task created successfully",
            task: newTask
        });

    } catch (error) {
        res.status(500).json({ error: "Failed to create task" });
    }
});

module.exports = router;