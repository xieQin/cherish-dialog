/*eslint-disable no-unused-vars*/
import React from 'react'

export default React.createClass({
  render () {
    return (
      <div id='dialog-layer' className={this.props.status}>
        <div className='mask' onClick={this.props.onCloseClick}></div>
        <div className='dialog'>
          <div className='close' onClick={this.props.onCloseClick}>X</div>
          <div className='title'>{this.props.title}</div>
          <div className='text'>{this.props.text}</div>
        </div>
      </div>
    )
  }
})
