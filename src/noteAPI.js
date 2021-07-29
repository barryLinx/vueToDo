export default class NoteAPI{
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notesApp-notes") || "[]");
    return notes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }

  // static saveNote(noteToSave) { 
  //   const notes = this.getAllNotes();
  //   const existing= notes.find(note => note.id == noteToSave.id)
    
  //   if (existing){
  //     /// Edit
  //     let {title,body} = noteToSave;
  //     existing.title = title;
  //     existing.body = body;
  //     existing.updated= new Date().toISOString();
  //   }else{
  //     ///Create
  //     noteToSave.id = Math.floor(Math.random() * 1000000);
  //     noteToSave.updated = new Date().toISOString();
  //     notes.push(noteToSave);
  //   }

  //   localStorage.setItem("notesApp-notes", JSON.stringify(notes));
  // }

  // static deleteNote(id) {
  //   const notes = this.getAllNotes();
  //   const newNotes = notes.filter(n => n.id != id);
  //   localStorage.setItem("notesApp-notes",JSON.stringify(newNotes));
  // }
}