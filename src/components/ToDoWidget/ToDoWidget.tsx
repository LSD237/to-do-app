import { FC, useEffect, useState } from 'react';
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

  const handleChangeItemState = (id: string) => {
    const state = [...todos];
    const item = state.find((item) => item.id === id);
    if (item) {
      item.completed = !item.completed;
    }
    setTodos(state);
  };

  const handleRemoveItem = (id: string) => {
    const filteredItems = [...todos].filter((item) => item.id !== id);
    setTodos(filteredItems);
  };

  useEffect(() => {}, [todos]);

  return (
    <div className={cx(styles.container, className)} {...props}>
      <h2 className={styles.label}>{label}</h2>
      <ToDoForm setToDo={setTodos} />
      <ToDoList todos={todos} changeHandler={handleChangeItemState} removeHandler={handleRemoveItem} />
      <ToDoControlPanel />
    </div>
  );
};

export default ToDoWidget;
