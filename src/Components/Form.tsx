import React, { useState } from "react";
import Button from "./Button";
import styles from "./Form.module.scss";
import { ITarefa } from "./TS/Interface";
import {v4 as uuidv4} from 'uuid';

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Form ({setTarefas} : Props) {

  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00")


 function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas
    (oldTarefas => [...oldTarefas, 
      { tarefa,
        tempo, 
        selected: false,
        completed: false,
        id: uuidv4()
        }]);
        setTarefa("");
        setTempo("00:00");

  }

  return (
    <form
      className={styles.novaTarefa}
      onSubmit={handleSubmit}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(event) =>
            setTarefa(event.target.value)}
          placeholder="O que você quer estudar ?"
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={tempo}
          onChange={(event) =>
            setTempo(event.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">
        Adicionar
        </Button>
    </form>
  );
}


export default Form