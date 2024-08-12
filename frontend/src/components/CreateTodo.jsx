import { useState } from "react";
export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return <div>
        <input style={{margin:10,padding:10,border:"1px solid black",borderRadius:5,fontSize:20}} type="text" placeholder="Enter Title" onChange={(e)=>{setTitle(e.target.value)}}></input> <br />
        <input style={{margin:10,padding:10,border:"1px solid black",borderRadius:5,fontSize:20}} type="text" placeholder="Enter Description" onChange={(e)=>{setDescription(e.target.value)}}></input> <br />

        <button style={{margin:10,padding:10,fontSize:20}} onClick={()=>{
            fetch("http://localhost:3000/todo",
                {
                    method:"POST",
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-Type":"application/json"
                }
                }).then(async function(response){
                await response.json();
                alert("Todo added successfully");
                })

            }}>Add Todo</button>
    </div>
}