import { ChangeEvent, FC, FormEvent, useState } from 'react';
import cx from 'classnames';
import styles from './ToDoForm.module.css';
import { IToDoFormProps } from './ToDoForm.props';
import { ToDoItemStates } from '../../../../utils/types';


const ToDoForm: FC<IToDoFormProps> = ({ setToDo ,className, ...props }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if(inputValue) {
      setToDo((prevState) => [
      {
        label: inputValue,
        state: ToDoItemStates.Active,
      },
      ...prevState,
    ]);
    setInputValue('');
    }
  }

  return (
  <form className={cx(styles.form, className)} {...props} onSubmit={submitHandler}>
    <label htmlFor='toDoInput'>
      <input
        type='text'
        id='toDoInput'
        name='toDoInput'
        value={inputValue}
        className={styles.input}
        placeholder='What needs to be done?'
        onChange={changeHandler}
      />
    </label>
    <button type='submit' className={styles.button} disabled={!inputValue}>
      &crarr;
    </button>
  </form>
);}

export default ToDoForm;