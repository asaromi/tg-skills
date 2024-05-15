import React from 'react'
import RouteContextProvider, { useRouteContext } from '../hooks/contexts/RouteContext.jsx'
import routers from '../utils/router.js'

function App() {
	return (
		<RouteContextProvider routes={routers} />
	)
}

export default App
