import React from 'react';

class NewsSingle extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src={item.urlToImage} alt={item.title}></img>
                        <span className="card-title">{item.source.name}</span>
                    </div>
                    <div className="card-content">
                        {item.title}
                    </div>
                    <div className="card-action">
                        <a href={item.url} target="_blank">Full article</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsSingle;