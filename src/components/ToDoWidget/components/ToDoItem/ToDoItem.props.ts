import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TToDoItem } from '../../../../utils/types';
export interface IToDoItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  itemData: TToDoItem;
  changeHandler: (id: string) => void;
  removeHandler: (id: string) => void;
}