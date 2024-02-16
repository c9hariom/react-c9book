import React from 'react';
import NoteContext from '../context/notes/NoteContext';
import { useContext } from 'react';
import NoteItem from './NoteItem';
const Notes = () => {
    const context = useContext(NoteContext);
    const {notes,setNotes} = context;
  return (
    <div className='row my-3'>
        <h2>Your Notes</h2>
        {notes.map((note,index)=>{return <NoteItem key={index} note={note}></NoteItem>})}
    </div>
  )
}

export default Notes
