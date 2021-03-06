import React from 'react'
import ExpandableCard from './ExpandableCard'
import PropTypes from 'prop-types'

/* Wrapper for cards and selectors */
function LoggerView({ selector, cardTitle, expandHeight, logsExpanded }) {
	// console.log('Logger View: ' + logsExpanded)

	return (
		<>
			<ExpandableCard cardTitle={cardTitle} expandHeight={expandHeight}>
				{selector}
			</ExpandableCard>
		</>
	)
}

LoggerView.propTypes = {
	selector: PropTypes.element,
	cardTitle: PropTypes.string,
	expandHeight: PropTypes.number,
	logsExpanded: PropTypes.bool,
}

export default LoggerView
