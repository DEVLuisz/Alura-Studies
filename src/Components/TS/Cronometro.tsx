import Button from "../Button";
import Relogio from "./Relogio";
import styles from './Cronometro.module.scss'
import { ITarefa } from "./Interface";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../Common/Utils/Time";

interface Props{
  selecionado: ITarefa | undefined;
  finalizarTarefas: () => void
}

export default function Cronometro ({selecionado, finalizarTarefas} : Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado])

  function regressiva(contador: number = 0){
    setTimeout(() =>{
    if(contador > 0){
        setTempo(contador -1)
        return regressiva(contador - 1)
      }   finalizarTarefas()
    }, 1000)
  }

  return(
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Button onClick={() => regressiva(tempo)}>
        Começar !
         </Button>
    </div>
  )
}