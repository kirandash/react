import React from 'react'

class ClassMessage extends React.Component <any> {

    componentWillMount() {
        console.log('Almost there...');
    }

    componentDidMount() {
        console.log('Finally...Hello!');
    }

    render() {
        return(
            <p>This is a class message</p>
        )
    }
}

export default ClassMessage
