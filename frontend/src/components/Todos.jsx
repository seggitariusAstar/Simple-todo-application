export function Todos({todos}){

  return<div>

       {/*h1>Go to the gym</h1>
       <h2>You need to go to the gym</h2>
<button>Mark As Done</button>*/}
{todos.map(function(todo){
        
      return<div>
                 <h1>{todo.title}</h1>
                 <h2>{todo.description}</h2>
                 <button onClick={()=>{

                         fetch("http://localhost:3000/completes",{
                            method:"PUT",
                            body: JSON.stringify({
                             _id:_id
                                 
                            }),
                            headers:{
                              "Content-type":"application/json"
                            }
              
              
              
              
                           }) 
                           .then(async function(res){
                                const json=await res.json();
                                alert("Todo completed")
              
                           })
                     


                 }}>{todo.completed==true?"Completed":"Mark As Complete"}</button>

        </div>
 
 

})}




  </div>
  

 
  
    

}