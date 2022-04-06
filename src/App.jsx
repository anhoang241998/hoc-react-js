import { useState } from "react"
import "./App.css"
import ColorBox from "./ColorBox"

function App() {
	return (
		<section>
			<ColorBox color="red"></ColorBox>
			<ColorBox color="green"></ColorBox>
			<ColorBox color="blue"></ColorBox>
		</section>
	)
}

export default App
