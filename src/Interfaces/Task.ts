export interface ITask {
	id: string
	title: string
	isCompleted: boolean
	createdAt: Date
	completedAt: null | Date
}