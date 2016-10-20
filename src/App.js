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
        <NavBar/>
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
export default App;
