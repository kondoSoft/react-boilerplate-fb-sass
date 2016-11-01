import React, {Component} from 'react'
import ajax from 'superagent'


class CoursesList extends Component{
  constructor(props){
    super(props)
    this.state = {
      courses:{},
      subject:{}
    }
    this.componentWillMount = this.componentWillMount.bind(this)
  }
  addCourse(key){

  }
  componentWillMount(){
    var self = this
    ajax.get('http://localhost:8080/courses')
    .withCredentials()
    .accept('json')
    .end(function(err, res){
      if (err){
        alert('Something went wrong')
        throw err
      }
      var courses = JSON.parse(res.text)
      self.setState({courses: courses})
    })
  }
  render(){
    var coursesKeys = Object.keys(this.state.courses)
    console.log(coursesKeys);
    return(
      <ul>
        {coursesKeys.map((key)=>{
          return <li key={key}>{this.state.courses[key].title}</li>
        })}
      </ul>
    )
  }
}

export default CoursesList
