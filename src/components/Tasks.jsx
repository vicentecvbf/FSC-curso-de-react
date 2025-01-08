import {
    ChevronRightIcon,
    DeleteIcon,
    Trash2Icon,
    TrashIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

// function Tasks(props) { // usar o destruction
function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    console.log(tasks);
    const navigate = useNavigate(); // navigate pra trocar de página

    function onSeeDetailsClick(task) {
        // navigate(`/task?title=${task.title}&description=${task.description}`);//endPoint da rota

        const query = new URLSearchParams(); // usado pra colocar as variáveis no formato de query parameters
        query.set("title", task.title);
        query.set("description", task.description);

        navigate(`/task?${query.toString()}`);
    }
    return (
        // <h3>
        //     {props.tasks.map((task, index) => (
        //         <p id={index}>{task.title}</p>
        //     ))}
        // </h3>
        // transformando pra lista
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    {/* {task.title} */}
                    <button
                        onClick={() => onTaskClick(task.id)}
                        // className="text-left bg-slate-400 w-full text-white p-2 rounded-md"
                        className={`text-left bg-slate-400 w-full text-white p-2 rounded-md ${
                            task.isCompleted && "line-through"
                        }`}>
                        {task.title}
                    </button>

                    {/* <button
                        onClick={() => {
                            onSeeDetailsClick(task);
                        }}
                        className="bg-slate-400 text-white p-2 rounded-md">
                        <ChevronRightIcon></ChevronRightIcon>
                    </button>
                    <button
                        onClick={() => onDeleteTaskClick(task.id)}
                        className="bg-slate-400 text-white p-2 rounded-md">
                        <Trash2Icon />
                    </button> */}
                    {/* CHAMANDO O BOTÃO CRIADO */}
                    <Button
                        onClick={() => {
                            onSeeDetailsClick(task);
                        }}>
                        <ChevronRightIcon></ChevronRightIcon>
                    </Button>
                    <Button onClick={() => onDeleteTaskClick(task.id)}>
                        <Trash2Icon />
                    </Button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;
