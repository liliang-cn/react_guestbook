import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddButton = ({toggleAddForm}) => (
  <FloatingActionButton style={{margin: 20}} onClick={toggleAddForm}>
    <ContentAdd />
  </FloatingActionButton>
);

export default AddButton;