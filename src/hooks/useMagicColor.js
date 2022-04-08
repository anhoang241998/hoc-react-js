import { useState, useEffect, useRef } from "react"

function randomColor(currentColor) {
	const color_list = ["red", "green", "yellow"]
	// random 0 -> 2
	const currentIndex = color_list.indexOf(currentColor)
	let newIndex = currentIndex

	while (currentIndex === newIndex) {
		newIndex = Math.trunc(Math.random() * 3)
	}
	return color_list[newIndex]
}

function useMagicColor() {
	const [color, setColor] = useState("transparent")
	const colorRef = useRef("transparent")

	// Change color each second
	useEffect(() => {
		const colorInterval = setInterval(() => {
			const newColor = randomColor(colorRef.current)
			setColor(newColor)

			colorRef.current = newColor
		}, 1000)

		return () => {
			clearInterval(colorInterval)
		}
	}, [])

	return color
}

export default useMagicColor
