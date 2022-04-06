import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import ColorBox from "./ColorBox"

function App() {
	const name = "Hau"
	const age = 18
	const isMale = true
	const student = {
		name: "Easy FrontEnd",
	}
	const colorList = ["red", "green", "blue"]

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} alt="logo" className="App-logo" />
				<p>Hau Nguyen 123</p>
				<p>
					Xin Chao {name} - {age} - {isMale ? "Male" : "Female"}
				</p>
				{isMale ? <p>Male</p> : <p>Female</p>}
				{isMale && <p>Male</p>}
				{!isMale && <p>Female</p>}

				{isMale && (
					<div>
						<p>Male 1</p>
						<p>Male 2</p>
						<p>Male 3</p>
					</div>
				)}

				{isMale && (
					<>
						<p>Male 1</p>
						<p>Male 2</p>
						<p>Male 3</p>
					</>
				)}

				<p>{student.name}</p>
				<ul>
					{colorList.map((color) => (
						<li style={{ color }}>{color}</li>
					))}
				</ul>
			</header>
		</div>
	)
}

export default App
