const express=require("express")
const app=new express();
const {createtodo,updatetodo}=require('./types');
const { todo } = require("./db");
const cors=require("cors")

app.use(cors());


app.listen(3000,()=>{
    console.log("The server is running at the 3000 port")
})
app.use(express.json())

app.post("/todos",async function(req,res){
    const creatapayload=req.body;
     const result=createtodo.safeParse(req.body)
     if(!result.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
     }
    await todo.create({
        title:creatapayload.title,
        description:creatapayload.description,
        completed:false
     })
     res.json({

        msg:"Todo created"
     })

})

app.get("/todos",async function(req,res){
      const todos=await todo.find()
res.json({
    todos
})
})

app.put("/completes",async function(req,res){
 
    const result=updatetodo.safeParse(req.body.id)
    console.log(result)
    if(!result.success){
         res.status(411).json({
            msg:"You sent the wrong inputs"
         })

    }
    await todo.updateOne({
        _id: req.body.id

    },{
        completed:true
    })
    res.json({
        msg:"Todo update successfully"
    })


})