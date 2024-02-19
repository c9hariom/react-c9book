import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

const AddNote = () => {
  const context = useContext(NoteContext)
  const { addNote } = context

  const [note, setNote] = useState({ title: '', description: '', tag: '' })

  const handleClick = e => {
    e.preventDefault()
    // console.log(note)
    addNote(note.title, note.description, note.tag)
  }

  const onchange = e => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div>
        <div className='container my-3'>
          <h1>Add note</h1>
          <form>
            <div className='mb-3'>
              <label className='form-label'>Title</label>
              <input
                required={true}
                minLength={5}
                type='text'
                className='form-control'
                id='title'
                name='title'
                onChange={onchange}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Description</label>
              <input
                required
                minLength={5}
                type='text'
                className='form-control'
                id='description'
                name='description'
                onChange={onchange}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Tag</label>
              <input
                type='text'
                className='form-control'
                id='tag'
                name='tag'
                onChange={onchange}
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleClick}
              disabled={note.title.length < 5 || note.description.length < 5}
            >
              Add Note
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddNote
