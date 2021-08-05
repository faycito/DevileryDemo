import React from 'react';
import logo from './logo.svg';
import { io, Socket } from 'socket.io-client';
import './App.css';

const socket = io("http://localhost:8081");
socket.connect();

class App extends React.PureComponent<any,any> {
  state: any;
  socket: Socket;
  constructor(props: any){
    super(props);
    this.state = {
      roomId: '',
      latitude: '',
      longitude: ''
    }
    this.socket = io('http://localhost:8081');
    socket.connect();
  }

  componentDidMount(){
  }

  emitSocket = () => {
    const buildInfo = {
      roomId: this.state.roomId,
      longitude: this.state.longitude,
      latitude: this.state.latitude
    }
    this.socket.emit('latitude-longitude', buildInfo)
  }

  render(){
    const { roomId, longitude, latitude } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input
            type="text"
            value={roomId}
            placeholder="id"
            onChange={(event) => {
              this.setState({roomId: event.target.value}, () => {
                this.emitSocket();
              });
            }}
          />
          <input
            type="text"
            value={latitude}
            placeholder="latitude"
            onChange={(event) => {
              this.setState({latitude: event.target.value}, () => {
                this.emitSocket();
              });
            }}
          />
          <input
            type="text"
            value={longitude}
            placeholder="longitude"
            onChange={(event) => {
              this.setState({longitude: event.target.value}, () => {
                this.emitSocket();
              });
            }}
          />
        </header>
      </div>
    );
  }
}

export default App;
