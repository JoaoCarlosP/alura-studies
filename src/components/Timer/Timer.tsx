import React from 'react'
import Button from '../Button/Button';
import Clock from './Clock/Clock';
import style from './Timer.module.scss'

function Timer() {
  return (
    <div className={style.timer}>
      <p className={style["timer__tittle"]}>Escolha um CARD para iniciar o cronômetro</p>

      <div className={style['timer__clock-wrapper']}>
        <Clock />
      </div>

      <Button>Começar!</Button>
    </div>
  )
}

export default Timer;
