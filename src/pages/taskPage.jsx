import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage(){
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description")

    return <div className="min-h-screen bg-black p-4 sm:p-6 flex justify-center">
      <div className="w-full max-w-md space-y-4">
        <div className="flex justify-center relative mb-6">
            <button 
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"> 
                <ChevronLeftIcon /> 
            </button>

            <h1 className="text-3xl text-slate-100 font-bold text-center">
                Detalhes da tarefa
            </h1>
        </div>

        <div className="bg-slate-900 p-4 rounded-md">
            <h2 className="text-xl font-bold text-slate-100">{title}</h2>
            <p className=" text-slate-100">{description}</p>
        </div>

      </div>
    </div>
}
export default TaskPage;