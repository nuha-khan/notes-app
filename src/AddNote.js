import React, { useState } from "react";

function AddNote(props) {
  const [note,setNote]=useState({
    title:"",
    content:""
  });
  
  function handleChange(event){
    const {name,value}=event.target;
    setNote(preValue => {
        return {
            ...preValue,
            [name]:value
        }
    })
  }

  function submitNote(event){
    props.btnClick(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} placeholder="Title" value={note.title}/>
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={note.content}/>
        <button type="button" onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default AddNote;

