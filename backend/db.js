const mongoose=require("mongoose")
const { boolean } = require("zod")
mongoose.connect("mongodb+srv://admin:Anirudhtyagi@cluster0.tqw6gpy.mongodb.net/todos")
const todoschema=mongoose.Schema({
   title:String,
   description:String,
   completed:{
    type:Boolean,
    default:false
   }
})

const todo=mongoose.model('todos',todoschema)

module.exports={
    todo
}