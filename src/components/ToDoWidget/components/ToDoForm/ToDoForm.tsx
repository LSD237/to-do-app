import { ChangeEvent, FC, FormEvent, useState } from 'react';
import cx from 'classnames';
import styles from './ToDoForm.module.css';
import { IToDoFormProps } from './ToDoForm.props';

const ToDoForm: FC<IToDoFormProps> = ({ addToDo, className, ...props }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    addToDo(inputValue);
    setInputValue('');
  };

  return (
    <form className={cx(styles.form, className)} {...props} onSubmit={formSubmitHandler}>
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
      {inputValue && (
        <button type='submit' className={styles.button} disabled={!inputValue}>
          &crarr;
        </button>
      )}
    </form>
  );
};

export default ToDoForm;
