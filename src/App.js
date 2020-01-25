import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component{

  state = {
    posts: [],
    loading: true
  }

  componentDidMount(){
    axios('https://jsonplaceholder.typicode.com/posts')

    .then(res => {
     this.setState({
       posts: res.data,
       loading: false
     }) 
    })

    .catch(error => console.log(`Axios failed ${error}`))
  }

  render(){
    return(
      <div>
        {this.state.posts.map(post => <h1>{post.title}</h1>)}
      </div>
    )
  }

}