import React from 'react';
import AddDayForm from '../ui/AddDayForm'
import { withRouter } from 'react-router' // This too is a container that wraps the router around the AddDayForm container, router is required so that we can navigate back to home page from AddDayForm
import { connect } from 'react-redux'
import { addDay, suggestResortNames, clearSuggestions } from '../../actions'

const mapStateToProps = (state, props) =>
    ({
        suggestions: state.resortNames.suggestions,
        fetching: state.resortNames.fetching,
        // router: props.router
        router: props
    })

const mapDispatchToProps = dispatch =>
    ({
        // onNewDay(day)
        onNewDay({ resort, date, powder, backcountry }) { // ES6 destructured variables
            dispatch(
                // addDay(day.resort, day.date, day.powder, day.backcountry) // Use destructured variables instead of using day.
                addDay(resort, date, powder, backcountry)
            )
        },
        onChange(value) {
            if (value) {
                dispatch(
                    suggestResortNames(value)
                )
            } else {
                clearSuggestions()
            }
        },
        onClear() {
            dispatch(
                clearSuggestions()
            )
        }
    })

const Container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm)

export default withRouter(Container)

// export default withRouter(
//     (props) =>
//         <AddDayForm suggestions={[]}
//             fetching={false}
//             router={props.router}
//             onNewDay={day => console.log('todo: add day', day)}
//             onChange={value => console.log('todo: suggest', value)}
//             onClear={() => console.log('todo: clear suggestions')} />
// )