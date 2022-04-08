import { useState, useEffect } from "react"
import { formatDateToTime } from "../utils/DateFormat"

export default function useClock() {
	const [timeString, setTimeString] = useState("")

	useEffect(() => {
		const clockInterval = setInterval(() => {
			const now = new Date()
			// hh:mm:ss aa
			const newTimeString = formatDateToTime(now)

			setTimeString(newTimeString)
		}, 1000)

		return () => {
			// clean up
			console.log("Clock cleanup")
			clearInterval(clockInterval)
		}
	}, [])

	return { timeString }
}
