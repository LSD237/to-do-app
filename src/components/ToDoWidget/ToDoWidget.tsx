import { FC, useState } from 'react';
import cx from 'classnames';
import styles from './ToDoWidget.module.css';
import { IToDoWidgetProps } from './ToDoWidget.props';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoControlPanel from './components/ToDoControlPanel/ToDoControlPanel';
import { mockToDos } from '../../utils/mockData/mockToDos';
import { TToDoItem } from '../../utils/types';



const ToDoWidget: FC<IToDoWidgetProps> = ({ label, className, ...props }) => {
  const [todos, setTodos] = useState<TToDoItem[]>(mockToDos);
  return (
  <div className={cx(styles.container, className)} {...props}>
    <h2 className={styles.label}>{label}</h2>
    <ToDoForm setToDo={setTodos} />
    <ToDoList todos={todos} />
    <ToDoControlPanel />
  </div>
);
}

export default ToDoWidget;
