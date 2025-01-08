import { useState } from "react";
import Input from "./Input";

// function AddTask(props) { // usar destruction
function AddTask({ onAddTaskClick }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleAdicionar(title, description) {}
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            {/* <input
                type="text"
                placeholder="digite o título da tarefa"
                className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            
            <input
                type="text"
                placeholder="digite a descrição da tarefa"
                className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            /> */}
            {/* USANDO O COMPONENTE INPUT CRIADO */}
            <Input
                type="text"
                placeholder="digite o título da tarefa"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <Input
                type="text"
                placeholder="digite a descrição da tarefa"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        return alert("Preencha o Título e a Descrição");
                    }
                    onAddTaskClick(title, description);
                    setTitle("");
                    setDescription("");
                }}
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
                Adicionar
            </button>
        </div>
    );
}

export default AddTask;
