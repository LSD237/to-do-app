import { TToDoItem } from './../../../../utils/types';
import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface IToDoFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  setToDo: Dispatch<SetStateAction<TToDoItem[]>>;
}