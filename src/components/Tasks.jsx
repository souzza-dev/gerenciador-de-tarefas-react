import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}){
    const navigate = useNavigate()

    function onSeeDetailsClick(task){
        // para mais segurança, pode usar new URLSearchParams()
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }

    return(
        <div>

            <ul className="list-none space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">

                        <button 
                        onClick={() => onTaskClick(task.id)} 
                        className={`bg-slate-400 w-full text-white p-2 rounded-md flex gap-2 text-left ${task.isComplete && 'line-through'}`}
                        >
                            {task.isComplete && <CheckIcon />}
                            {task.title}
                        </button>

                        <button 
                        onClick={() => onSeeDetailsClick(task)} 
                        className="bg-slate-400 text-white p-2 rounded-md">
                            <ChevronRightIcon />
                        </button>
                        <button onClick={() => onDeleteTaskClick(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
                            <TrashIcon/>
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Tasks;