import styles from './NewTask.module.css'

import { PlusCircle } from 'phosphor-react'

export function NewTask() {
	return (
		<form className={styles.form}>
			<input type='text' placeholder='Adicione uma nova tarefa' />
			<button>Criar <PlusCircle size={16} weight='bold' /></button>
		</form>
	)
}

// https://www.figma.com/file/QG3jiK4UaRWfETRKfplFRA/ToDo-List-(Copy)?node-id=0%3A1&t=9iF9SbGenegYRaXS-0