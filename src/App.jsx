import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";

// dá pra importar o arquivo de forma simples mesmo e usar as classes, por exemplo: .testeStyle
// import "./App.css";
//{/* <h1 className="testeStyle">Gerenciador de Tarefas</h1> */}

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "estudar prog",
            description: "estudar react",
            isCompleted: false,
        },
        {
            id: 2,
            title: "estudar mat",
            description: "estudar matemática",
            isCompleted: false,
        },
        {
            id: 3,
            title: "estudar ia",
            description: "estudar inteligência artificial",
            isCompleted: false,
        },
    ]);
    // const [tasks, setTasks] = useState(
    //     JSON.parse(localStorage.getItem("tasks") || [])
    // );
    console.log("##", tasks);
    // useEffect(() => {
    //     console.log("TASKS ALTERADAS");
    // }, [tasks]);
    // useEffect recebe uma função e uma lista de variáveis, toda vez
    // que alguma variável é alterada a função passada é executada
    // a lista pode ser VAZIA [], isso faz a função ser executada apenas uma vez, no carregamento do componente

    // useEffect(() => {
    //     localStorage.setItem("tasks", JSON.stringify(tasks));
    // }, [tasks]); // useEffect recebe uma função e uma lista de variáveis, toda vez que alguma variável é alterada a função passada é executada

    //CHAMANDO UMA API PRA ALIMENTAR AS TAREFAS
    // useEffect(() => {
    //     // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     //     .then((response) => response.json())
    //     //     .then((json) => console.log(json));

    //     // async function fetchTasks(){// pode ser assim também
    //     const fetchTasks = async () => {
    //         const response = await fetch(
    //             "https://jsonplaceholder.typicode.com/todos?_limit=10",
    //             {
    //                 method: "GET",
    //             }
    //         );
    //         const data = await response.json();
    //         console.log(data);
    //         setTasks(data);
    //     };
    //     fetchTasks();
    // }, []); // lista vazia só executa 1x quando o componente é carregado

    function onTaskClick(taskId) {
        const newTasks = tasks.map((task) => {
            // busca na lista de tasks a task que tem o id passado no parâmetro
            if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted }; //retorna tudo da task e altera só o isCompleted
            }
            return task; // sem alterações
        });
        setTasks(newTasks);
    }

    function onDeleteTaskClick(taskId) {
        const newTasks = tasks.filter((task) => {
            return task.id != taskId; // retorna uma lista com todas as tasks que são diferentes da clicada na lixeira
        });
        setTasks(newTasks);
    }

    function onAddTaskClick(title, description) {
        const newTasks = {
            // id: tasks.length + 1, // bug com a exclusão, teria que atualizar os ids dos próximos elementos...
            id: v4(), // o uuid gera um id aleatório
            // title: title,  //short handle syntax, como o nome da propriedade é o mesmo do parâmetro
            // description: description,
            title,
            description,
            isCompleted: false,
        };
        // setTasks(tasks.push(newTasks));//não funciona porque é uma lista
        setTasks([...tasks, newTasks]);
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                {/* <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Gerenciador de Tarefas 1
                </h1> */}
                <Title>Gerenciador de Tarefas 1</Title>
                <AddTask onAddTaskClick={onAddTaskClick} />
                <Tasks
                    tasks={tasks}
                    onTaskClick={onTaskClick}
                    onDeleteTaskClick={onDeleteTaskClick}
                />
            </div>
        </div>
    );
}

export default App;
