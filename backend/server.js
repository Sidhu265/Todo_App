require("dotenv").config();
const express =  require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const { updateTodo } = require("./types");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.post('/todo', async function(req,res){
    try{const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message:"Invalid payload",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })
    }
    catch(error){
    res.status(500).json({
        message:"Internal server error",
    })
    console.log(error);
    return;
}
    res.status(200).json({
        message: "Todo created",
    })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find({});
        console.log(todos);
        res.status(200).json({
            todos: todos,
    })

})

app.put("/completed",async function(req,res){
    try{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "Invalid inputs",
        })
        return;
    }
    await todo.updateOne({
        _id:req.body.id,
    },{
        completed: !(req.body.completed),
    })
    res.status(200).json({
        message: "Todo updated",
    })
    }
    catch(error){
        res.status(500).json({
            message: "Internal server error",
        })
        console.log(error);
        return;
    }

})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Server is running on port ${port}")
});