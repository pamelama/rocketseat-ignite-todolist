import { Trash } from 'phosphor-react'
import circle from './../assets/circle.svg'
import checked from './../assets/checked.svg'
import styles from './Task.module.css'
import { ITask } from '../Interfaces/Task'

export function Task({ id, title, isCompleted, createdAt, completedAt }: ITask) {
	return (
		<div className={styles.task}>
			<input type="radio" name="" id={id} />
			<div className={styles.customRadio}>
				<img src={circle} alt="" />
				<img src={checked} alt="" />
			</div>
			<label htmlFor={id}>{title}</label>
			<button title='Remover'><Trash size={16} /></button>
		</div>
	)
}