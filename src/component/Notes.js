import React, { useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

const Notes = () => {
  const context = useContext(NoteContext)
  const { notes, getNotes, updateNote } = context
  useEffect(() => {
    getNotes()
  }, [])

  const [editNote, setEditNote] = useState({
    title: '',
    description: '',
    tag: '',
    id:''
  })

  const ref = useRef(null)

  const updateNote2 = notes => {
    setEditNote({
      title: notes.title,
      description: notes.description,
      tag: notes.tag,
      id:notes._id
    })
    // console.log(editNote)
    ref.current.click()
  }

  const handleClick = () => {
    updateNote(editNote.id,editNote.title,editNote.description,editNote.tag)
  }

  const onchange = e => {
    setEditNote({ ...editNote, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote />
      <button
        display='none'
        type='button'
        className='btn btn-primary d-none'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
        ref={ref}
      ></button>
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Update Note
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='mb-3'>
                  <label className='form-label'>Title</label>
                  <input
                    type='text'
                    className='form-control'
                    id='title'
                    name='title'
                    onChange={onchange}
                    value={editNote.title}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Description</label>
                  <input
                    type='text'
                    className='form-control'
                    id='description'
                    name='description'
                    onChange={onchange}
                    value={editNote.description}
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
                    value={editNote.tag}
                  />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={handleClick}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='row my-3'>
        <h2>Your Notes</h2>
        {notes.map((note, index) => {
          return (
            <NoteItem
              key={index}
              note={note}
              updateNote2={updateNote2}
            ></NoteItem>
          )
        })}
      </div>
    </>
  )
}

export default Notes
