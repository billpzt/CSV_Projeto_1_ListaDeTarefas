import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { v4 as uuidv4 } from 'uuid';


export default function ListaTarefas() {

  const [listaTarefas, setListaTarefas] = useState([]);
  const [tarefa, setTarefa] = useState({id: '', texto: ''});

  const inserirTarefaHandler = (tarefa) => {
    setListaTarefas([...listaTarefas, tarefa]);
    console.log(listaTarefas);
  };

  const handleChange = (event) => {
    setTarefa({id: uuidv4(), texto: event.target.value});
  };

  const handleRemoverTarefa = (value) => {
    const novaListaTarefas = listaTarefas.filter(tarefa => tarefa.id !== value);
    setListaTarefas(novaListaTarefas);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input type="text" onChange={handleChange} value={tarefa.texto} style={styles.input}/>
      <button onClick={() => inserirTarefaHandler(tarefa)} style={styles.button}>
        Inserir Tarefa
      </button>
      <ul>
        {listaTarefas.map((tarefa) => {
          return (
            <li style={styles.list} key={tarefa.id}>
              <TaskCard
                id={tarefa.id}
                textoTarefa={tarefa.texto}
                deleteFunction={() => handleRemoverTarefa(tarefa.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const styles = {
    input: {
        margin: 10,
        padding: 15,
        width: '80%',
        boxShadow: "1px 1px 2px #778da9",
        backgroundColor: "white"
    },
    button: {
        backgroundColor: '#4CAF50', /* Green */
        border: 'none',
        color: 'white',
        padding: 15,
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: 16
    },
    list: {
        listStyleType: 'none'
    }
  };


