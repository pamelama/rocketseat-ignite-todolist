import { useState } from 'react';

import { ITask } from './Interfaces/Task';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';

import './global.css';
import styles from './App.module.css';

export function App() {
	const [tasks, setTasks] = useState<ITask[]>([]);

	function handleAddTaskToList(newTask: ITask): void {
		setTasks([...tasks, newTask]);
	}

	function handleIsCompleted(id: string) {
		const taskIndex = tasks.findIndex((task) => task.uuid === id);
		tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;

		setTasks([...tasks]);
	}

	function handleDeleteTask(taskToDelete: ITask) {
		const tasksWithoutDeletedOne = tasks.filter((task) => {
			return task !== taskToDelete;
		});

		setTasks(tasksWithoutDeletedOne);
	}

	return (
		<div className='App'>
			<Header />
			<div className={styles.wrapper}>
				<NewTask handleAddTaskToList={handleAddTaskToList} />
				<TaskList
					tasks={tasks}
					handleIsCompleted={handleIsCompleted}
					handleDeleteTask={handleDeleteTask}
				/>
			</div>
		</div>
	);
}
