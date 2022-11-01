import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';

import ToDoItem from './ToDoItem';

const itemData = { label: 'Дело', completed: true, id: 'asd' };

describe('ToDo Item Component', () => {
  it('Item render', () => {
    render(<ToDoItem itemData={itemData} removeHandler={() => {}} changeHandler={() => {}} />);
    expect(screen.getByText('Дело')).toBeInTheDocument();
  });

  it('To-do item рендерится без ошибок',() => {
      const tree = renderer
        .create(<ToDoItem itemData={itemData} removeHandler={() => {}} changeHandler={() => {}} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
})

