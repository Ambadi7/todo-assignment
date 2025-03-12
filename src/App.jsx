import { useEffect,useState } from "react"
import Todo from "./components/Todo"


//Local storage
const localData =() =>{
  let list= localStorage.getItem("data")
  if(list){
    return JSON.parse(list)
  }
  else{
    return []
  }
}
function App() {

  const [todolist,setTodoList] = useState(localData())
  const [newTask,setNewTask] = useState("")


  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(todolist))
  })
  
  
  //add TASK
  const addTask =(e)=>{
    e.preventDefault()
    if(!newTask){
      alert("Enter a task")
    }
    else{
      let newId = todolist.length===0?1:todolist[todolist.length-1].id+1
      let newEntry={ id:newId,taskName:newTask, isCompleted:false}
      setTodoList([...todolist,newEntry])
      setNewTask("")
    }
  }

  //delete Task
  const deleteTask = (id) =>{
    setTodoList(todolist.filter((item) =>{
      return item.id !== id
    }))
  }
  //done task
  
   
  const doneTask = (id) =>{
    setTodoList(
      todolist.map((item)=>{
        return item.id === id ? {...item,isCompleted:true}:item
      })
    )
  }

  return (
    <>
      <div className=" place-items-center bg-linear-to-b from-fuchsia-900 to-slate-950 min-h-screen min-w-screen pt-14 text-white">
        <div className="flex bg-white p-4 w-[310px] md:w-[350px] justify-center rounded-md px-8">
          <input className=" outline-none w-full p-2 text-black" value={newTask} type="text"  onChange={(e)=>{setNewTask(e.target.value)}} ></input>
          <button className="px-6 bg-fuchsia-900 rounded" onClick={addTask}>Add</button>
        </div>
        <div className="m-6 justify-center flex flex-wrap gap-12">
          {
            todolist.map((item)=>{
              return(
                <Todo item={item}  doneTask={doneTask} deleteTask={deleteTask}/>
              )
            }

            )
          }
        </div>
      </div>
      
    </>
  )
}

export default App
