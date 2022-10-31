import { FC } from 'react';
import cx from 'classnames';
import styles from './ToDoList.module.css';
import { IToDoListProps } from './ToDoList.props';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList: FC<IToDoListProps> = ({ changeHandler, removeHandler, todos, className, ...props }) => (
  <ul className={cx(styles.list, className)} {...props}>
    {todos.map((item, index) => (
      <ToDoItem key={index} itemData={item} changeHandler={changeHandler} removeHandler={removeHandler} />
    ))}
  </ul>
);

export default ToDoList;