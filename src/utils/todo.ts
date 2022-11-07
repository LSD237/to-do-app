import { TToDoItem, ToDoFilters } from './types';

const ordersSort = (firstItem: TToDoItem, secondItem: TToDoItem) => {
  if (firstItem.orderIndex > secondItem.orderIndex) {
    return 1;
  } else {
    return -1;
  }
};

export const prepareTodos = (arr: TToDoItem[], filter: ToDoFilters) => {
  return arr.sort(ordersSort).filter((item) => {
    if (filter === ToDoFilters.Active) return item.completed === false;
    if (filter === ToDoFilters.Completed) return item.completed === true;
    return item;
  });
}

export const sortTodosByOrder = (todoArr: TToDoItem[], draggedItem: TToDoItem, hoveredItem: TToDoItem) => {
  return todoArr.map((todo) => {
    if (todo.id === hoveredItem.id) {
      return { ...todo, orderIndex: draggedItem.orderIndex };
    } else if (todo.id === draggedItem.id) {
      return { ...todo, orderIndex: hoveredItem.orderIndex };
    } else {
      return todo;
    }
  });
}
