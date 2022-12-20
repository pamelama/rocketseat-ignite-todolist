import styles from './TaskList.module.css'

import clipboard from './../assets/clipboard.svg'
import { Task } from './Task'

export function TaskList() {
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
				<Task />
				<Task />
				<Task />
			</section>
		</main>
	)
}