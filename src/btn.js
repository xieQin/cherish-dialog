/*eslint-disable no-unused-vars*/
import React from 'react'
import Dialog from './dialog'

export default React.createClass({
  getInitialState () {
    return {
      status: 'hidden'
    }
  },

  handleClick () {
    this.setState({status: ''})
  },

  render () {
    return (
      <div>
        <Dialog status={this.state.status}/>
        <button className='btn' onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
})
