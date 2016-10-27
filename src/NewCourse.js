require('./style.sass')
import './App.css';
import React, {Component} from 'react'
import Nav from './Nav'
import Footer from './Footer'
import AdminMenu from './AdminMenu'
import Input from './Input'

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
  }
  render(){
      return (
        <div className='App'>
          <Nav/>
          <AdminMenu/>
          <main className="container main-course Main">
          <form action='' method='POST'>
            <h1>New Course</h1>
            <Input placeholder='Nombre del Curso' icon='fa-file'/>
            <Input type='textarea' placeholder='Descripción' icon='fa-file-text'/>
            <Input placeholder='URL de imagen' icon='fa-picture-o'/>
            <button>Create course</button>
          </form>
          </main>
          <Footer/>
        </div>
      )

  }
}
export default Admin
