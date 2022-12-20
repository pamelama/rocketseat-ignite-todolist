import { Trash } from 'phosphor-react'
import circle from './../assets/circle.svg'
import checked from './../assets/checked.svg'
import styles from './Task.module.css'

export function Task() {
	return (
		<div className={styles.task}>
			<input type="radio" name="" id="a" />
			<div className={styles.customRadio}>
				<img src={circle} alt="" />
				<img src={checked} alt="" />
			</div>
			<label htmlFor="a">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
			<button><Trash size={16} /></button>
		</div>
	)
}