// good practice to start with an initial state
const intitialState = {
  data: []
}

const todos = (state = intitialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        // copy of the state to reference for when
        // we update it, i.e. ...state.data
        ...state,
        data: [...state.data, {
          id: action.id, 
          text: action.text
        }]
      }
    case 'DELETE_TODO':
      // create new array as long as the id passed does not match the id of the item,
      // the clicked item will match and be deleted
      const todos = state.data.filter(todo => todo.id !== action.id) 
      return {
        ...state,
        data: todos
      }
    default:
      return state
  }
}

export default todos