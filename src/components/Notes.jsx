import React from 'react'
import notesCss from '../styles/notes.module.css'

function Notes() {

  return (
    <div className={notesCss.notes}>
      <h2>All notes</h2>
      <textarea onChange={(e) => localStorage.setItem('mynotes', e.target.value)} style={{fontSize: 'large', outline: 'none', border: 'none', backgroundColor: '#F1C75B', resize: 'none', paddingTop: '5%'}}  rows="25"></textarea>
    </div>
  )
}

export default Notes