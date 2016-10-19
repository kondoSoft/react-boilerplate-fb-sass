require('./style.sass')
import React, { Component } from 'react';
import './App.css';

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
  }
  renderCourse(courseKey){

    return <Course key={courseKey} index={courseKey} course={this.props.courses[courseKey]}/>
  }
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Main courses={this.state.courses} renderCourse={this.renderCourse}/>
        <Footer/>
      </div>
    );
  }
}


class NavBar extends Component{
  render(){
    return (
      <nav className="navbar-index">
      <a href="/"><img src="/imgs/hdh-black-logo.png" alt="Hipatia Dev House" id="logo"/></a>
      <ul>
        <li><a href="{% url 'list_course' %}">CURSOS</a></li>
        <li><a href="{% url 'login' %}">LOGIN</a></li>
      </ul>
      {/* <form className="search" action="" method="post">
          <input type="search" name="name" value=""/>
        </form> */}
    </nav>
  )
  }
}

class Main extends Component{
  render(){
    console.log(this.props);
    return(
      <main className="container main-course Main">
        <div id="header-title">
          <h2>CURSOS</h2>
        </div>
        <section className="row row-course">
          {Object.keys(this.props.courses).map(this.props.renderCourse.bind(this))}
        </section>
      </main>
    )
  }
}

class Footer extends Component{
  render(){
    return(
      <footer id="footer-gray" className='Footer'>
        <section className="row">
          <div className="four columns columns-footer">
            <span className="footer-p">NEWSLETTER</span>
            <p>Suscribete a nuestra newsletter, para enviarte informacion <br/> sobre nuestros programas y oferta educativa.</p>
            <form action="">
                <input type="email" id="input-email" name="name" value="" placeholder="Email"/>
                <input type="submit" className="button yellow" name="name" value="Enviar"/>
            </form>
            <p>HIPATIA<br/>Direccion Calle El Aguila #133 col. Atasta de Serra <br/>
                Telefono:+52 993-2681560</p>
          </div>
          <div className="four columns columns-footer">
            <div className="social-media">
                <p className="footer-p">FOLLOW US</p>
                <a href="https://www.facebook.com/hipatiadevhouse" title="Facebook"><i className="circulo fa fa-facebook fa-2x "></i></a>
                <a href="#" title="Twitter"><i className="circulo fa fa-twitter fa-2x "></i></a>
                <a href="https://www.youtube.com/user/cyberpolin" title="Youtube"><i className="circulo fa fa-youtube-play fa-2x "></i></a>
            </div>
            <div className="social-media">
                <p className="footer-p">LOCALIZANOS</p>
                <a href="#" title="Map"><i className="fa fa-map-marker fa-2x "></i></a>
            </div>
          </div>
          <div className="four columns columns-footer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <p>Ut faucibus lacus non dui consequat bibendum non a tellus
                  Sed rhoncus ex vitae elementum rutrum.</p>

              <p>Fusce vestibulum id nisl at eleifend.</p>

              <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
        </section>
        <div className="footer-legal">
          <img src='/imgs/webmail.png' alt="HipatiaFooter"/>
          <span>Copyright (c) 2016 Copyright Holder All Rights Reserved.</span>
        </div>
      </footer>
    )
  }
}
class Course extends Component{
  render(){
    var courseKey = this.props.index
    return(
      <div className="one-third column courses">
        <a href="/courses/:id">
          <img className="course-logo"src="" alt="Logo del curso"/>
          <h6>{this.state.courses[courseKey].title}</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </a>
      </div>
    )
  }
}
export default App;
