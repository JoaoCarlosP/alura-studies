import React from 'react'
import StudyListItem from './StudyListItem';
import style from './StudyList.module.scss'
import { tasks } from './StudyListConstants';

function StudyList() {
  return (
    <aside className={style.todoList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <StudyListItem
            key={index}
            task={item.task}
            time={item.time}
          />
        ))}
      </ul>
    </aside>
  )
}

export default StudyList;
