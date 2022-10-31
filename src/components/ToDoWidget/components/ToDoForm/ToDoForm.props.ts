import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IToDoFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  addToDo: (value: string) => void;
}