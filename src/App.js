import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {
//   Navbar,
//   NavbarBrand,
// } from 'reactstrap';
import TopicList from './TopicList'
import Topic from './Topic'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTopic: null,
      currentPage: "TOPIC",
    };
  }

  setCurrentTopic(topic) {
    this.setState({
      currentTopic: topic,
      currentPage: topic === null ? "TOPIC_LIST" : "TOPIC"
    });
  }

  render() {
    switch (this.state.currentPage) {
      case "TOPIC_LIST":
        return this.topicList();
      case "TOPIC":
        return this.topic();
      default:
        return (<p className="alert alert-danger">Argggg</p>);
    }
  }

  topic() {
    var props = {
      setCurrentTopic: this.setCurrentTopic
    };
    return (
      <div>
        <div className="row">
          <Header props={props} />
        </div>
        <div className="row">
          <Topic props={props} />
        </div>
      </div>
    );
  }

  topicList() {
    var props = {
      setCurrentTopic: this.setCurrentTopic
    };
    return (
      <div>
        <Header props={props} />
        <TopicList props={props} />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">Mace: Meeting Manager</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Topics
                <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Actions</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


export default App;
