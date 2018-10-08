import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';

class App extends Component {
///////////////////////////////Connetfirebase////////////////////////////////////
  constructor(props){
    super(props);
      var config = {
          apiKey: "AIzaSyB_3IBcA16Nz7FziJ05FDQD3V-WJL8a5Js",
          authDomain: "testfirebasereact.firebaseapp.com",
          databaseURL: "https://testfirebasereact.firebaseio.com",
          projectId: "testfirebasereact",
          storageBucket: "testfirebasereact.appspot.com",
          messagingSenderId: "3854036757"
      };
      firebase.initializeApp(config);
  }
///////////////////////////////////////////////////////////////////////////  
render() {
  return (
    <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to TRunner99</h2>
        </div>
        <p className="App-intro">
        Test React+Firebase Add Delete and Update Message.
        </p>
     </div> <Header title="Data in Firebase" />
    <div className="container">
    
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
    </div>
  );
 }
}
export default App;