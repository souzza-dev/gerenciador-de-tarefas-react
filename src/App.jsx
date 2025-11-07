import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks"

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

  function getNextId(tasks) {
  if (!tasks || tasks.length === 0) return 1;
  // converte ids existentes para número (caso sejam strings)
  const nums = tasks.map(t => Number(t.id) || 0);
  return Math.max(...nums) + 1;
}

  function onAddTaskSubmit(title, description){
  setTask((prevTasks) => {
    const newId = getNextId(prevTasks);
    const newTask = {
      id: newId,
      title,
      description,
      isComplete: false,
    };
    return [...prevTasks, newTask];
  });
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