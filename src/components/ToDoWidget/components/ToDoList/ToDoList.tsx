import { FC } from 'react';
import cx from 'classnames';
import styles from './ToDoList.module.css';
import { IToDoListProps } from './ToDoList.props';
import ToDoItem from '../ToDoItem/ToDoItem';
import { ToDoFilters } from '../../../../utils/types';


const ToDoList: FC<IToDoListProps> = ({ changeHandler, filter, removeHandler, todos, className, ...props }) => {
  const renderToDos = () => {
    const filteredArr = todos.filter((item) => {
      if (filter === ToDoFilters.Active) return item.completed === false;
      if (filter === ToDoFilters.Completed) return item.completed === true;
      return item;
    });

    if (filteredArr.length === 0) {
      return <p className={styles.list__placeholder}>There is no To-Dos =(</p>;
    }

    return filteredArr.map((item, index) => (
      <ToDoItem key={index} itemData={item} changeHandler={changeHandler} removeHandler={removeHandler} />
    ));
  };

  return (
    <ul className={cx(styles.list, className)} {...props}>
      {renderToDos()}
    </ul>
  );
};

export default ToDoList;
