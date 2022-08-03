import mongoose from "mongoose";

const {Schema, model} = mongoose

const TodoSchema = new Schema({
  _id: {type: String, unique: true},
  title: {type: String, require: true},
  completed: {type: Boolean, default: false}
}, {timestamps: true})


const Todo = model('todo', TodoSchema)

export default Todo
