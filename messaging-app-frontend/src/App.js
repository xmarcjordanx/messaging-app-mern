import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js'
import axios from './components/axios'
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
  const [messages, setMessages] = useState([])
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    axios.get("/messages/sync").then(res => { 
      setMessages(res.data)
    })
  },[])

  useEffect(() => {
    const pusher = new Pusher('ab187e656764ba790584', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  },[messages])

  console.log(messages)

  return (
    <div className="app">
      { !user ? <Login/> : (

        <div className="app__body">
          <Sidebar messages={messages} />
          <Chat messages={messages}/>
      </div>
      )}
  </div>
  );
}

export default App;
