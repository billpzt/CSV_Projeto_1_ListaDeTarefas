import React, { useState } from 'react';
import TaskCard from './TaskCard';

export default function ListaTarefas() {
    const [listaTarefas, setListaTarefas] = useState([]);
    const [tarefa, setTarefa] = useState('');

    const inserirTarefaHandler = (tarefa) => {
        setListaTarefas([...listaTarefas, tarefa]);
        console.log(listaTarefas);
    }

    const handleChange = event => {
        setTarefa(event.target.value);
        console.log(event.target.value);
    }

    // const removerTarefaHandler = (tarefa) => {

    // }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input 
                type="text" 
                onChange={handleChange}
                value={tarefa}
            />
            <button 
                onClick={() => inserirTarefaHandler(tarefa)}
            >Inserir Tarefa</button>
            <ul>

            </ul>
        </div>
    )
}