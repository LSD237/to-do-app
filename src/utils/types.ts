export type TToDoItem = {
  label: string;
  completed: boolean;
  id: string;
  orderIndex: number; 
};

export enum ToDoFilters {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}
