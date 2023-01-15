import NotesList from './components/notesList';
import { useState } from 'react';
import {nanoid} from 'nanoid';

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
  return <div className='container'>
    <NotesList note={note}/>
  </div>
}

export default App;