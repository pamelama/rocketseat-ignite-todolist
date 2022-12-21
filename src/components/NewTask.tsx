import { ChangeEvent, FormEvent, useState } from 'react';

import { ITask } from './../Interfaces/Task';

import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';

interface NewTaskProps {
	handleAddTaskToList: (task: ITask) => void;
}

export function NewTask({ handleAddTaskToList }: NewTaskProps) {
	const [newTaskText, setNewTaskText] = useState('');

	function onNewTaskSubmit(event: FormEvent) {
		event.preventDefault();

		const newTask: ITask = {
			uuid: uuidv4(),
			title: newTaskText,
			isCompleted: false,
		};

		handleAddTaskToList(newTask);
		setNewTaskText('');
	}

	function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
		setNewTaskText(event.target.value);
	}

	return (
		<form
			className={styles.form}
			onSubmit={onNewTaskSubmit}
		>
			<input
				name='task'
				onChange={handleNewTaskChange}
				value={newTaskText}
				placeholder='Adicione uma nova tarefa'
				required
			/>
			<button type='submit'>
				Criar{' '}
				<PlusCircle
					size={16}
					weight='bold'
				/>
			</button>
		</form>
	);
}
