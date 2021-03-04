export default {
  ADD_TODO(state, name) {
    state.todos.unshift({ id: Date.now(), name, isDone: false });
  },
  UPDATE_TODO(state, id) {
    const todo = state.todos.find((todo) => todo.id === id);
    todo.isDone = !todo.isDone;
  },
  DEL_TODO(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  IS_CHECKED(state, isDone) {
    state.todos.forEach((todo) => (todo.isDone = isDone));
  },
};
