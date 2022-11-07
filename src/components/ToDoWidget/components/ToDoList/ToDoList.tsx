import { FC, useMemo, DragEvent, useState } from 'react';
import cn from 'classnames';
import styles from './ToDoList.module.css';
import { IToDoListProps } from './ToDoList.props';
import ToDoItem from '../ToDoItem/ToDoItem';
import { TToDoItem } from '../../../../utils/types';
import { prepareTodos, sortTodosByOrder } from '../../../../utils/todo';

const ToDoList: FC<IToDoListProps> = ({ filter, todos, handlers, className, ...props }) => {
  const [currentTodo, setCurrentTodo] = useState<TToDoItem | null>(null);

  const preparedArr = useMemo(() => prepareTodos(todos, filter), [todos, filter]);

  const dragOverHandler = (e: DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add(styles.isGrabbing);
  };

  const dropHandler = (e: DragEvent<HTMLLIElement>, item: TToDoItem) => {
    e.preventDefault();
    if (currentTodo) {
      const sortedTodos = sortTodosByOrder(preparedArr, currentTodo, item);
      handlers.reorderHandler(sortedTodos);
    }
    e.currentTarget.classList.remove(styles.isGrabbing);
  };

  if (preparedArr.length === 0) {
    return <p className={styles.list__placeholder}>There is no To-Dos = (</p>;
  }

  return (
    <ul className={cn(styles.list, className)} {...props}>
      {preparedArr.map((item, index) => (
        <ToDoItem
          draggable={true}
          onDragStart={() => setCurrentTodo(item)}
          onDragLeave={(e) => e.currentTarget.classList.remove(styles.isGrabbing)}
          onDragEnd={(e) => e.currentTarget.classList.remove(styles.isGrabbing)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, item)}
          key={index}
          itemData={item}
          changeHandler={handlers.changeHandler}
          removeHandler={handlers.removeHandler}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
