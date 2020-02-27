import React from 'react';
import SkiDayList from '../ui/SkiDayList'
import { connect } from 'react-redux'
import { removeDay } from '../../actions'

// const sample = [
//     {
//     "resort": "Stowe",
//     "date": "2017-1-28",
//     "powder": false,
//     "backcountry": false
//   },
//   {
//     "resort": "Tuckerman's Ravine",
//     "date": "2017-1-31",
//     "powder": false,
//     "backcountry": true
//   },
//   {
//     "resort": "Mad River Glen",
//     "date": "2017-2-12",
//     "powder": true,
//     "backcountry": false
//   }
// ]

// export default (props) =>
//     <SkiDayList days={sample}
//                 filter={props.match.params.filter}
//                 onRemoveDay={date => console.log('remove day on', date)} />

const mapStateToProps = (state, props) => ({
  // props is the 2nd arg which is the props passed to this container component
  days: state.allSkiDays,
  filter: props.match.params.filter // From router
}) // directly returning an object with ({}) instead of using curly brackets and return {return {}}

const mapDispatchToProps = dispatch => ({
  onRemoveDay(date) {
    dispatch(
      removeDay(date)
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SkiDayList)