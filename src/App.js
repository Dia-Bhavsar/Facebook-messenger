import React, {useState, useEffect} from 'react';
import './App.css';
import Message from './Message';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core'
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc =>({id: doc.id, message: doc.data()}
      )))
    })
  }, [input])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []) //condition If it is [] blank it just runs onces when component loads

  const sendMessage = (event) =>{
    event.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <img src= "https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt = "No Image"/>
    <h2>Welcome {username}</h2>

  <form className = "app__form">
     <FormControl className = "app__formControl">
      <Input className= "app__input" placeholder = "Enter message..." value = {input} onChange ={event =>setInput(event.target.value)} />
     
      <IconButton className = "app__iconButton" disabled = {!input} variant="contained" color= "primary" type = "submit" onClick = {sendMessage}>
        <SendIcon/>
      </IconButton>
    </FormControl>
      
  </form>
    

    {/* Message Goes here */}

    <FlipMove>
    {
      messages.map(({message, id}) =>(
        <Message key ={id} username = {username}  message = {message}/>
      ))
    }
    </FlipMove>
    </div>
  );
}

export default App;
