require('./style.sass')
import './App.css';
import React, {Component} from 'react'
import Nav from './Nav'
import Footer from './Footer'
import AdminMenu from './AdminMenu'
import Input from './Input'
import CoursesList from './Courses'
import request from 'superagent'
// import Dropzone from 'react-dropzone'
//
// class Photo extends Component{
//   onDrop(acceptedFiles, rejectedFiles){
//     console.log('Accepted', acceptedFiles);
//     console.log('Rejected', rejectedFiles);
//   }
//   render(){
//     return(
//       <div>
//          <Dropzone onDrop={this.onDrop}>
//            <div>Try dropping some files here, or click to select files to upload.</div>
//          </Dropzone>
//        </div>
//     )
//   }
// }
class Admin extends Component{
  constructor(props){
    super(props)
    this.state = {}
    this.addCourse = this.addCourse.bind(this)
  }
  addCourse(e){
    e.preventDefault()
    request.post('http://localhost:8080/courses/new')
    .send({
      title: this.refs.title.value,
      desc: this.refs.desc.value,
      img: this.refs.url.value
    })
    .withCredentials()
    .accept('application/json')
    .end((err, res)=>{
      if(err)
        throw err

      console.log(res);
    })
    console.log(this.refs);
  }
  render(){
      return (
        <div className='App'>
          <Nav/>
          <AdminMenu/>
          <main className="container main-course Main">
          <form ref='form' onClick={this.addCourse} action='' method='POST'>
            <h1>New Course</h1>
            <Input placeholder='Nombre del Curso' icon='fa-file' ref='title'/>
            <Input type='textarea' placeholder='Descripción' icon='fa-file-text' ref='desc'/>
            <Input placeholder='URL de imagen' icon='fa-picture-o' ref='url'/>
            <button>Create course</button>
          </form>
          <CoursesList/>
          </main>
          <Footer/>
        </div>
      )

  }
}
export default Admin
