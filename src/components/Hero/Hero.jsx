import React from "react"

function Hero(props) {
	const { name } = props
	console.log(`Hero render: ${name}`)
	return <div>Hero name: {name}</div>
}

export default React.memo(Hero)
// export default Hero
