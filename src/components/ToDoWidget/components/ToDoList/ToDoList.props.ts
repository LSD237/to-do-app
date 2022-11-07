import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ToDoFilters, TToDoItem } from '../../../../utils/types';

type THandlers = {
  changeHandler: (id: string) => void;
  removeHandler: (id: string) => void;
  reorderHandler: (sortedTodos: TToDoItem[]) => void;
};

export interface IToDoListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  todos: TToDoItem[];
  filter: ToDoFilters;
  handlers: THandlers;
}
