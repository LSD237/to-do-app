import { FC, useEffect, useMemo, useState } from 'react';
import {nanoid} from 'nanoid'
import cx from 'classnames';
import styles from './ToDoWidget.module.css';
import { IToDoWidgetProps } from './ToDoWidget.props';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoControlPanel from './components/ToDoControlPanel/ToDoControlPanel';
import { preparedMockToDos } from '../../utils/mockData/mockToDos';
import { ToDoFilters, TToDoItem } from '../../utils/types';

const ToDoWidget: FC<IToDoWidgetProps> = ({ label, className, ...props }) => {
  
  const initialToDos = JSON.parse(localStorage.getItem('todos') || preparedMockToDos);
  const [todos, setTodos] = useState<TToDoItem[]>(initialToDos);
  const [filter, setFilter] = useState<ToDoFilters>(ToDoFilters.All);

  const counter = useMemo(() => todos.filter(item => item.completed !== true).length, [todos])

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
    
    localStorage.setItem('todos', JSON.stringify(filteredItems));
    if (localStorage.getItem('todos') === '[]') {
      localStorage.removeItem('todos');
    }
  };

  const handleClearCompleted = () => {
    const filteredItems = [...todos].filter((item) => item.completed !== true);
    setTodos(filteredItems);
    localStorage.setItem('todos', JSON.stringify(filteredItems));
    if (localStorage.getItem('todos') === '[]') {
      localStorage.removeItem('todos');
    }
  }

  const handleSetFilter = (filter: ToDoFilters) => {
    setFilter(filter);
    console.log(filter);
    
  }

   const handleAddToDo = ( value: string) => {
       setTodos((prevState) => [
         {
           label: value,
           completed: false,
           id: nanoid(),
         },
         ...prevState,
       ]);
       localStorage.setItem('todos', JSON.stringify(todos))
   };

  useEffect(() => {}, [todos]);

  return (
    <div className={cx(styles.container, className)} {...props}>
      <h2 className={styles.label}>{label}</h2>
      <ToDoForm addToDo={handleAddToDo} />
      <ToDoList todos={todos} changeHandler={handleChangeItemState} removeHandler={handleRemoveItem} filter={filter} />
      <ToDoControlPanel
        clearHandler={handleClearCompleted}
        filterHandler={handleSetFilter}
        counter={counter}
        activeFilter={filter}
      />
    </div>
  );
};

export default ToDoWidget;
