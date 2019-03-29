import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './components/AddTodo';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <List />
      </div>
    );
  }
}

// accepts state as an argument because our component is 
// connected to the redux store with connect
// this allows our component to access the store using this.props...
const mapStateToProps = (state) => ({
    username: state.user.username
})

// connects our component to our redux store
export default connect(mapStateToProps)(App);
