import styles from './TaskList.module.css'

import clipboard from './../assets/clipboard.svg'
import { Task } from './Task'
import { ITask } from '../Interfaces/Task'

interface TaskListProps {
	tasks: ITask[]
}

export function TaskList({ tasks }: TaskListProps) {
	return (
		<main className={styles.tasks}>
			<section className={styles.tasksInfo}>
				<div className={styles.createdCounterTitle}>Tarefas criadas
					<span className={styles.counter}>0</span>
				</div>
				<div className={styles.completedCounterTitle}>Concluídas
					<span className={styles.counter}>0</span>
				</div>
			</section>

			<section className={styles.tasksEmpty} style={{ display: 'none' }}>
				<img src={clipboard} alt="" />
				<p className={styles.tasksEmptyMessage}>
					<strong>Você ainda não tem tarefas cadastradas</strong>
					Crie tarefas e organize seus itens a fazer
				</p>
			</section>

			<section className={styles.tasksNotEmpty}>
				{tasks.map(task => <Task key={task.id} id={task.id} title={task.title} isCompleted={task.isCompleted} createdAt={task.createdAt} completedAt={task.completedAt} />)}
			</section>
		</main>
	)
}