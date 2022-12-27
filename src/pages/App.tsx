import React from 'react'
import StudyForm from '../components/StudyForm/StudyForm'
import StudyList from '../components/StudyList/StudyList';
import './styles.scss'

function App() {
  return (
    <div className='AppStyle'>
      <StudyForm />
      <StudyList />
    </div>
  )
}

export default App;
