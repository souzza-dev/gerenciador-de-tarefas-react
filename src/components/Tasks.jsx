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

            <ul className="list-none space-y-3 p-4 sm:p-5 bg-slate-900 rounded-md shadow">
                {tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">

                        <button 
                        onClick={() => onTaskClick(task.id)} 
                        className={`bg-slate-950 w-full text-white p-2 sm:p-3 rounded-md flex gap-2 text-left items-center ${task.isComplete && 'line-through'}`}
                        >
                            {task.isComplete && <CheckIcon />}
                            {task.title}
                        </button>

                        <button 
                        onClick={() => onSeeDetailsClick(task)} 
                        className="bg-slate-950 text-white p-2 rounded-md">
                            <ChevronRightIcon />
                        </button>
                        <button onClick={() => onDeleteTaskClick(task.id)} className="bg-slate-950 text-white p-2 rounded-md">
                            <TrashIcon   className="text-red-600"/>
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Tasks;