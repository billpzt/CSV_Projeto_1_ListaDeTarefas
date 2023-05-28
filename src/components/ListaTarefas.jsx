import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { v4 as uuidv4 } from "uuid";

export default function ListaTarefas() {
  const [listaTarefas, setListaTarefas] = useState([]);
  const [tarefaTexto, setTarefaTexto] = useState("");
  const [tarefa, setTarefa] = useState({ id: "", texto: "" });
  const [marcadas, setMarcadas] = useState(false);
  const [textoMarcadas, setTextoMarcadas] = useState('Marcar todas');

  const inserirTarefaHandler = (tarefa) => {
    const novaTarefa = { ...tarefa };
    setListaTarefas([...listaTarefas, novaTarefa]);
    console.log(listaTarefas);
  };

  const handleChange = (event) => {
    setTarefaTexto(event.target.value);
  };

  const handleRemoverTarefa = (value) => {
    const novaListaTarefas = listaTarefas.filter(
      (tarefa) => tarefa.id !== value
    );
    setListaTarefas(novaListaTarefas);
  };

  const handleRemoverMarcadas = () => {
    var novaListaTarefas = listaTarefas.filter((tarefa) => !tarefa.checked);
    setListaTarefas(novaListaTarefas);
  };

  const handleCheckboxes = () => {
    if (!marcadas) {
      marcarTodas();
      setMarcadas(true);
      setTextoMarcadas("Desmarcar todas");
    } else {
      desmarcarTodas();
      setMarcadas(false);
      setTextoMarcadas("Marcar todas");
    }
  }

  const marcarTodas = () => {
    var checkboxes = document.getElementsByName("checkbox");
    var checkboxesArray = Array.from(checkboxes);
    checkboxesArray.map((item) => {
      return (item.checked = true);
    });
  };

  const desmarcarTodas = () => {
    var checkboxes = document.getElementsByName("checkbox");
    var checkboxesArray = Array.from(checkboxes);
    checkboxesArray.map((item) => {
      return (item.checked = false);
    });
  };

  useEffect(() => {}, [listaTarefas]);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        onChange={handleChange}
        value={tarefaTexto}
        style={styles.input}
      />
      
      <div>
      <button
        onClick={() =>
          inserirTarefaHandler({ id: uuidv4(), texto: tarefaTexto })
        }
        style={styles.button}
      >
        Inserir Tarefa
      </button>
      <button
          onClick={() => handleCheckboxes()}
          style={styles.buttonMarcarTodas}
        >
          {textoMarcadas}
        </button>
        <button
          onClick={() => handleRemoverMarcadas()}
          style={styles.buttonExcluirTarefas}
        >
          Excluir tarefas marcadas
        </button>
      </div>
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
    width: "80%",
    boxShadow: "1px 1px 2px #778da9",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#4CAF50" /* Green */,
    border: "none",
    color: "white",
    padding: 15,
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: 16,
  },
  buttonExcluirTarefas: {
    backgroundColor: "red",
    border: "none",
    color: "white",
    padding: 15,
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: 16,
  },
  buttonMarcarTodas: {
    backgroundColor: "blue",
    border: "none",
    color: "white",
    padding: 15,
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: 16,
  },
  list: {
    listStyleType: "none",
  },
};
