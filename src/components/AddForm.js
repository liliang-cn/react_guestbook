import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const raisedButtonStyle = {
  margin: 12,
};

let newTitle = null;
let newContent = null;

const AddForm = ({handleAdd, toggleAddForm}) => (
  <div>
    <TextField
      floatingLabelText="Title"
      onChange={e => newTitle = e.target.value}
    />
    <TextField
      floatingLabelText="Content"
      onChange={e => newContent = e.target.value}
    />
    <RaisedButton label="Add" primary={true} style={raisedButtonStyle} onClick={() => {
      if (newTitle && newContent) {
        const newMessage = {
          title: newTitle,
          content: newContent
        };
        handleAdd(newMessage);
        newTitle = '';
        newContent = '';
        toggleAddForm();
      } else {
        alert('Enter Title and Content please!')
      }
    }} />
    <RaisedButton label="Cancel" secondary={true} style={raisedButtonStyle} onClick={() => {
      newTitle = '';
      newContent = '';
      toggleAddForm();
    }} />
  </div>
);

export default AddForm;
