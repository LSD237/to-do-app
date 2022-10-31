import { ToDoFilters } from './../../../../utils/types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IToDoControlPanelProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  counter: number;
  activeFilter: ToDoFilters;
  clearHandler: () => void;
  filterHandler: (filter: ToDoFilters) => void;
}
