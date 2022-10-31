export enum ToDoItemStates {
  Active = 'active',
  Completed = 'completed',
}

export type TToDoItem = {
  label: string;
  state: ToDoItemStates;
};
