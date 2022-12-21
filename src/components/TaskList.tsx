import { Task } from './Task';

import { ITask } from '../Interfaces/Task';

import styles from './TaskList.module.css';

import clipboard from './../assets/clipboard.svg';

interface TaskListProps {
	tasks: ITask[];
	handleIsCompleted: (id: string) => void;
	handleDeleteTask: (task: ITask) => void;
}

export function TaskList({
	tasks,
	handleIsCompleted,
	handleDeleteTask,
}: TaskListProps) {
	const completedTasks = tasks.filter((task) => task.isCompleted === true);

	return (
		<main className={styles.tasks}>
			<section className={styles.tasksInfo}>
				<div className={styles.createdCounterTitle}>
					Tarefas criadas
					<span className={styles.counter}>{tasks.length}</span>
				</div>
				<div className={styles.completedCounterTitle}>
					Concluídas
					<span
						className={styles.counter}
					>{`${completedTasks.length} de ${tasks.length}`}</span>
				</div>
			</section>

			{tasks.length === 0 && (
				<section className={styles.tasksEmpty}>
					<img
						src={clipboard}
						alt=''
					/>
					<p className={styles.tasksEmptyMessage}>
						<strong>Você ainda não tem tarefas cadastradas</strong>
						Crie tarefas e organize seus itens a fazer
					</p>
				</section>
			)}

			{tasks.length > 0 && (
				<section className={styles.tasksNotEmpty}>
					{tasks.map((task) => (
						<Task
							key={task.uuid}
							task={task}
							handleIsCompleted={handleIsCompleted}
							handleDeleteTask={handleDeleteTask}
						/>
					))}
				</section>
			)}
		</main>
	);
}
