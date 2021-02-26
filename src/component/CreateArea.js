import React, { useState } from "react";


import { Button } from "bootstrap";

function CreateArea(props) {
  

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    while(title!=="Global" || title!=="global"){

    
    setNote({
      title: "",
      content: ""
    });
  }
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {(
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Module"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Content"
        />
        
          <Button onClick={submitNote} />
          
      </form>
    </div>
  );
}

export default CreateArea;