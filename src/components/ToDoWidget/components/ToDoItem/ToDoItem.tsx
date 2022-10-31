import cx from 'classnames';
import { FC } from 'react';
import styles from './ToDoItem.module.css';
import { IToDoItemProps } from './ToDoItem.props';

const ToDoItem: FC<IToDoItemProps> = ({ itemData, removeHandler, changeHandler, className, ...props }) => (
  <li className={cx(styles.item, className)} {...props}>
    <label
      htmlFor={itemData.id}
      className={cx(styles.item__inputLabel, {
        [styles.item__inputLabel_checked]: itemData.completed,
      })}
    >
      <input
        className={styles.item__input}
        checked={itemData.completed}
        type='checkbox'
        onChange={() => changeHandler(itemData.id)}
        name={itemData.label}
        id={itemData.id}
      />
      {itemData.label}
    </label>
    <button type='button' className={styles.item__button} onClick={() => removeHandler(itemData.id)}>
      X
    </button>
  </li>
);

export default ToDoItem;
