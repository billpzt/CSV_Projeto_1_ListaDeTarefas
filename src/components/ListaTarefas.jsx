import React, { useState } from "react";
import TaskCard from "./TaskCard";

export default function ListaTarefas() {
  const [listaTarefas, setListaTarefas] = useState([]);
  const [tarefa, setTarefa] = useState("");

  const inserirTarefaHandler = (tarefa) => {
    setListaTarefas([...listaTarefas, tarefa]);
    console.log(listaTarefas);
  };

  const handleChange = (event) => {
    setTarefa(event.target.value);
    console.log(event.target.value);
  };

  const removerTarefaHandler = (tarefa) => {
    console.log(`Removi item ${tarefa}`);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input type="text" onChange={handleChange} value={tarefa} style={styles.input}/>
      <button onClick={() => inserirTarefaHandler(tarefa)} style={styles.button}>
        Inserir Tarefa
      </button>
      <ul>
        {listaTarefas.map((tarefa) => {
          return (
            <li style={styles.list}>
              <TaskCard
                textoTarefa={tarefa}
                deleteFunction={removerTarefaHandler}
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
        padding: 8,
        boxShadow: "1px 1px 2px #778da9",
        backgroundColor: "white"
    },
    button: {
        backgroundColor: '#4CAF50', /* Green */
        border: 'none',
        color: 'white',
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
    },
    list: {
        listStyleType: 'none'
    }
  };


