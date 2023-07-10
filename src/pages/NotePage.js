import React , {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
//import notes from '../assets/data'
import {Link} from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

const NotePage = (props) => {

    let noteId = useParams()
    console.log(noteId.id)
    let [note , setNote] = useState(null)

    // let note = notes.find(note =>
    //     note.id === Number(noteId.id))    
    // if (!note) {
    //     return <div>Note not found</div>;
    //   }

    useEffect(()=>{
      getNote()
    }, [noteId.id])

    let getNote = async()=>{
        let response = await fetch(`http://localhost:8000/notes/${noteId.id}`)
        let data = await response.json()
        setNote(data)
    }


  return (
    <div className='note'>
        <div className = 'note-header'>
            <h3>
                <Link to ="/">
                    <ArrowLeft />
                </Link>
            </h3>
        </div>
      {/* <p> {note?.body}</p> */}
      <textarea value = {note?.body}></textarea>
    </div>
  )
}

export default NotePage
