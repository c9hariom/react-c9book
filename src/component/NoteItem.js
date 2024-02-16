import React from 'react'

const NoteItem = props => {
  const { title, description, user, id } = props.note
  return (
    <div className='col-md-4'>
      <div className='card my-2' style={{}}>
        <div className='card-body '>
            <div className="d-flex align-items-center">
                
          <h5 className='card-title'>{title}</h5>
    <i className="fa-solid fa-trash mx-3"></i>
    <i className="fa-solid fa-pen-to-square"></i>
            </div>
          <p className='card-text'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default NoteItem
