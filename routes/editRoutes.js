const express = require("express");
const router = express.Router();
const Task = require("../data/tasks");


// MARK TASK AS COMPLETED
router.patch("/:id", async (req, res) => {
    try {
        const { isCompleted } = req.body;
        console.log("Updating task with ID:", req.params.id, "to isCompleted:", isCompleted);
        const updatedTask = await Task.updateOne(
            { _id: req.params.id },
            { $set: { isCompleted: isCompleted } }
        );

        if (updatedTask.matchedCount === 0) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({
            message: "Task marked as completed",
            task: updatedTask
        });

    } catch (error) {
        res.status(500).json({ error: "Failed to complete task" });
    }
});

module.exports = router;