import React from 'react';
import { observer } from 'mobx-react-lite';

const TodoCounterView = observer(props => (
  <div>
    {props.store.pendingCount} pending, {props.store.completedCount} completed
  </div>
));

export default TodoCounterView;
