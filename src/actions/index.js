const ADD_TODO = 'ADD_TODO'
export const addTodo = (text) => ({
  type: ADD_TODO,
  // this is the payload, doesn't have to be called payload, text: text
  text,
  id: Math.random()
})

const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  // this is the payload, doesn't have to be called payload, id: id
  id
})


// Does the same thing, more complex syntax
// export const addTodo = () => {
//   return {
//     type: ADD_TODO
//   }
// }