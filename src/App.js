require('./style.sass')
import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      courses:{
        '001':{
          title:'Introduccion a JS',
          desc: 'Javascript es uno de los lenguajes de programacion mas populares y completos de la web',
          img: 'http://loremflickr.com/100/100'
        },
        '002':{
          title:'Introduccion a JS',
          desc: 'Javascript es uno de los lenguajes de programacion mas populares y completos de la web',
          img: 'http://loremflickr.com/100/100'
        },
        '003':{
          title:'Introduccion a JS',
          desc: 'Javascript es uno de los lenguajes de programacion mas populares y completos de la web',
          img: 'http://loremflickr.com/100/100'
        },
        '004':{
          title:'Introduccion a JS',
          desc: 'Javascript es uno de los lenguajes de programacion mas populares y completos de la web',
          img: 'http://loremflickr.com/100/100'
        },
        '005':{
          title:'Introduccion a JS',
          desc: 'Javascript es uno de los lenguajes de programacion mas populares y completos de la web',
          img: 'http://loremflickr.com/100/100'
        }

      },
      teachers:{}
    }

    this.renderCourse = this.renderCourse.bind(this);
  }
  renderCourse(key){
    console.log(key);
    var data = {
      title:this.state.courses[key].title,
      desc:this.state.courses[key].desc,
      img:this.state.courses[key].img
    }
    console.log(data);
    return <Course key={key} data={data} />
  }
  render() {
    return (
      <div className="App">
        <Nav/>
        <Main courses={this.state.courses} renderCourse={this.renderCourse}/>
        <Footer/>
      </div>
    );
  }
}

class Main extends Component{

  render(){
    return(
      <main className="container main-course Main">
      <div id="header-title">
      <h2>CURSOS</h2>
      </div>
      <section className="row row-course">
      {Object.keys(this.props.courses).map(this.props.renderCourse)}
      </section>
      </main>
    )
  }
}

class Course extends Component{
  render(){
    var data = this.props.data
    console.log(this.propos)
    return(
      <div className="one-third column courses">
      <a href="/courses/:id">
      <img className="course-logo" src={data.img} alt={data.title}/>
      <h6>{data.title}</h6>
      <p>
      {data.desc}
      </p>
      </a>
      </div>
    )
  }
}





export default App;
