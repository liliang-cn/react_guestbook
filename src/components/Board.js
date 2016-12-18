import React from 'react';

import {List, ListItem} from 'material-ui/List';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const Board = ({messages}) => (
  <List>
    {messages.map((message, index) => (
      <ListItem key={index}>
        <Card style={{textAlign: 'left'}}>
          <CardHeader
            title={message.title}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            {message.content}
          </CardText>
        </Card>
      </ListItem>
    ))}
  </List>
);

export default Board;