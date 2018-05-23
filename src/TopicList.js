import React, { Component } from 'react';


export default class TopicList extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            error: null,
            isLoaded: false,
            topics: []
        }
    }

    componentDidMount() {
        let username = 'admin';
        let password = 'qwedsa@123';

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json; indent=4');
        headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
        fetch("http://localhost:8000/topics/", { method: 'GET', headers: headers })
            .then((response) => {
                return response.json();
            })
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        topics: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    topicCards() {
        const cards = this.state.topics.map((topic) => {
            var setCurrentTopic = this.props.setCurrentTopic;
            return (<TopicCard topic={topic} key={topic.name} setCurrentTopic={setCurrentTopic} />);
        });
        return cards;
    }

    render() {
        const { error, isLoaded, topics } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container topic-list">
                    <div className="display-4">Topics</div>
                    {this.topicCards()}
                </div>
            );
        }
    }
}

class TopicCard extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            name: props.topic.name,
            description: props.topic.description
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.setCurrentTopic(this.state.topic.url);
    }

    render() {
        return (
            <div className="topic-list-topic card" onClick={this.handleClick}>
                <div className="card-body">
                    <h3 className="card-title display-5">{this.state.name}</h3>
                    <p className="card-text">{this.state.description}</p>
                </div>
            </div>
        );
    }
}
