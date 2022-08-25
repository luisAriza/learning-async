function requestHandler(req, res) {
  user.findById(req.userId, function (err, user) {
    if (err) {
      requestHandler.send(err);
    } else {
      tasks.findById(user.taskId, function (err, tasks) {
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
