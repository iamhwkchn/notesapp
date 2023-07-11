import React , {useEffect, useState} from 'react'
import {useParams , useNavigate} from 'react-router-dom'
//import notes from '../assets/data'
import {Link} from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

const NotePage = () => {

    let noteId = useParams()
    let noteid_num = noteId.id
    console.log("cool",noteid_num)
    
  
    let [note , setNote] = useState(null)

    // let note = notes.find(note =>
    //     note.id === Number(noteId.id))    
    // if (!note) {
    //     return <div>Note not found</div>;
    //   }

    useEffect(()=>{
      getNote()
    }, [noteid_num])

    let getNote = async()=>{
        if(noteid_num == 'new'){
          return 
        }
        let response = await fetch(`http://localhost:8000/notes/${noteid_num}`)
        let data = await response.json()
        setNote(data)
    }
    // ######### create ##################
    let createNote = async()=>{
      await fetch(`http://localhost:8000/notes/` , {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...note ,'updated': new Date()})
      })
    }
    //###########update ##############
    let updateNote = async()=>{
      await fetch(`http://localhost:8000/notes/${noteid_num}` , {
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...note ,'updated': new Date()})
      })
    }
    let navigate = useNavigate()
    let deleteNode = ()=>{
        fetch(`http://localhost:8000/notes/${noteid_num}` , {
        method:'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      })
      navigate('/')
    }
    
    let handleSubmit = () =>{
      if(noteid_num !== 'new' && !note.body){
        deleteNode()
      }
      else if(noteid_num !== 'new'){
        updateNote()
      }
      else if(noteid_num === 'new' && note !== null){
        createNote()
      }
      
      navigate('/')

    }
    
  return (
    <div className='note'>
        <div className = 'note-header'>
            <h3>
                <Link to ="/">
                    <ArrowLeft onClick={handleSubmit} />
                </Link>
            </h3>
            {noteid_num !== 'new' ?(
              <button onClick={deleteNode}>Delete</button>
            ):(
              <button onClick={handleSubmit}>Done</button>
            )}
            
        </div>
      {/* <p> {note?.body}</p> */}
      <textarea onChange={(e) => {setNote({...note , 'body': e.target.value})}} value = {note?.body}></textarea>
    </div>
  )
}

export default NotePage
