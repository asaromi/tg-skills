import React from 'react'
// import PropTypes from 'prop-types'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../components'
import useRouteContext from '../hooks/useRouteContext'

function User() {
	const { navigate } = useRouteContext()

	return (
		<>

			<header className="flex justify-center px-5 py-5 relative">
				<Button
					className="absolute left-0  flex items-center hover:border-b-2 hover:border-black"
					onClick={() => navigate('/')}
				>
					<FontAwesomeIcon icon={faArrowLeft} className="mr-2 !w-5 !h-5 aspect-square object-cover object-center" />
					<p>Create User</p>
				</Button>

				<h1 className="text-xl">
					List User
				</h1>
			</header>
		</>
	)
}

// User.propTypes = {}

export default User