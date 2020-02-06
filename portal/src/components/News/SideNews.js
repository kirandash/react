import React from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from './Error';

class SideNews extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sidenews: [],
            error: false
        }
    }

    componentDidMount() {
        // const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=19a2c684bb1a4f4495818650af9bb4d3`;
        // fetch(url)
        //     .then((response) => {
        //         return response.json(); // Must return response in JSON format to be able to do something with it
        //     })
        //     .then((data) => { // data here will hold the returned value from then block from before
        //         this.setState({
        //             news: data.articles
        //         })
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        
        // Replace Fetch with Axios
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=19a2c684bb1a4f4495818650af9bb4d3`;

        axios.get(url)
            .then((response) => { // No need to convert to JSON
                this.setState({
                    sidenews: response.data.articles
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            });
        
        // POST example
        // axios.post(url, { // url, config for sending data
        //     data: {
        //         news: {
        //             title: 'blahblahblah',
        //             description: 'blahblahblah'
        //         }
        //     }
        // });
    
    }

    renderItems() {
        if(!this.state.error){
            return this.state.sidenews.map((item, index) => (
                <SingleSide key={index} item={item} />
            ));
        }else{
            return <Error/>
        }
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}

export default SideNews;
