import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import PropTypes from 'prop-types'
import { Button } from '../components'
import useRouteContext from '../hooks/useRouteContext'

function Home() {
	const { navigate } = useRouteContext()

	return (
		<>
			<header className="flex justify-center px-5 py-5 relative">
				<h1 className="text-xl">
					Create User
				</h1>

				<Button
					className="absolute right-0 flex items-center hover:border-b-2 hover:border-black"
					onClick={() => navigate('/users')}
				>
					<p>List Users</p>
					<FontAwesomeIcon icon={faArrowRight} className="ml-2 !w-5 !h-5 aspect-square object-cover object-center" />
				</Button>
			</header>
		</>
	)
}

// Home.propTypes = {}

export default Home