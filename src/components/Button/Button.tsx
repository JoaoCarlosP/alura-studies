import React from 'react'
import style from './Button.module.scss'

class Button extends React.Component<{children: string}> {
  render() {
    return (
      <button className={style.button}>
        {this.props.children || 'teste'}
      </button>
    )
  }
}

export default Button
