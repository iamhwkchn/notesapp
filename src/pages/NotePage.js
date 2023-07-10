import React from 'react'
import {useParams} from 'react-router-dom'
import notes from '../assets/data'
import {Link} from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

const NotePage = (props) => {
    let noteId = useParams()
    console.log(noteId.id)
    let note = notes.find(note =>
        note.id === Number(noteId.id))    
    // if (!note) {
    //     return <div>Note not found</div>;
    //   }
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
