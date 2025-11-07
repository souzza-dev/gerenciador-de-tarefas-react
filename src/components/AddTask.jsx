import { useState } from "react";

function AddTask({onAddTaskSubmit}){
    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")

    return(
        <div className="list-none space-y-3 p-4 sm:p-6 bg-slate-900 rounded-md shadow flex flex-col">
            <input
                type="text"
                placeholder="Digite o titulo da tarefa"
                className=" border-slate-300 bg-gray-950 text-white outline-none px-4 py-2 rounded-md"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            <input 
                type="text" 
                placeholder="Digite a descrição da tarefa"
                className=" border-slate-300  bg-gray-950 text-white outline-none px-4 py-2 rounded-md"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
            <button 
                onClick={() => {
                    if( !title.trim() || !description.trim() ){
                        alert("Preencha os campos corretamente")
                        return
                    }

                    onAddTaskSubmit(title, description)
                    setTitle("")
                    setDescription("")
                }} 
                className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-400">
                    Adicionar
            </button>
        </div>
    )
}
export default AddTask;