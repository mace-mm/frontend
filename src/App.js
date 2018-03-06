import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
// import {base64} from 'base'

class App extends Component {
  currentScreen() {

  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
          <TopicList />
        </div>
      </div>
    );
  }
}

class Header extends Component {

  render() {
    return (
      <div>
        <Navbar color="primary" fixed='bottom' dark>
          <NavbarBrand href="/">Mace: Meeting Manager</NavbarBrand>
          <div className="navbar-text"><small>Copyright &copy; 2018 Biju Chacko</small></div>
        </Navbar>
      </div>
    );
  }
}

class TopicList extends Component {
  constructor(props) {
    super(props);

    // TODO: load topics from backend
    this.state = {
      error: null,
      isLoaded: false,
      topics: []
      // topics: [
      //   { name: 'Topic1', description: 'This is some sample description text that describes Topic1' },
      //   { name: 'Topic2', description: 'This is some sample description text that describes Topic2' },
      //   { name: 'Topic3', description: 'This is some sample description text that describes Topic3' },
      // ]
    }
  }

  componentDidMount() {
    // let base64 = require('base-64');
    let username = 'admin';
    let password = 'qwedsa@123';

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json; indent=4');
    headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
    fetch("http://localhost:8000/topics/", { method: 'GET', headers: headers })
      .then((response) => {
        // console.log(response.json());
        return response.json();
      })
      .then(
        (result) => {
          console.log(result);

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
      return (<TopicCard topic={topic} />);
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

    this.state = {
      name: props.topic.name,
      description: props.topic.description
    }
  }

  render() {
    return (
      <div className="topic-list-topic card">
        <div className="card-body">
          <h3 className="card-title display-5">{this.state.name}</h3>
          <p className="card-text">{this.state.description}</p>
        </div>
      </div>
    );
  }
}

export default App;
