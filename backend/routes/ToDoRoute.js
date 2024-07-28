const { Router } = require("express");
const { getToDo, saveTodo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveTodo);
router.put("/update", updateToDo);  // Changed to PUT
router.delete("/delete/:id", deleteToDo);  // Changed to DELETE and added :id

module.exports = router;
