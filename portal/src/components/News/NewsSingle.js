import React from 'react';

class NewsSingle extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <li>
                <p>{item.title}</p>
            </li>
        )
    }
}

export default NewsSingle;