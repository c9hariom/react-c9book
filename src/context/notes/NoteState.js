import NoteContext from './NoteContext'
import { useState } from 'react'

const NoteState = props => {
  const host = 'http://localhost:5000'
  const notesInitial = []
  const token = localStorage.getItem('token')
  const [notes, setNotes] = useState(notesInitial)

  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
        method: 'GET',
        headers: {
          'auth-token': token,
          'content-type': 'application/json'
        }
      })
      const data = await response.json()
      //console.log(data)
      setNotes(data)
    } catch (error) {
      console.error(error)
    }
  }

  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote/`, {
        method: 'POST',
        headers: {
          'auth-token': token,
          'content-type': 'application/json'
        },
        body: JSON.stringify({ title, description, tag })
      })
      const data = await response.json()
      let note = {
        title: title,
        description: description,
        tag: tag ? tag : 'general',
        _id: data._id
      }
      setNotes(notes.concat(note))
    } catch (error) {
      console.log({ error })
    }
  }

  const updateNote = async (id, title, description, tag) => {
    try {
      //console.log(id, title, description, tag)
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'auth-token': token,
          'content-type': 'application/json'
        },
        body: JSON.stringify({ title, description, tag })
      })
      const data = await response.json()
      // getNotes()
      let updatedNote = []
      for (let i = 0; i < notes.length; i++) {
        let element = notes[i]
        if (element._id === id) {
          element.title = title
          element.description = description
          element.tag = tag
        }
        updatedNote.push(element)
      }
      setNotes(updatedNote)
    } catch (error) {
      console.log({ error })
    }
  }

  const deleteNote = async id => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'auth-token': token,
          'content-type': 'application/json'
        },
        body: JSON.stringify({ id })
      })
      const data = await response.json()

      let newNotes = notes.filter(note => {
        return note._id !== id
      })
      setNotes(newNotes)
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, updateNote, deleteNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
