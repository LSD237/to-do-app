import { FC } from 'react';

const ToDoControlPanel: FC = () => (
  <div>
    <span>2 items left</span>
    <div>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
    <button>Clear completed</button>
  </div>
);

export default ToDoControlPanel;