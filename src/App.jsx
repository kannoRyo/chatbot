import React from 'react'
import './assets/styles/style.css'
import defaultDetaset from './dataset'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answers: [],
      chats: [],
      currentID: 'init',
      dataset:defaultDetaset,
      open: false
    } 
  }

  render(){
    return (
      <section className="c-section">
        <div className="c-box">
        </div>
      </section>
    );
  }
}


