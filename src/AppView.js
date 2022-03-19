import React from 'react';
import { observer } from 'mobx-react-lite';
import { entries } from 'mobx';

import TodoView from './TodoView';
import TodoCounterView from './TodoCounterView';

const randomId = () => Math.floor(Math.random() * 1000).toString(36);

const AppView = observer(props => (
  <div>
    <button onClick={e => props.store.addTodo(randomId(), 'New Task')}>
      Add Task
    </button>
    {entries(props.store.todos).map(([key, value]) => (
      <TodoView key={key} store={props.store} todo={value} />
    ))}
    <TodoCounterView store={props.store} />
  </div>
));

export default AppView;
