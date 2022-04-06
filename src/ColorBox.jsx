import React from "react"
import PropTypes from "prop-types"

function ColorBox(props) {
	const { color } = props
	return (
		<div
			className="box"
			style={{ backgroundColor: color, width: "50px", height: "50px" }}></div>
	)
}

ColorBox.propTypes = {
	color: PropTypes.string.isRequired,
	rounded: PropTypes.bool,
}

// Dont forget to set default value for non-required props
ColorBox.defaultProps = {
	rounded: true,
}

export default ColorBox
