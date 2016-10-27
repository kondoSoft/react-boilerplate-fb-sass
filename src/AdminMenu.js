import React, {Component} from 'react'

class AdminMenu extends Component{
  render(){
    return (
      <div className='admin-menu'>
        <a className="btn btn-yellow" href="#">
          <i className="fa fa-plus fa-lg"></i> New Course
        </a>
      </div>
    )
  }
}
export default AdminMenu
