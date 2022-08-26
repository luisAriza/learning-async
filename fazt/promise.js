// example whit Callback
function requestHandler(req, res) {
  User.findById(req.userId, function (err, user) {
    if (err) {
      requestHandler.send(err);
    } else {
      Tasks.findById(user.taskId, function (err, tasks) {
        if (err) {
          return res.send(err);
        } else {
          tasks.completed = true;
          tasks.save(function (err) {
            if (err) {
              return res.send(err);
            } else {
              res.send("Task completed");
            }
          });
        }
      });
    }
  });
}

// Same example with Promise
function requestHandler(req, res) {
  User.findById(req.userId)
    .then(function (user) {
      Tasks.findById(user.taskId);
    })
    .then(function (tasks) {
      tasks.complete = true;
      return tasks.save();
    })
    .then(function () {
      res.send("Tasks completed");
    })
    .catch(function (errors) {
      res.send(errors);
    });
}
