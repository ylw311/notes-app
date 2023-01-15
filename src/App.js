import NotesList from './components/notesList';
import { useState } from 'react';
import {nanoid} from 'nanoid';
import Search from './components/Search';

const App = () => {
  const [note, setNote] = useState([
  {
    id: nanoid(),
    text: "note1",
    date: "idk when"
  }, 
  {
    id: nanoid(),
    text: "note2",
    date: "idk when2"
  }
]);

  const [searchText, setSearchText] = useState('');

  const createNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...note, newNote];
    setNote(newNotes);

  };

  const deleteNote = (id) => {
    const newNotes = note.filter((note)=>note.id!==id);
    setNote(newNotes);


  }


  return <div className='container'>
    <Search handleSearchNote={setSearchText}/>
    <NotesList note={note.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={createNote} handleDeleteNote={deleteNote}/>
  </div>
}

export default App;