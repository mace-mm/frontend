import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

class App extends Component {
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
      topics: [
        { name: 'topic1', description: 'This is some sample description text that describes Topic1' },
        { name: 'topic2', description: 'This is some sample description text that describes Topic2' },
        { name: 'topic3', description: 'This is some sample description text that describes Topic3' },
      ]
    }
  }

  topicCards() {
    const cards = this.state.topics.map((topic) => {
      return (<TopicCard topic={topic} />);
    });
    return cards;
  }

  render() {
    return (
      <div className="container topic-list">
        <div className="display-4">Topics</div>
        {this.topicCards()}
      </div>
    );
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
