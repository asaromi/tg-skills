import { createContext, useContext } from 'react'

export const RouteContext = createContext({
	path: null,
	navigate: () => {}
})

const useRouteContext = () => useContext(RouteContext)
export default useRouteContext