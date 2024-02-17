import React from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

const Notes = () => {
  const context = useContext(NoteContext)
  const { notes, setNotes, addNote } = context

  return (
    <>
      <AddNote />
      <div className='row my-3'>
        <h2>Your Notes</h2>
        {notes.map((note, index) => {
          return <NoteItem key={index} note={note}></NoteItem>
        })}
      </div>
    </>
  )
}

export default Notes
