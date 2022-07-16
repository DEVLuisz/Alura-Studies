import React, {useState} from 'react';
import List from './Components/List';
import Form from './Components/Form';
import styles from './App.module.scss';
import Cronometro from './Components/TS/Cronometro';
import { ITarefa } from './Components/TS/Interface';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selectTodo(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selected: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefas() {
    if(selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selected: false,
            completed: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List
       tarefas={tarefas}
       selectTodo={selectTodo}
        />
      <Cronometro 
      selecionado={selecionado}
      finalizarTarefas={finalizarTarefas}
      />
    </div>
  );
}

export default App;
