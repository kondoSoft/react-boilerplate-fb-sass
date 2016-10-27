import React, {Component} from 'react'

class Input extends Component{
  render(){
    var type = 'input'
    if(this.props.type){
      return (
        <div className="textarea-group">
          <span className="input-group-addon"><i className={'fa ' +this.props.icon+ ' fa-fw'}></i></span>
          <textarea placeholder={this.props.placeholder}/>
        </div>
      )
    }

    return (
      <div className="input-group">
        <span className="input-group-addon"><i className={'fa ' +this.props.icon+ ' fa-fw'}></i></span>
        <input placeholder={this.props.placeholder}/>
      </div>
    )
  }
}

export default Input

{/*
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw"></i></span>
  <input class="form-control" type="text" placeholder="Email address">
</div> */}
