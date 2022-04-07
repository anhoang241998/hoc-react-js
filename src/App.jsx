import { useState, useEffect } from "react"
import PostList from "./components/PostList/PostList"

function App() {
	const [postList, setPostList] = useState([])

	useEffect(() => {
		fetchPostList()
	}, [])

	async function fetchPostList() {
		try {
			const requestUrl =
				"https://js-post-api.herokuapp.com/api/posts?_limit-10&_page=1"
			const response = await fetch(requestUrl)
			const responseJSON = await response.json()
			const { data } = responseJSON
			setPostList(data)
		} catch (error) {
			console.log(`Failed to fetch post list: ${error.message}`)
		}
	}

	return (
		<div className="App">
			<h1>React hooks - PostList</h1>
			<PostList posts={postList} />
			{/* <TodoFeature /> */}
			{/* <AlbumFeature /> */}
		</div>
	)
}

export default App
