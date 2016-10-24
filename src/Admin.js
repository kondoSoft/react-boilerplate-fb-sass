require('./style.sass')
import './App.css';
import React, {Component} from 'react'
import Nav from './Nav'
import Footer from './Footer'
class Admin extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
      return (
        <div className='App'>
          <Nav/>
          <main className="container main-course Main">
            <h1>admin</h1>
          </main>
          <Footer/>
        </div>
      )

  }
}
export default Admin
