const express = require("express");
const route = express.Router();
const authUser = require("../middlewares/authUser.middleware");
const {login, logout, register} = require("../controller/auth.controller");
const User = require("../controller/user.controller");
const Project = require("../controller/project.controller");
const Task = require("../controller/task.controller");
const SubTask = require("../controller/sub_task.controller");
const Discussion = require("../controller/discussion.controller");
const Message = require("../controller/message.controller");
const Attachment = require("../controller/attachment.controller");

// Authorization
route.post("/login", login);
route.post("/register", register);
route.get("/logout", authUser, logout);

//Users
route.get('/user/all', authUser, User.getAll);
route.get('/user/:id', authUser, User.getOne);
route.put('/user/edit/:id', authUser, User.edit);
route.delete('/user/delete/:id', authUser, User.delete);

// Project
route.get('/projects/all', authUser, Project.getAll);
route.get('/projects/:id', authUser, Project.getOne);
route.post('/projects/create', authUser, Project.create);
route.delete('/projects/delete/:id', authUser, Project.delete);
route.put('/projects/update/:id', authUser, Project.update);
route.post('/projects/addUser/:id', authUser, Project.addUser);
route.put('/projects/removeUser/:id', authUser, Project.removeUser);
route.put('/projects/addPermission/:id', authUser, Project.addPermission);


// Task
route.get('/projects/:id/tasks', authUser, Task.getAll);
route.get('/tasks/:id', authUser, Task.getOne);
route.post('/projects/:id/tasks/create', authUser, Task.create);
route.delete('tasks/delete/:id', authUser, Task.delete);
route.put('/tasks/update/:id', authUser, Task.update);


//Subtask
route.get('/tasks/:id/subtasks', authUser, SubTask.getAll);
route.post('/tasks/:id/subtasks/create', authUser, SubTask.create);
route.put('/subtasks/update/:id', authUser, SubTask.update);
route.delete('/subtasks/:id/delete', authUser, SubTask.delete);

// Discussion
route.get('/projects/:id/discussion', authUser, Discussion.getAll);
route.get('/discussion/:id', authUser, Discussion.getOne);
route.post('/projects/:id/discussion/create', authUser, Discussion.create);
route.delete('/discussion/delete/:id', authUser, Discussion.delete);
route.put('/discussion/update/:id', authUser, Discussion.update);

//Message
route.get('/discussion/:id/message', authUser, Message.getAll);
route.get('/message/:id', authUser, Message.getOne);
route.post('/discussion/:id/message/create', authUser, Message.create);
route.delete('/message/delete/:id', authUser, Message.delete);
route.put('/message/update/:id', authUser, Message.update);

//Attachment
route.get('/project/:id/attachment', authUser, Attachment.getAll);
route.get('attachment/:id', authUser, Attachment.getOne);
route.post('/project/:id/attachment/create', authUser, Attachment.create);
route.put('/attachment/update/:id', authUser, Attachment.update);
route.delete('/attachment/delete/:id', authUser, Attachment.delete);

module.exports = route;

