import styles from './Item.module.scss'
import { ITarefa } from './TS/Interface'

interface Props extends ITarefa{
  selectTodo: (tarefaSelecionada: ITarefa) => void
}

export default function Item({tarefa,
   tempo,
    selected,
     completed,
      id,
       selectTodo
      }: Props) {
  return (
    <li 
    className={`${styles.item} ${selected ? styles.itemSelecionado : ''}
     ${completed ? styles.itemCompletado : ''}`}
    onClick={() => !completed && selectTodo({
      tarefa, 
      tempo,
      selected,
      completed,
      id
    })}
    >
    <h3>{tarefa}</h3>
    <span>{tempo}</span>
    {completed && <span className={styles.concluido}
       aria-label="Tarefa Completada"></span>}
  </li>
  )
}
