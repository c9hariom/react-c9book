import NoteContext from "./NoteContext";
import { useState } from "react";


const NoteState = (props)=>{

const notesInitial = [
    {
      "_id": "65cb6dacd133702cab1f3752",
      "user": "65cb226a461f71ae3a687a5d",
      "title": "test note",
      "description": "test description",
      "tag": "test",
      "date": "2024-02-13T13:25:00.681Z",
      "__v": 0
    },
    {
      "_id": "65cb6dacd133702cab1f3754",
      "user": "65cb226a461f71ae3a687a5d",
      "title": "updated note",
      "description": "updated description",
      "tag": "test",
      "date": "2024-02-13T13:25:00.843Z",
      "__v": 0
    }, {
        "_id": "65cb6dacd133702cab1f3752",
        "user": "65cb226a461f71ae3a687a5d",
        "title": "test note",
        "description": "test description",
        "tag": "test",
        "date": "2024-02-13T13:25:00.681Z",
        "__v": 0
      }, {
        "_id": "65cb6dacd133702cab1f3752",
        "user": "65cb226a461f71ae3a687a5d",
        "title": "test note",
        "description": "test description",
        "tag": "test",
        "date": "2024-02-13T13:25:00.681Z",
        "__v": 0
      }, {
        "_id": "65cb6dacd133702cab1f3752",
        "user": "65cb226a461f71ae3a687a5d",
        "title": "test note",
        "description": "test description",
        "tag": "test",
        "date": "2024-02-13T13:25:00.681Z",
        "__v": 0
      }, {
        "_id": "65cb6dacd133702cab1f3752",
        "user": "65cb226a461f71ae3a687a5d",
        "title": "test note",
        "description": "test description",
        "tag": "test",
        "date": "2024-02-13T13:25:00.681Z",
        "__v": 0
      }, {
        "_id": "65cb6dacd133702cab1f3752",
        "user": "65cb226a461f71ae3a687a5d",
        "title": "test note",
        "description": "test description",
        "tag": "test",
        "date": "2024-02-13T13:25:00.681Z",
        "__v": 0
      }, {
        "_id": "65cb6dacd133702cab1f3752",
        "user": "65cb226a461f71ae3a687a5d",
        "title": "test note",
        "description": "test description",
        "tag": "test",
        "date": "2024-02-13T13:25:00.681Z",
        "__v": 0
      }, {
        "_id": "65cb6dacd133702cab1f3752",
        "user": "65cb226a461f71ae3a687a5d",
        "title": "test note",
        "description": "test description",
        "tag": "test",
        "date": "2024-02-13T13:25:00.681Z",
        "__v": 0
      }, {
        "_id": "65cb6dacd133702cab1f3752",
        "user": "65cb226a461f71ae3a687a5d",
        "title": "test note",
        "description": "test description",
        "tag": "test",
        "date": "2024-02-13T13:25:00.681Z",
        "__v": 0
      }, {
        "_id": "65cb6dacd133702cab1f3752",
        "user": "65cb226a461f71ae3a687a5d",
        "title": "test note",
        "description": "test description",
        "tag": "test",
        "date": "2024-02-13T13:25:00.681Z",
        "__v": 0
      },
  ]

  const [notes,setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;