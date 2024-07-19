const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const Todo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    console.log("Added Successfully");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
	const { _id, text } = req.body;
	ToDoModel.findByIdAndUpdate(_id, { text })
	  .then(() => res.send("Update Succesfully"))
	  .catch((err) => console.log(err));
  };
  
  module.exports.deleteToDo = async (req, res) => {
	const { _id, text } = req.body;
	ToDoModel.findByIdAndDelete(_id)
	  .then(() => res.send("Deleted Succesfully"))
	  .catch((err) => console.log(err));
  };