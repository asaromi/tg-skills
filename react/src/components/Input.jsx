import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Input = ({ ...props }) => {
	return (
		<div className="relative">
			<input {...props}  />
			{props.type === 'password' && (
				<FontAwesomeIcon icon={faEye} className="!absolute !w-4 !h-4 aspect-square object-cover object-center" />
			)}
		</div>
	)
}

export default Input