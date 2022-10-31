import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IToDoWidgetProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label?: string; 
}