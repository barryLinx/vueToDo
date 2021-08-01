
 function getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("AllNotes") || "[]");
    return notes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }

 function saveNote(noteToSave) { 
    const notes = getAllNotes();
    const existing= notes.find(note => note.id == noteToSave.id)
    
    if (existing){
      /// Edit
      let {title,comment,reminder,status,dateTime} = noteToSave;
      existing.title = title;
      existing.comment = comment;
      existing.updated = dateTime;
      existing.reminder = reminder;
      existing.status = status;
      existing.renderId = Math.floor(Math.random() * 10000);

    }else{
      ///Create
      noteToSave.id = Math.floor(Math.random() * 1000000);
      noteToSave.renderId = Math.floor(Math.random() * 10000);
      noteToSave.updated = new Date().toISOString();
      notes.push(noteToSave);
    }

    localStorage.setItem("AllNotes", JSON.stringify(notes));
  }

 function deleteNote(id) {
    const notes = getAllNotes();
    const newNotes = notes.filter(n => n.id != id);
    localStorage.setItem("AllNotes-notes",JSON.stringify(newNotes));
  }

  export {getAllNotes,saveNote,deleteNote}