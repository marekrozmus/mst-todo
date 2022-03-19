import React from 'react';
import { observer } from 'mobx-react-lite';
import { entries } from 'mobx';

const UserPickerView = observer(props => (
  <select
    value={props.user ? props.user.id : ''}
    onChange={e => props.onChange(e.target.value)}
  >
    <option value="">-none-</option>
    {entries(props.store.users).map(([key, value]) => (
      <option key={key} value={value.id}>
        {value.name}
      </option>
    ))}
  </select>
));

export default UserPickerView;
