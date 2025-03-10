import React from 'react'

const Todo = ({item,deleteTask,doneTask}) => {
  return (
    <div className='flex flex-col justify-between w-[300px] h-[280px] bg-black rounded-lg p-8 ' key={item.id}>
        <div>
            <h1 className='font-semibold flex-wrap'>{item.id} : {item.taskName}</h1>
            <div className='mt-6'>
                <h1 className='flex'>Status : {item.isCompleted ? <h1>Completed</h1> : <h1>Pending</h1>}</h1>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
                <button className='bg-blue-800 p-1 rounded 'onClick={()=>{doneTask(item.id)}}>Update Status</button>
                <button className='bg-blue-800 p-1 rounded ' onClick={()=>{deleteTask(item.id)}}>Remove</button>
        </div>
        

    </div>
  )
}

export default Todo