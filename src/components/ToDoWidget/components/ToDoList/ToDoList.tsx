import { FC } from 'react';
import cx from 'classnames';
import { IToDoListProps } from './ToDoList.props';

const ToDoList: FC<IToDoListProps> = ({ todos, className, ...props }) => (
  <ul className={cx(className)} {...props}>
    {todos.map((item, index) => (
      <li key={index}>
        <label htmlFor={item.label.concat(index.toString())}>
          <input type='checkbox' name={item.label} id={item.label.concat(index.toString())} />
          {item.label}
        </label>
      </li>
    ))}
  </ul>
);

export default ToDoList;