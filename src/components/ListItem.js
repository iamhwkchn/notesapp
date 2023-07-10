import React from 'react'
import {Link} from 'react-router-dom'

const ListItem = ({note}) => {
    
  return (
    <Link to={`/note/${note.id}`}> {/* use back tick ` here as this is a template literal */}
        <div className='notes-list-item'>
        <h3> {note.body}</h3>
        </div>
         
    </Link>
    
     
    
  )
}

export default ListItem
