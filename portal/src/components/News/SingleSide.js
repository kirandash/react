import React from 'react';

class SingleSide extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div>
                <div className="divider"></div>
                <a href={item.url} target="_blank">
                    <div className="section">
                        <h5>{item.source.name}</h5>
                        <p>{item.title}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default SingleSide;