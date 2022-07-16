import React from "react";
import Item from "./Item";
import styles from "./List.module.scss";
import { ITarefa } from "./TS/Interface";

interface Props{
  tarefas: ITarefa[],
  selectTodo: (tarefaSelecionada: ITarefa) => void
}

const List = ({tarefas, selectTodo} : Props) => {
  return (
    <aside className={styles.listaTarefas}>
      <h2> 
        Estudos do dia
         </h2>
      <ul>
        {tarefas.map((item) => (
          <Item 
          selectTodo={selectTodo}
          key={item.id} 
          {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
