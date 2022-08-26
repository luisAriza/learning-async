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

// A esto se le conoce como "Callback Hell" y es una desventaja de los callbacks, ya que es un codigo difícil de leer y mantener.
