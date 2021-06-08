// TODO: IT19180526 - Chandrasiri S A N L D

import React, {Component} from "react";

import NewsService from "../../services/NewsService";
import {Card, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        newsList: []
    }

    componentDidMount = async () => {
        await NewsService.getNewsByStatus('Active')
            .then(response => response.data)
            .then((data) => {
                this.setState({newsList: data});
            }).catch(error =>
                console.log(error)
            );
    }

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.state.newsList.length === 0?
                            <p>Loading...</p>
                            :
                            this.state.newsList.map((news) => (
                                <div className="col-md-4 singleNews" key={news.id}>
                                    <h3>{news.date}</h3>
                                    <p>{news.description}</p>
                                    <Link to={'/news'} className={'card-link'} >Read more..</Link>
                                </div>
                                // <Card style={{ width: '100%' }} key={news.id}>
                                //     <Card.Body>
                                //         <Card.Title>{news.date}</Card.Title>
                                //         <Card.Text>{news.description}</Card.Text>
                                //         <Link to={'/news'} className={'card-link'} >Read more..</Link>
                                //     </Card.Body>
                                // </Card>
                            ))
                    }
                </div>
            </div>
        )
    }
}