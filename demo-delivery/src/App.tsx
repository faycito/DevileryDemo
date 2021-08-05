import React from 'react';
import Map from './components/Map.component';
import logo from './logo.svg';
import {useParams} from 'react-router-dom';
import { io } from 'socket.io-client';
import './App.css';


function App(props: any) {
  
  const { id } = useParams<{id: string}>();
  const [{latitude, longitude}, setGeoRefernce] = React.useState({latitude: '', longitude: ''});

  React.useEffect(() => {
    if(id){
      const socket = io("http://localhost:8081", {
        query: {
          id
        }
      });
      if(socket.connected){
        socket.disconnect();
      }
      socket.connect();

      socket.on('latitude-longitude', info => {
        console.log({info});
        setGeoRefernce({
          latitude: info.latitude,
          longitude: info.longitude
        })
      });
    }
  }, [id])


  console.log(id);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Map
          latitude={latitude}
          longitude={longitude}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
