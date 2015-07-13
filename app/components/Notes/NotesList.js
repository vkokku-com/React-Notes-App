import React from 'react';

class NotesList extends React.Component{
    propTypes: {
        notes: React.PropTypes.array.isRequired
        };
   render(){
       var notes = this.props.notes.map((note, index) =>{
           return <li  className="list-group-item" key={index}> {note}</li>
       });
       return (
           <ul className="list-group">
               {notes}
           </ul>
       )
   };
}

export default NotesList;
