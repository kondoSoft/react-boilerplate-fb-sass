import React, {Component} from 'react'
import {Link} from 'react-router'

class AdminMenu extends Component{
  render(){
    return (
      <div className='admin-menu'>
      
        <Link className="btn btn-yellow" to={'/admin/courses/new'}>
          <i className="fa fa-plus fa-lg"></i> New Course
        </Link>
      </div>
    )
  }
}
export default AdminMenu
