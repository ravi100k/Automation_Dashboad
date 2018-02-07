import React from 'react';
import io from 'socket.io-client'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginTop: 16,
  },
};

/**
 * Dialog content can be scrollable.
 */
export default class Output extends React.Component {
  state = {
    open: true,
    output:null
  };
  componentDidMount(){
    var socket = io();
    socket.on('connect', () =>{
      console.log("connected to socket");
			socket.on('output',(data)=>{
				console.log(data,"------------");
				this.setState({output:data},()=>console.log(this.state.output))
			})
    });
    socket.on('disconnect', () =>{
      console.log("disconnected to socket");
    });
  }
  handleClose = () => {
    this.setState({open: false,output:null});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    const radios = [];
    return (
      <div>
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >

        {this.state.output==null ? <div className="loader_image"> <img src='/images/loader.gif' alt="loading image"/> </div> : <div>{this.state.output}</div>}
        </Dialog>
      </div>
    );
  }
}
