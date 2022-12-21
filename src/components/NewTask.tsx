import styles from './NewTask.module.css'

import { PlusCircle } from 'phosphor-react'

import { ChangeEvent, FormEvent, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { ITask } from './../Interfaces/Task'

interface NewTaskProps {
	addTaskToList: (task: ITask) => void
}

export function NewTask({ addTaskToList }: NewTaskProps) {

	const [newTaskText, setNewTaskText] = useState('')

	function handleNewTaskSubmit(event: FormEvent) {
		event.preventDefault()

		const newTask: ITask = {
			id: uuidv4(),
			title: newTaskText,
			isCompleted: false,
			createdAt: new Date,
			completedAt: null
		}

		addTaskToList(newTask)
	}

	function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
		setNewTaskText(event.target.value)
	}

	return (
		<form className={styles.form} onSubmit={handleNewTaskSubmit}>
			<input
				name='task'
				onChange={handleNewTaskChange}
				value={newTaskText}
				placeholder='Adicione uma nova tarefa'
			/>
			<button type='submit'>Criar <PlusCircle size={16} weight='bold' /></button>
		</form>
	)
}

// https://www.figma.com/file/QG3jiK4UaRWfETRKfplFRA/ToDo-List-(Copy)?node-id=0%3A1&t=9iF9SbGenegYRaXS-0