import React, { useState, useEffect } from "react"
import { formatDate } from "../../utils/DateFormat"

function Clock() {
	const [timeString, setTimeString] = useState("")

	useEffect(() => {
		const clockInterval = setInterval(() => {
			const now = new Date()
			// hh:mm:ss aa
			const newTimeString = formatDate(now)

			setTimeString(newTimeString)
		}, 1000)

		return () => {
			// clean up
			console.log("Clock cleanup")
			clearInterval(clockInterval)
		}
	}, [])

	return (
		<>
			<p style={{ fontSize: "42px" }}>{timeString}</p>
		</>
	)
}

export default Clock
