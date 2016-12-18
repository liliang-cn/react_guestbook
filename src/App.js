import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import AddButton from './components/AddButton';
import AddForm from './components/AddForm';
import Board from './components/Board';

const paperStyle = {
  minHeight: 600,
  width: 360,
  margin: '20px auto',
  textAlign: 'center'
};

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: [
        {
          title: 'Hello',
          content: 'Leave a message?'
        }
      ],
      showAddForm: false
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.toggleAddForm = this.toggleAddForm.bind(this)
  }

  handleAdd(newMessage) {
    if (newMessage.title && newMessage.content) {
      this.setState({
        messages: this.state.messages.concat(newMessage)
      })
    }
  }

  toggleAddForm() {
    this.setState({
      showAddForm: !this.state.showAddForm
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="React Guestbook"
            showMenuIconButton={false}
          />
          <Paper style={paperStyle} zDepth={5}>
            {this.state.showAddForm 
              ? 
              <AddForm handleAdd={this.handleAdd} toggleAddForm={this.toggleAddForm}/> 
              : 
              <AddButton toggleAddForm={this.toggleAddForm} /> 
            }
            <Board messages={this.state.messages}/>
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
