import React from 'react';

class SingleSide extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div>
                <div className="divider"></div>
                <div className="section">
                    <h5>Section 1</h5>
                    <p>Stuff</p>
                </div>
            </div>
        )
    }
}

export default SingleSide;