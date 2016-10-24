import React, { Component } from 'react';

class Nav extends Component{
  render(){
    return (
      <nav className="navbar-index">
      <a href="/"><img src="/imgs/hdh-black-logo.png" alt="Hipatia Dev House" id="logo"/></a>
      <ul>
        <li><a href="{% url 'list_course' %}">CURSOS</a></li>
        <li><a href="/admin">LOGIN</a></li>
      </ul>
      {/* <form className="search" action="" method="post">
          <input type="search" name="name" value=""/>
        </form> */}
    </nav>
  )
  }
}

export default Nav;
