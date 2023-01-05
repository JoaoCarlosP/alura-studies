import React from 'react'
import style from './Clock.module.scss'

function Clock() {
  return ( 
  <>
    <span className={style['clock-number']}>0</span>
    <span className={style['clock-number']}>0</span>
    <span className={style['clock-division']}>:</span>
    <span className={style['clock-number']}>0</span>
    <span className={style['clock-number']}>0</span>
  </>
  )
}

export default Clock;
