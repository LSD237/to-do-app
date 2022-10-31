import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TToDoItem } from '../../../../utils/types';

export interface IToDoListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  todos: TToDoItem[];
  filter: 'all' | 'active' | 'completed';
  changeHandler: (id: string) => void;
  removeHandler: (id: string) => void;
}
