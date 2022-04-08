import { useState, useEffect } from "react"
import Pagination from "./components/Pagination/Pagination"
import PostList from "./components/PostList/PostList"
import queryString from "query-string"
import PostFilterForm from "./components/PostFilterForm/PostFilterForm"
import Clock from "./components/Clock/Clock"

function App() {
	const [postList, setPostList] = useState([])
	const [pagination, setPagination] = useState({
		_page: 1,
		_limit: 10,
		_totalRows: 1,
	})
	const [filters, setFilters] = useState({
		_limit: 10,
		_page: 1,
		title_like: "",
	})

	useEffect(() => {
		fetchPostList()
	}, [filters])

	async function fetchPostList() {
		try {
			// _limit=10&_page=3
			const paramsString = queryString.stringify(filters)
			const requestUrl = `https://js-post-api.herokuapp.com/api/posts?${paramsString}`
			const response = await fetch(requestUrl)
			const responseJSON = await response.json()
			const { data, pagination } = responseJSON
			setPostList(data)
			setPagination(pagination)
		} catch (error) {
			console.log(`Failed to fetch post list: ${error.message}`)
		}
	}

	const handlePageChange = (newPage) => {
		setFilters({
			...filters,
			_page: newPage,
		})
	}

	const handleFiltersChange = (newFilters) => {
		setFilters({
			...filters,
			_page: 1,
			title_like: newFilters.searchTerm,
		})
	}

	const [showClock, setShowClock] = useState(true)

	return (
		<div className="App">
			<h1>React hooks - Clock</h1>
			{showClock && <Clock />}
			<button onClick={() => setShowClock(showClock ? false : true)}>
				Hide Clock
			</button>
			{/* <PostFilterForm onSubmit={handleFiltersChange} />
			<PostList posts={postList} />
			<Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
			{/* <TodoFeature /> */}
			{/* <AlbumFeature /> */}
		</div>
	)
}

export default App
