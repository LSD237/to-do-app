export type TToDoItem = {
  label: string;
  completed: boolean;
  id: string;
};

export enum ToDoFilters {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}
