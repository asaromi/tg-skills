import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Home from '../../pages/Home'
import { RouteContext } from '../useRouteContext'

const RouteContextProvider = ({ routes = [] }) => {
	const [path, setPath] = useState(window.location.pathname)
	const [Component, setComponent] = useState(null)

	const navigate = (newPath) => {
		window.history.pushState({}, '', newPath)
		setPath(() => newPath)
		const { component } = routes.find((data) => data.path === newPath)
		if (component) {
			setComponent(() => component)
		}
	}

	useEffect(() => {
		window.onpopstate = () => {
			setPath(() => window.location.pathname)
			setComponent(() => routes.find(data => data.path === window.location.pathname).component)
		}

		return () => {
			window.onpopstate = null
		}
	}, [])

	return (
		<RouteContext.Provider value={{ path, navigate }} children={Component !== null ? <Component/> : <Home/>} />
	)
}

RouteContextProvider.propTypes = {
	routes: PropTypes.array,
}

export default RouteContextProvider