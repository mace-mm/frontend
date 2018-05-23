import React, { Component } from 'react';


export default class Topic extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            error: null,
            isLoaded: false,
            topic: "foo"
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <TopicSearch />
                        <ActionItems />
                    </div>
                    <div className="col-lg-8">
                        {this.renderTopic()}
                    </div>
                </div>
            </div>
        );
    }

    renderTopic() {
        if (this.state.topic === null) {
            return (
                <div>
                    <h1 className="mt-4">Add a new topic</h1>
                    <hr />
                    <TopicForm />
                </div>
            );
        } else {
            return (
                <div>
                    <h1 className="mt-4">Topic Name</h1>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Phasellus egestas tellus
                        rutrum tellus pellentesque eu. Nec ultrices dui
                        sapien eget mi. Ipsum nunc aliquet bibendum enim
                        facilisis gravida neque convallis. Lorem mollis
                        aliquam ut porttitor leo a diam sollicitudin.
                        Consectetur a erat nam at.
                    </p>
                    <h3> Meetings </h3>
                    <hr />
                    <MeetingList />
                </div>
            );
        }
    }

    renderNewTopicForm() {
        return (
            <form>
                <div className="form-group">
                    <label for="topicName">Topic Name</label>
                    <input className="form-control" id="topicName" />
                </div>
                <div className="form-group">
                    <label for="topicDescription">Topic Description</label>
                    <textarea className="form-control" id="topicDescription" />
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
            </form>
        );
    }
}


class TopicForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A topic was submitted: ' + this.state.topicName);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="topicName">Topic Name</label>
                    <input
                        name="topicName"
                        className="form-control"
                        id="topicName"
                        value={this.state.topicName}
                        onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="topicDescription">Topic Description</label>
                    <textarea
                        name="topicDescription"
                        className="form-control"
                        value={this.state.topicDescription}
                        onChange={this.handleChange} />
                </div>
                <input type="submit" className="btn btn-primary" value="Save" />
            </form>
        );
    }
}


class MeetingList extends Component {
    render() {
        var meetings = [...Array(5).keys()].map(i => <Meeting key={i} />);
        return meetings;
    }
}

class Meeting extends Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-header">
                    <h5 className="card-title">5th January 2018</h5>
                    <div className="card-body">
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Phasellus egestas tellus
                            rutrum tellus pellentesque eu. Nec ultrices dui
                            sapien eget mi. Ipsum nunc aliquet bibendum enim
                            facilisis gravida neque convallis. Lorem mollis
                            aliquam ut porttitor leo a diam sollicitudin.
                            Consectetur a erat nam at.
                    </p>
                    </div>
                </div>
            </div>
        );
    }
}

class TopicSearch extends Component {
    render() {
        return (
            <div className="card my-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Go!</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

class ActionItems extends Component {
    render() {
        return (
            <div className="card my-4">
                <h5 className="card-header">Pending Items</h5>
                <div className="card-body">
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
            </div>
        );
    }
}