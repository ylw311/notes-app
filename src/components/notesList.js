import Note from './note';
import CreateNote from './CreateNote';

const notesList = ({note, handleAddNote, handleDeleteNote}) => {
    return (
    <div className='notelist'>
        {note.map ((note) => <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>)}
        <CreateNote handleAddNote={handleAddNote}/>
    </div>

    );
};

export default notesList;