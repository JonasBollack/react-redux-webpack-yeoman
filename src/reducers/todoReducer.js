function todoApp(state = {
  todo: {
    items: []
  }
}, action) {
  switch (action.type) {
    case 'ADD_TODO':

      var items = [].concat(state.todo.items);
      return Object.assign({}, state, {
        todo: {
          items: items.concat([{
            message: action.message,
            completed: false
          }])
        }
      });

    case 'COMPLETE_TODO':
      var items = [].concat(state.todo.items);

      items[action.index].completed = true;

      return Object.assign({}, state, {
        todo: {
          items: items
        }
      });

    case 'DELETE_TODO':
      var items = [].concat(state.todo.items);

      items.splice(action.index, 1);

      return Object.assign({}, state, {
        todo: {
          items: items
        }
      });

    case 'CLEAR_TODO':
      return Object.assign({}, state, {
        todo: {
          items: []
        }
      });
    default:
      return state;
  }
}

module.exports = todoApp;