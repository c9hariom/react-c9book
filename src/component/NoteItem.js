import React from 'react'

const NoteItem = (props) => {
    const {title,description,user,id}=props.note
  return (
    <div className='col-md-4'>
        <div className="card my-2" style={{}}>
  <div className="card-body ">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
  </div>
</div>
    </div>
  )
}

export default NoteItem
 