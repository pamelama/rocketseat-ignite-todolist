import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TaskList } from './components/TaskList'

import { ITask } from './Interfaces/Task'
import { useState } from 'react'

export function App() {

	const [tasks, setTasks] = useState<ITask[]>([])

	function addTaskToList(newTask: ITask): void {
		setTasks([...tasks, newTask])
	}

	return (
		<div className="App">
			<Header />
			<div className={styles.wrapper}>
				<NewTask addTaskToList={addTaskToList} />
				<TaskList tasks={tasks} />
			</div>
		</div>
	)
}