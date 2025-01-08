import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    const navigate = useNavigate();

    function voltar() {
        navigate(-1); // padrão pra voltar no navigate
    }

    return (
        <div className="w-screen h-screen bg-slate-500 p-6 ">
            {/* <h1>{title}</h1>
            <h1>{description}</h1> */}

            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative m-6">
                    {/* <button onClick={()=>navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100"> */}
                    <button
                        onClick={voltar}
                        className="absolute left-0 top-0 bottom-0 text-slate-100">
                        <ChevronLeftIcon />
                    </button>
                    {/* <h1 className="text-3xl text-slate-100 font-bold text-center">
                        Detalhes de Tarefas 1
                    </h1> */}
                    <Title>Detalhes de Tarefas 1</Title>
                </div>
                <div className="bg-slate-200 p-4 rounded-md">
                    <h1 className="text-xl text-slate-600 font-bold">
                        {title}
                    </h1>
                    <h1 className="text-xl text-slate-600  ">{description}</h1>
                </div>
            </div>
        </div>
    );
}
export default TaskPage;
