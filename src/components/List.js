import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions'

const List = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>
          <span>{todo.text}</span>
          <button onClick={() => props.dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = (state) => ({
  // state is the store
  // todos is the reducer name
  // data is the array name in that reducer
  todos: state.todos.data
})

export default connect(mapStateToProps)(List);