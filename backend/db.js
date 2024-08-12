const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Connnected to MONGODB"))
.catch((err) => console.error("MongoDB connection error:", err));

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todo", todoSchema,"tasks");

module.exports = {
    todo
}
