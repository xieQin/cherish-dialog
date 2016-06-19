/*eslint-disable no-unused-vars*/
import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className={this.props.status}>
        <div className='mask'></div>
        <div className='dialog'>
          <div className='title'>Title</div>
          <div className='text'>Text</div>
        </div>
      </div>
    )
  }
})
