import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks"
import { v4 } from "uuid";

function App(){
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  )

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log(tasks)
  }, [tasks])

  useEffect(() => {
    async function feachTasks() {
    // Chamar a api
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3', {
        method: 'GET',
      })

      // Pegar os dados que ela retorna
      const data = await response.json()
      console.log(data)

      // armazenar os dados no state
      setTask(data)
    }
    //feachTasks()
  }, [])

  function onTaskClick(taskId){
    const newTask = tasks.map((task) => {
      if(task.id === taskId){
        return { ... task, isComplete: !task.isComplete }
      }

      return task
    })
    setTask(newTask)
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTask(newTasks)
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: v4(),
      title,
      description,
      isComplete: false,
    }
    setTask([...tasks, newTask])
  }

  return(

    <div className="min-h-screen bg-black flex justify-center p-4 sm:p-6">

      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl sm:text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}/>
      </div>

    </div>

  )
}

export default App;