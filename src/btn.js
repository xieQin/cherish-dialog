/*eslint-disable no-unused-vars*/
import React from 'react'
import Dialog from './dialog'

export default React.createClass({
  getInitialState () {
    return {
      status: 'hidden',
      title: 'This is title',
      text: 'This is text'
    }
  },

  handleClick () {
    let status = this.state.status === '' ? 'hidden' : ''
    this.setState({status: status})
  },

  render () {
    return (
      <div>
        <Dialog status={this.state.status} title={this.state.title} text={this.state.text} onCloseClick={this.handleClick}/>
        <button className='btn' onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
})
