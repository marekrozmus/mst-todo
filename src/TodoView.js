import React from 'react';
import { observer } from 'mobx-react-lite';

import UserPickerView from './UserPickerView';

const TodoView = observer(props => (
  <div>
    <input
      type="checkbox"
      checked={props.todo.done}
      onChange={e => props.todo.toggle()}
    />
    <input
      type="text"
      value={props.todo.name}
      onChange={e => props.todo.setName(e.target.value)}
    />
    <UserPickerView
      user={props.todo.user}
      store={props.store}
      onChange={userId => props.todo.setUser(userId)}
    />
  </div>
));

export default TodoView;
