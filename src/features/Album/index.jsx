import React from "react"
import PropTypes from "prop-types"
import AlbumList from "./components/AlbumList"

function AlbumFeature(props) {
	const albumList = [
		{
			id: 1,
			name: "Nhạc Hoa Thịnh Hành",
			thumbnailUrl: "https://source.unsplash.com/random",
		},
		{
			id: 2,
			name: "Rap Việt Nghe Là Ghiền",
			thumbnailUrl: "https://source.unsplash.com/random",
		},
		{
			id: 3,
			name: "Trào Lưu Nhạc Hot",
			thumbnailUrl: "https://source.unsplash.com/random",
		},
	]
	return (
		<div>
			<h2>Có thể bạn sẽ thích đấy</h2>
			<AlbumList albumList={albumList} />
		</div>
	)
}

AlbumFeature.propTypes = {}

export default AlbumFeature
