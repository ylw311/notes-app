import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import Search from "./components/Search";
import Header from "./components/Header";
import NotesList from "./components/notesList";

const App = () => {
  const [note, setNote] = useState(() => {
    return JSON.parse(localStorage.getItem('react-notes-app-data')) || []
		
  });

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

 

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(note)
		);
	}, [note]);


  const createNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...note, newNote];
    setNote(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = note.filter((note) => note.id !== id);
    setNote(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          note={note.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={createNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
