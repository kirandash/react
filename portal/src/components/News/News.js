import React from 'react';
import NewsSingle from './NewsSingle';

class News extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=19a2c684bb1a4f4495818650af9bb4d3`;
        fetch(url)
            .then((response) => {
                return response.json(); // Must return response in JSON format to be able to do something with it
            })
            .then((data) => { // data here will hold the returned value from then block from before
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderItems() {
        return this.state.news.map((item, index) => (
            <NewsSingle key={index} item={item} />
        ));
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}

export default News;
