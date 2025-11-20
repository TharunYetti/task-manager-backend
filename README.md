# 📌 Task Manager Backend (Express + MongoDB)

A simple backend API for managing tasks using **Node.js**, **Express.js**, and **MongoDB**.  
This backend supports creating tasks, editing tasks, deleting tasks, and organizing tasks based on their completion status.

---

## 🚀 Technologies Used

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  
- Mongoose  

---

## 📦 Task Schema Structure

The task document stored in the database contains:
- **name** — the name/title of the task  
- **description** — details about the task  
- **isCompleted** — boolean value indicating whether the task is completed  

---

## 🛠 Features / API Summary

### 1. Add a New Task  
Allows creation of a new task with `name`, `description`, and a default `isCompleted` value.

---

### 2. Get All Tasks  
Fetches every task stored in the database.

---

### 3. Get Completed Tasks  
Returns only the tasks that have been marked as completed.

---

### 4. Get Pending Tasks  
Returns all tasks that are not yet completed.

---

### 5. Delete a Task  
Deletes a specific task by its ID.

---

### 6. Mark Task as Completed  
Updates an existing task's status and marks it as completed.

---

### 7. Edit a Task  
Allows updating:
- The task name  
- The task description  
- Or both  

---
