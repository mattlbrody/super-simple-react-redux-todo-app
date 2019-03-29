import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = (props) => {
  return (
    <form onSubmit={(event) => {
      // prevent form from reloading
      event.preventDefault() 
      // save the input as a variable 
      // referenceing name in the input tag
      let input = event.target.userInput.value
      // call the action and pass it the input value
      props.dispatch(addTodo(input))
      event.target.userInput.value = ''
    }}>
      <input type="text" name="userInput" />
      <button>Add To Do</button>
    </form>
  )
}

export default connect()(AddTodo);