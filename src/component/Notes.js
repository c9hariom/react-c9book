import React from 'react';
import NoteContext from '../context/notes/NoteContext';
import { useContext } from 'react';
import NoteItem from './NoteItem';
const Notes = () => {
    const context = useContext(NoteContext);
    const {notes,setNotes} = context;
  return (
    <div>
      {notes.map((note)=>{return <NoteItem note={note}></NoteItem>})}
    </div>
  )
}

export default Notes
