import React from 'react'
import './StudyList.scss'

  const tasks = [
  { task: 'React', time: '02:00:00' },
  { task: 'Javascript', time: '01:00:00' },
  { task: 'Typescript', time: '03:50:24' }
]

function StudyList() {
  return (
    <aside className='todoList'>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className='item'>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default StudyList;