import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component{

  componentDidMount(){
    axios('https://jsonplaceholder.typicode.com/posts')

    .then(res => {
     console.log(res.data) 
    })

    .catch(error => console.log(`Axios failed ${error}`))
  }

  render(){
    return(
      <h1>Hello World</h1>
    )
  }

}