export default {
  total(state) {
    return state.todos.length;
  },
  completeTotal(state) {
    return state.todos.reduce((prev, todo) => (todo.isDone ? ++prev : prev), 0);
  },
};
