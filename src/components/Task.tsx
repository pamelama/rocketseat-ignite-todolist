import { ChangeEvent, useState } from 'react';

import { ITask } from '../Interfaces/Task';

import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

import circle from './../assets/circle.svg';
import checked from './../assets/checked.svg';

interface TaskProps {
	task: ITask;
	handleIsCompleted: (id: string) => void;
	handleDeleteTask: (task: ITask) => void;
}

export function Task({ task, handleIsCompleted, handleDeleteTask }: TaskProps) {
	const [isChecked, setIsChecked] = useState(false);

	function onCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
		handleIsCompleted(event.target.id);
	}

	function onDeleteTask() {
		handleDeleteTask(task);
	}

	return (
		<div className={styles.task}>
			<input
				type='checkbox'
				name='task'
				id={task.uuid}
				checked={isChecked}
				onChange={onCheckboxChange}
			/>
			<div
				className={styles.customCheckbox}
				onClick={() => setIsChecked(!isChecked)}
			>
				<img
					src={circle}
					alt=''
				/>
				<img
					src={checked}
					alt=''
				/>
			</div>
			<label
				htmlFor={task.uuid}
				onClick={() => setIsChecked(!isChecked)}
			>
				{task.title}
			</label>
			<button
				title='Remover'
				onClick={onDeleteTask}
			>
				<Trash size={16} />
			</button>
		</div>
	);
}
