import React from 'react';
import StudyForm from '../components/StudyForm/StudyForm';
import StudyList from '../components/StudyList/StudyList';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <StudyForm />
      <StudyList />
    </div>
  )
}

export default App;
