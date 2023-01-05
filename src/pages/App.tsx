import React from 'react';
import StudyForm from '../components/StudyForm/StudyForm';
import StudyList from '../components/StudyList/StudyList';
import Timer from '../components/Timer/Timer';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <StudyForm />
      <StudyList />
      <Timer />
    </div>
  )
}

export default App;
