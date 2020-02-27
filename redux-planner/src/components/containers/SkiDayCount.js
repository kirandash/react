import React from 'react';
import SkiDayCount from '../ui/SkiDayCount'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		total: state.allSkiDays.length,
		powder: state.allSkiDays.filter(day => day.powder).length, // count of total powder days
		backcountry: state.allSkiDays.filter(day => day.backcountry).length
	}
}

const Container = connect(mapStateToProps)(SkiDayCount) // connect is an higher order fn

export default Container

// export default () =>
// 	<SkiDayCount total={100} powder={25} backcountry={10} />
