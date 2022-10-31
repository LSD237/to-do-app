import { FC } from 'react';
import cx from 'classnames';
import styles from './ToDoControlPanel.module.css';
import { IToDoControlPanelProps } from './ToDoControlPanel.props';
import { ToDoFilters } from '../../../../utils/types';

const ToDoControlPanel: FC<IToDoControlPanelProps> = ({ filterHandler, counter, clearHandler, className, ...props }) => (
  <div className={cx(styles.panel, className)} {...props}>
    <span className={styles.panel__counter}>{counter} items left</span>
    <div className={styles.panel__btnWrapper}>
      <button className={styles.panel__btn} onClick={() => filterHandler(ToDoFilters.All)}>
        All
      </button>
      <button className={styles.panel__btn} onClick={() => filterHandler(ToDoFilters.Active)}>
        Active
      </button>
      <button className={styles.panel__btn} onClick={() => filterHandler(ToDoFilters.Completed)}>
        Completed
      </button>
    </div>
    <button className={cx(styles.panel__btn, styles.panel__removeBtn)} onClick={clearHandler}>
      Clear completed
    </button>
  </div>
);

export default ToDoControlPanel;
